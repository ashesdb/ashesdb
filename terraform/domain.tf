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
