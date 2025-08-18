# Docker Installation Guide for Ubuntu VPS

## 🐳 **Method 1: Install Docker Engine (Recommended)**

### **Step 1: Update System**
```bash
# Update package index
sudo apt update

# Install required packages
sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release
```

### **Step 2: Add Docker's Official GPG Key**
```bash
# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

### **Step 3: Add Docker Repository**
```bash
# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### **Step 4: Install Docker Engine**
```bash
# Update package index again
sudo apt update

# Install Docker Engine
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### **Step 5: Start and Enable Docker**
```bash
# Start Docker service
sudo systemctl start docker

# Enable Docker to start on boot
sudo systemctl enable docker

# Verify Docker is running
sudo systemctl status docker
```

### **Step 6: Add User to Docker Group (Optional but Recommended)**
```bash
# Add your user to docker group (replace 'your-username' with your actual username)
sudo usermod -aG docker $USER

# Apply group changes (you'll need to log out and back in, or run this command)
newgrp docker
```

### **Step 7: Verify Installation**
```bash
# Test Docker installation
docker --version

# Run hello-world container
docker run hello-world
```

---

## 🐳 **Method 2: Install Docker Using Convenience Script**

### **Quick Installation (Alternative Method)**
```bash
# Download and run Docker installation script
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker
```

---

## 🐳 **Method 3: Install Docker Compose**

### **Install Docker Compose (if not already installed)**
```bash
# Install Docker Compose
sudo apt install -y docker-compose-plugin

# Verify installation
docker compose version
```

---

## 🔧 **Docker Configuration**

### **Configure Docker Daemon (Optional)**
```bash
# Create Docker daemon configuration directory
sudo mkdir -p /etc/docker

# Create daemon.json configuration file
sudo tee /etc/docker/daemon.json > /dev/null << 'EOF'
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "storage-driver": "overlay2"
}
EOF

# Restart Docker to apply changes
sudo systemctl restart docker
```

### **Configure Docker Log Rotation**
```bash
# Create logrotate configuration for Docker
sudo tee /etc/logrotate.d/docker > /dev/null << 'EOF'
/var/lib/docker/containers/*/*.log {
    rotate 7
    daily
    compress
    size=1M
    missingok
    delaycompress
    copytruncate
}
EOF
```

---

## 🧪 **Test Docker Installation**

### **Basic Docker Commands**
```bash
# Check Docker version
docker --version

# Check Docker Compose version
docker compose version

# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# List Docker images
docker images

# Check Docker system info
docker system info
```

### **Run Test Container**
```bash
# Run nginx test container
docker run -d -p 8080:80 --name test-nginx nginx

# Check if container is running
docker ps

# Test the container
curl http://localhost:8080

# Stop and remove test container
docker stop test-nginx
docker rm test-nginx
```

---

## 🚀 **Docker for Your Liquidation Website**

### **Create Dockerfile for Vue.js Frontend**
```bash
# Create Dockerfile for frontend
cat > Dockerfile.frontend << 'EOF'
# Use Node.js 18 Alpine for smaller image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Use nginx to serve static files
FROM nginx:alpine

# Copy built files to nginx
COPY --from=0 /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
EOF
```

### **Create Dockerfile for FastAPI Backend**
```bash
# Create Dockerfile for backend
cat > Dockerfile.backend << 'EOF'
# Use Python 3.11 slim
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose port 8000
EXPOSE 8000

# Start FastAPI
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
EOF
```

### **Create Docker Compose File**
```bash
# Create docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.frontend
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      - liquidation-network

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.backend
    ports:
      - "8000:8000"
    environment:
      - CORS_ORIGINS=https://theliquidation.group
    networks:
      - liquidation-network

  nginx:
    image: nginx:alpine
    ports:
      - "443:443"
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - frontend
      - backend
    networks:
      - liquidation-network

networks:
  liquidation-network:
    driver: bridge
EOF
```

---

## 🔐 **Docker Security Best Practices**

### **Run Containers as Non-Root User**
```bash
# Create non-root user in Dockerfile
RUN adduser -D -s /bin/sh appuser
USER appuser
```

### **Use Multi-Stage Builds**
```bash
# Example multi-stage build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

### **Scan Images for Vulnerabilities**
```bash
# Install Docker Scout (if available)
docker scout cves <image-name>

# Use Trivy for vulnerability scanning
# Install Trivy
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin

# Scan image
trivy image <image-name>
```

---

## 📊 **Docker Monitoring**

### **Check Docker Resource Usage**
```bash
# Check Docker disk usage
docker system df

# Check Docker system info
docker system info

# Monitor containers
docker stats

# Check Docker daemon logs
sudo journalctl -u docker.service
```

### **Clean Up Docker**
```bash
# Remove unused containers, networks, images
docker system prune

# Remove all unused images
docker image prune -a

# Remove unused volumes
docker volume prune
```

---

## 🚨 **Troubleshooting**

### **Common Issues and Solutions**

#### **Permission Denied Error**
```bash
# If you get permission denied when running docker commands
sudo usermod -aG docker $USER
newgrp docker
```

#### **Docker Service Won't Start**
```bash
# Check Docker service status
sudo systemctl status docker

# Check Docker logs
sudo journalctl -u docker.service

# Restart Docker service
sudo systemctl restart docker
```

#### **Port Already in Use**
```bash
# Check what's using a port
sudo netstat -tlnp | grep :80

# Stop conflicting service
sudo systemctl stop nginx  # if nginx is running
```

---

## ✅ **Installation Checklist**

- [ ] Docker Engine installed
- [ ] Docker Compose installed
- [ ] User added to docker group
- [ ] Docker service running
- [ ] Docker service enabled on boot
- [ ] Test container runs successfully
- [ ] Docker configuration optimized
- [ ] Security best practices applied

Your Docker installation is now ready! 🐳✨
