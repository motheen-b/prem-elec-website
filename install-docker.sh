#!/bin/bash

# Docker Installation Script for Ubuntu VPS
# This script automates the installation of Docker Engine and Docker Compose

set -e  # Exit on any error

echo "🐳 Installing Docker on Ubuntu VPS..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root. Please run as a regular user with sudo privileges."
   exit 1
fi

# Check if Docker is already installed
if command -v docker &> /dev/null; then
    print_warning "Docker is already installed!"
    docker --version
    read -p "Do you want to continue with the installation? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 0
    fi
fi

# Update system
print_status "Updating system packages..."
sudo apt update

# Install required packages
print_status "Installing required packages..."
sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
print_status "Adding Docker's official GPG key..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
print_status "Adding Docker repository..."
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update package index
print_status "Updating package index..."
sudo apt update

# Install Docker Engine
print_status "Installing Docker Engine..."
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Start and enable Docker service
print_status "Starting Docker service..."
sudo systemctl start docker
sudo systemctl enable docker

# Add user to docker group
print_status "Adding user to docker group..."
sudo usermod -aG docker $USER

# Configure Docker daemon
print_status "Configuring Docker daemon..."
sudo mkdir -p /etc/docker

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

# Restart Docker to apply configuration
sudo systemctl restart docker

# Configure Docker log rotation
print_status "Configuring Docker log rotation..."
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

# Apply group changes
print_status "Applying group changes..."
newgrp docker

# Test Docker installation
print_status "Testing Docker installation..."
sleep 3

# Check Docker version
docker --version

# Run hello-world container
print_status "Running hello-world container..."
docker run --rm hello-world

# Test Docker Compose
print_status "Testing Docker Compose..."
docker compose version

# Show Docker system info
print_status "Docker system information:"
docker system info | head -10

# Show installation summary
print_status "Installation completed successfully! 🎉"
echo ""
print_status "Docker is now installed and running."
print_status "You can now use Docker commands without sudo."
echo ""
print_warning "Important notes:"
print_warning "1. You may need to log out and back in for group changes to take effect"
print_warning "2. Run 'docker run hello-world' to test the installation"
print_warning "3. Use 'docker system prune' to clean up unused resources"
echo ""
print_status "Useful Docker commands:"
echo "  docker --version          # Check Docker version"
echo "  docker ps                 # List running containers"
echo "  docker images             # List Docker images"
echo "  docker system df          # Check disk usage"
echo "  docker stats              # Monitor containers"
echo "  docker compose version    # Check Docker Compose version"
echo ""
print_status "Docker installation completed!"
