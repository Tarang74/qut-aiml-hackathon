#!/usr/bin/env bash
# Run the full app locally (no Docker) so phones can connect.
# Usage: ./scripts/dev-local.sh
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "==> Building client..."
cd "$ROOT/client"
npm run build

echo "==> Copying static files..."
rm -rf "$ROOT/server/static"
cp -r dist "$ROOT/server/static"

echo "==> Starting server..."
lsof -ti:8080 | xargs kill -9 2>/dev/null || true
cd "$ROOT/server"

LOCAL_IP=$(ipconfig getifaddr en0 2>/dev/null || hostname -I 2>/dev/null | awk '{print $1}')
echo ""
echo "  Open on this machine: http://localhost:8080"
[ -n "$LOCAL_IP" ] && echo "  Open on your phone:   http://${LOCAL_IP}:8080"
echo ""

cargo run --release
