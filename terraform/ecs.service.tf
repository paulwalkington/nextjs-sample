module "ecs_service" {
  source = "terraform-aws-modules/ecs/aws//modules/service"

  name = "${local.prefix}-service"

  cluster_arn = module.ecs_cluster.arn

  desired_count = 1
  cpu           = 1024
  memory        = 4096

  container_definitions = {

    app = {

      cpu       = 1024
      memory    = 4096,
      memoryReservation: 2048,
      essential = true
      image : "${aws_ecr_repository.ecr-repository.repository_url}:latest",
      readonlyRootFilesystem = false

      portMappings = [
        {
          containerPort : 3000,
          hostPort : 3000
        }
      ]

      enable_cloudwatch_logging = true
    }
  }


  load_balancer = {
    service = {
      target_group_arn = module.elb-frontend.target_groups["${local.prefix}-ecs-service"].arn
      container_name   = "app"
      container_port   = 3000
    }
  }

  security_group_ingress_rules = { 
    alb_ingress = {
      description                  = "http from ALB"
      to_port                      = 3000
      from_port                    = 3000
      ip_protocol                  = "tcp"
      referenced_security_group_id = module.elb-frontend.security_group_id
    }
  }

  security_group_egress_rules = {
    all = {
      ip_protocol = "-1"
      cidr_ipv4   = "0.0.0.0/0"
    }
  }

  subnet_ids = module.vpc.private_subnets

  task_exec_secret_arns = ["${tolist(module.rds_wp_db.cluster_master_user_secret)[0].secret_arn}"]

}
