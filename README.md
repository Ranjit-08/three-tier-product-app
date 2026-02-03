## backend to rds connection
. yum install mariadb105-server -y
. mysql -h <endpoint> -u admin -p
  password 
# inside sql run this to create database 
CREATE DATABASE productdb;

USE productdb;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  image VARCHAR(255)
);

# install nodejs 

curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -

sudo yum install nodejs -y
# clone backend 
git clone https://github.com/yourusername/three-tier-product-app.git

cd three-tier-product-app/backend
# edit .env
DB_HOST=<RDS-ENDPOINT>
DB_USER=admin
DB_PASSWORD=yourpassword
DB_NAME=productdb
PORT=5000
# install npm
npm install

node server.js

# for background 
npm install -g pm2

pm2 start server.js --name backend

pm2 status
pm2 logs backend

pm2 startup

pm2 save

# frontend to backend connection 
# install git 
- yum install git -y
# install nodejs 
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install nodejs -y
# Update Frontend .env
REACT_APP_API_URL=http://<backend-EC2-PUBLIC-IP>:5000
# Build Frontend
cd frontend

npm install

npm run build
# Serve Frontend (Simple way)
npm install -g serve

serve -s build -l 80
