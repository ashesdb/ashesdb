locals {
  kubeconfig = yamlencode({
    "apiVersion" : "v1",
    "kind" : "Config",
    "current-context" : "default",
    "contexts" : [
      {
        "name" : "default",
        "context" : {
          "cluster" : "default"
          "namespace" : kubernetes_namespace.ashesdb_com.metadata[0].name,
          "user" : "default",
        },
      },
    ],
    "clusters" : [
      {
        "name" : "default",
        "cluster" : {
          "certificate-authority-data" : base64encode(kubernetes_secret.deployer.data["ca.crt"]),
          "server" : local.kube_host,
        },
      },
    ],
    "users" : [
      {
        "name" : "default",
        "user" : {
          "token" : kubernetes_secret.deployer.data.token,
        },
      },
    ],
  })
}

resource "github_actions_secret" "kubeconfig" {
  repository      = "ashesdb"
  secret_name     = "KUBECONFIG"
  plaintext_value = local.kubeconfig
}
