terraform {
  required_version = ">= 1.0"

  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = ">= 2.10.1"
    }
    github = {
      source  = "integrations/github"
      version = ">= 4.19.0"
    }
  }
}
