data "cloudflare_zone" "main" {
  zone_id = local.cloudflare_zone_id
}

# ── SSH key pair ─────────────────────────────────────────────────────────────

resource "aws_lightsail_key_pair" "main" {
  name       = "${local.instance_name}-key"
  public_key = local.ssh_public_key
}

# ── Lightsail instance ───────────────────────────────────────────────────────

resource "aws_lightsail_instance" "main" {
  name              = local.instance_name
  availability_zone = "${local.aws_region}a"
  blueprint_id      = "amazon_linux_2023"
  bundle_id         = local.lightsail_bundle_id
  key_pair_name     = aws_lightsail_key_pair.main.name

  # Bootstrap: install Docker on first boot
  user_data = <<-EOF
    #!/bin/bash
    dnf update -y
    dnf install -y docker
    systemctl enable --now docker
    usermod -aG docker ${local.ssh_user}
    mkdir -p /app
    chown ${local.ssh_user}:${local.ssh_user} /app
  EOF

  tags = {
    project = "aura-farmers"
  }
}

# ── Static IP ────────────────────────────────────────────────────────────────

resource "aws_lightsail_static_ip" "main" {
  name = "${local.instance_name}-ip"
}

resource "aws_lightsail_static_ip_attachment" "main" {
  static_ip_name = aws_lightsail_static_ip.main.id
  instance_name  = aws_lightsail_instance.main.id
}

# ── Firewall ─────────────────────────────────────────────────────────────────
# Cloudflare proxies inbound traffic so only port 22 (SSH) and the app port
# need to be open to the internet. TLS is terminated at Cloudflare.

resource "aws_lightsail_instance_public_ports" "main" {
  instance_name = aws_lightsail_instance.main.name

  port_info {
    protocol  = "tcp"
    from_port = 22
    to_port   = 22
  }

  port_info {
    protocol  = "tcp"
    from_port = local.app_port
    to_port   = local.app_port
  }
}

# ── Cloudflare DNS ───────────────────────────────────────────────────────────
# proxied = true → Cloudflare handles TLS + DDoS. Origin only speaks plain HTTP.

resource "cloudflare_record" "main" {
  zone_id = local.cloudflare_zone_id
  name    = local.dns_record_name
  content = aws_lightsail_static_ip.main.ip_address
  type    = "A"
  proxied = true
}
