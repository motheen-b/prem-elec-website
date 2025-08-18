#!/bin/bash

# The Liquidation Group - Deployment Script
# This script automates the deployment of Vue.js + FastAPI on Ubuntu

set -e  # Exit on any error

echo "🚀 Starting deployment for The Liquidation Group..."

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

# Update system
print_status "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install dependencies
print_status "Installing dependencies..."
sudo apt install -y python3 python3-pip python3-venv nginx git curl wget unzip

# Install Node.js
print_status "Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
print_status "Installing PM2..."
sudo npm install -g pm2

# Install Certbot
print_status "Installing Certbot..."
sudo apt install -y certbot python3-certbot-nginx

# Create application directory
print_status "Creating application directory..."
sudo mkdir -p /var/www/theliquidation
sudo chown $USER:$USER /var/www/theliquidation
cd /var/www/theliquidation

# Clone repository (you'll need to update this URL)
print_status "Cloning repository..."
if [ ! -d "frontend" ]; then
    git clone https://github.com/your-username/prem-elec-website.git frontend
fi

# Build Vue.js app
print_status "Building Vue.js application..."
cd frontend
npm install
npm run build

# Deploy frontend
print_status "Deploying frontend..."
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/

# Setup backend
print_status "Setting up FastAPI backend..."
cd /var/www/theliquidation
mkdir -p backend
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
pip install fastapi uvicorn python-multipart python-dotenv fastapi-mail sqlalchemy

# Create FastAPI app
cat > main.py << 'EOF'
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="The Liquidation Group API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://theliquidation.group", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample catalog data
catalog_data = {
    "result": {
        "products": [
            {
                "id": 1,
                "name": "Amazon LPN Electronics Pallet",
                "price": 2500,
                "category": "Electronics",
                "image_url": "https://example.com/image1.jpg",
                "description": "Customer Returns - Electronics liquidation pallet",
                "in-stock": True
            },
            {
                "id": 2,
                "name": "Best Buy Home Appliances Pallet",
                "price": 1800,
                "category": "Appliances",
                "image_url": "https://example.com/image2.jpg",
                "description": "Customer Returns - Home appliances liquidation pallet",
                "in-stock": True
            }
        ],
        "categories": ["Electronics", "Appliances", "Tools", "Home & Garden"]
    }
}

@app.get("/")
async def root():
    return {"message": "The Liquidation Group API"}

@app.get("/catalog")
async def get_catalog():
    return catalog_data

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
EOF

# Create Nginx configuration
print_status "Configuring Nginx..."
sudo tee /etc/nginx/sites-available/theliquidation.group > /dev/null << 'EOF'
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name theliquidation.group www.theliquidation.group;
    return 301 https://$server_name$request_uri;
}

# HTTPS server
server {
    listen 443 ssl http2;
    server_name theliquidation.group www.theliquidation.group;
    
    # SSL configuration (will be added by certbot)
    # ssl_certificate /etc/letsencrypt/live/theliquidation.group/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/theliquidation.group/privkey.pem;
    
    # SSL security settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' https: data: blob: 'unsafe-inline'" always;
    
    # Root directory for Vue.js static files
    root /var/www/html;
    index index.html;
    
    # Handle Vue.js routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # API routes - proxy to FastAPI
    location /api/ {
        proxy_pass http://127.0.0.1:8000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Specific API endpoint for catalog
    location /catalog {
        proxy_pass http://127.0.0.1:8000/catalog;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Health check endpoint
    location /health {
        proxy_pass http://127.0.0.1:8000/health;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security: Hide nginx version
    server_tokens off;
}
EOF

# Enable site
sudo ln -sf /etc/nginx/sites-available/theliquidation.group /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Start Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx

# Create FastAPI service
print_status "Creating FastAPI service..."
sudo tee /etc/systemd/system/fastapi.service > /dev/null << 'EOF'
[Unit]
Description=The Liquidation Group FastAPI
After=network.target

[Service]
Type=exec
User=www-data
Group=www-data
WorkingDirectory=/var/www/theliquidation/backend
Environment=PATH=/var/www/theliquidation/backend/venv/bin
ExecStart=/var/www/theliquidation/backend/venv/bin/uvicorn main:app --host 127.0.0.1 --port 8000 --workers 2
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# Set permissions
sudo chown -R www-data:www-data /var/www/theliquidation

# Start FastAPI service
sudo systemctl daemon-reload
sudo systemctl enable fastapi
sudo systemctl start fastapi

# Setup SSL certificate
print_status "Setting up SSL certificate..."
print_warning "Make sure your domain (theliquidation.group) is pointing to this server's IP address before continuing."
read -p "Press Enter to continue with SSL setup..."

# Stop nginx temporarily for SSL verification
sudo systemctl stop nginx

# Get SSL certificate
sudo certbot certonly --standalone -d theliquidation.group -d www.theliquidation.group

# Start nginx and configure SSL
sudo systemctl start nginx
sudo certbot --nginx -d theliquidation.group -d www.theliquidation.group

# Setup SSL auto-renewal
print_status "Setting up SSL auto-renewal..."
sudo tee /etc/cron.d/ssl-renewal > /dev/null << 'EOF'
# Renew SSL certificate monthly
0 12 1 * * /usr/bin/certbot renew --quiet --post-hook "systemctl reload nginx"
EOF

# Test deployment
print_status "Testing deployment..."
sleep 5

# Test endpoints
echo "Testing FastAPI health endpoint..."
curl -s http://127.0.0.1:8000/health || print_error "FastAPI health check failed"

echo "Testing Nginx..."
curl -s -I https://theliquidation.group/ | head -1 || print_error "Nginx test failed"

echo "Testing API endpoint..."
curl -s https://theliquidation.group/catalog | head -c 100 || print_error "API endpoint test failed"

# Final status check
print_status "Checking service status..."
sudo systemctl status nginx --no-pager -l
sudo systemctl status fastapi --no-pager -l

print_status "Deployment completed successfully! 🎉"
print_status "Your website should be available at: https://theliquidation.group"
print_status "API health check: https://theliquidation.group/health"
print_status "API catalog: https://theliquidation.group/catalog"

print_warning "Don't forget to:"
print_warning "1. Update your Vue.js app's API base URL to https://theliquidation.group"
print_warning "2. Rebuild and redeploy the frontend if needed"
print_warning "3. Set up monitoring and backups"
print_warning "4. Configure your actual catalog data in the FastAPI backend"

echo ""
print_status "Deployment script completed!"
