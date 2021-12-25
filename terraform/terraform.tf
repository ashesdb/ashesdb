terraform {
  required_version = ">= 1.0"

  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = ">= 2.16.0"
    }
    github = {
      source  = "integrations/github"
      version = ">= 4.19.0"
    }
  }
}
