data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*"]
  }
}

resource "aws_instance" "backend" {
  ami                         = data.aws_ami.amazon_linux.id
  instance_type               = "t2.micro"
  subnet_id                   = aws_subnet.public.id
  vpc_security_group_ids      = [aws_security_group.backend_sg.id]
  key_name                    = "your-keypair"

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install git -y
              curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
              yum install nodejs -y
              npm install -g pm2
              git clone https://github.com/yourusername/three-tier-product-app.git
              cd three-tier-product-app/backend
              npm install
              echo "DB_HOST=${aws_db_instance.mysql.endpoint}" > .env
              echo "DB_USER=${var.db_username}" >> .env
              echo "DB_PASSWORD=${var.db_password}" >> .env
              echo "DB_NAME=productdb" >> .env
              echo "PORT=5000" >> .env
              pm2 start server.js
              pm2 save
              EOF

  tags = { Name = "backend-ec2" }
}

resource "aws_instance" "frontend" {
  ami                    = data.aws_ami.amazon_linux.id
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.public.id
  vpc_security_group_ids = [aws_security_group.frontend_sg.id]
  key_name               = "your-keypair"

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install git -y
              curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
              yum install nodejs -y
              npm install -g serve
              git clone https://github.com/yourusername/three-tier-product-app.git
              cd three-tier-product-app/frontend
              npm install
              echo "REACT_APP_API_URL=http://${aws_instance.backend.public_ip}:5000" > .env
              npm run build
              serve -s build -l 80 &
              EOF

  tags = { Name = "frontend-ec2" }
}
