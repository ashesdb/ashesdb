data "kubernetes_service" "ingress" {
  metadata {
    name      = "ingress-nginx-controller"
    namespace = "ingress"
  }
}

locals {
  ingress_ip = data.kubernetes_service.ingress.status[0].load_balancer[0].ingress[0].ip
}

resource "digitalocean_domain" "ashesdb_com" {
  name = "ashesdb.com"
}

# NS records
resource "digitalocean_record" "ashesdb_com_ns" {
  for_each = toset(["1", "2", "3"])

  domain = digitalocean_domain.ashesdb_com.id
  type   = "NS"
  name   = "@"
  ttl    = 1800
  value  = "ns${each.value}.digitalocean.com."
}

# A records
resource "digitalocean_record" "ashesdb_com_a" {
  for_each = {
    "@"   = local.ingress_ip
    "www" = local.ingress_ip
  }

  domain = digitalocean_domain.ashesdb_com.id
  type   = "A"
  name   = each.key
  ttl    = 1800
  value  = each.value
}
