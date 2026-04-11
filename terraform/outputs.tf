# ── Infrastructure ───────────────────────────────────────────────────────────

output "aws_region" {
  description = "AWS region"
  value       = local.aws_region
}

output "instance_ip" {
  description = "Lightsail static IP"
  value       = aws_lightsail_static_ip.main.ip_address
}

output "instance_name" {
  description = "Lightsail instance name"
  value       = aws_lightsail_instance.main.name
}

output "ssh_user" {
  description = "OS user for SSH"
  value       = local.ssh_user
}

output "app_port" {
  description = "Port the server listens on"
  value       = local.app_port
}

output "game_url" {
  description = "Public URL of the game"
  value       = "https://${local.hostname}"
}

# ── Application env vars (written to .env files by provision script) ─────────

output "env_prod" {
  description = "Production environment variables"
  value       = local.env_prod
  sensitive   = true
}

output "env_dev" {
  description = "Local development environment variables"
  value       = local.env_dev
  sensitive   = true
}
