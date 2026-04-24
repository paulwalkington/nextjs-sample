locals {
  region      = "eu-west-2"
  project     = "njs"
  environment = terraform.workspace
  prefix      = "${local.project}-${local.environment}"
}
