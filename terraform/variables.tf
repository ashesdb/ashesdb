variable "ghcr_token" {
  type        = string
  description = "Token that has read access to the GitHub Container Registry."
  sensitive   = true
}

variable "ghcr_user" {
  type        = string
  description = "User that has read access to the GitHub Container Registry."
}

variable "ingress_ip" {
  type        = string
  description = "Ingress IP address."
}
