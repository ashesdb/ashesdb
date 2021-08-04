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
    "@"   = var.ingress_ip
    "www" = var.ingress_ip
  }

  domain = digitalocean_domain.ashesdb_com.id
  type   = "A"
  name   = each.key
  ttl    = 3600
  value  = each.value
}
