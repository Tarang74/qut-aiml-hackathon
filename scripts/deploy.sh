#!/usr/bin/env bash
# Builds the Docker image locally and deploys it to the Lightsail instance.
# Run provision-infrastructure.sh first to generate .env and development.env.
#
# Usage: ./scripts/deploy.sh

set -euo pipefail

export AWS_PROFILE="${AWS_PROFILE:-personal}"

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TF_DIR="$REPO_ROOT/terraform"

# ── Read deploy targets from Terraform outputs ───────────────────────────────

instance_ip=$(terraform -chdir="$TF_DIR" output -raw instance_ip)
ssh_user=$(terraform    -chdir="$TF_DIR" output -raw ssh_user)
app_port=$(terraform    -chdir="$TF_DIR" output -raw app_port)
game_url=$(terraform    -chdir="$TF_DIR" output -raw game_url)

SSH_KEY="${SSH_KEY_PATH:-$HOME/.ssh/lightsail/aura-farmers}"
CONTAINER_NAME="aura-farmers"
IMAGE_NAME="aura-farmers:latest"

# ── Build ─────────────────────────────────────────────────────────────────────

echo "==> Building Docker image (linux/amd64)..."
docker build --platform linux/amd64 -t "$IMAGE_NAME" "$REPO_ROOT"

# ── Ship ──────────────────────────────────────────────────────────────────────

echo "==> Streaming image to ${ssh_user}@${instance_ip}..."
docker save "$IMAGE_NAME" \
  | gzip \
  | ssh -i "$SSH_KEY" -o StrictHostKeyChecking=accept-new \
      "${ssh_user}@${instance_ip}" "gunzip | docker load"

# ── Restart ───────────────────────────────────────────────────────────────────

echo "==> Restarting container..."
# shellcheck disable=SC2087
ssh -i "$SSH_KEY" "${ssh_user}@${instance_ip}" bash <<ENDSSH
  set -euo pipefail
  docker stop  ${CONTAINER_NAME} 2>/dev/null || true
  docker rm    ${CONTAINER_NAME} 2>/dev/null || true
  docker run -d \
    --name ${CONTAINER_NAME} \
    --restart unless-stopped \
    -p 80:${app_port} \
    --env-file /app/.env \
    ${IMAGE_NAME}
  docker image prune -f
ENDSSH

echo ""
echo "==> Deploy complete!"
printf "    Live at: %s\n" "$game_url"
