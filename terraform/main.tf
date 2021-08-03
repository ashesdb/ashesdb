module "namespace" {
  source = "github.com/chiel/project-namespace"

  name       = "ashesdb"
  ghcr_token = var.ghcr_token
  ghcr_user  = var.ghcr_user
}

resource "github_repository" "ashesdb" {
  name                   = "ashesdb"
  visibility             = "public"
  delete_branch_on_merge = true
  has_downloads          = false
  has_issues             = true
  has_projects           = false
  has_wiki               = false
}
