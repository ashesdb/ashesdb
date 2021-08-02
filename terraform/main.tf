resource "github_repository" "ashesdb" {
  name                   = "ashesdb"
  visibility             = "public"
  delete_branch_on_merge = true
  has_downloads          = false
  has_issues             = true
  has_projects           = false
  has_wiki               = false
}
