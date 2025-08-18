# Complete Deployment Guide - Vue.js + FastAPI on Ubuntu

## 🚀 **Step 1: Server Setup & Dependencies**

### **Connect to your Ubuntu server:**
```bash
ssh root@your-server-ip
```

### **Update system and install dependencies:**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install required packages
sudo apt install -y python3 python3-pip python3-venv nginx git curl wget unzip

# Install Node.js (for building Vue.js)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install Certbot for SSL
sudo apt install -y certbot python3-certbot-nginx
```

### **Create application directory:**
```bash
# Create app directory
sudo mkdir -p /var/www/theliquidation
sudo chown $USER:$USER /var/www/theliquidation
cd /var/www/theliquidation
```

---

## 🏗️ **Step 2: Deploy Your Application**

### **Clone your repository:**
```bash
# Clone your Vue.js app
git clone https://github.com/your-username/prem-elec-website.git frontend
cd frontend

# Install dependencies
npm install

# Build for production
npm run build

# Move build files to nginx directory
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
```

### **Setup FastAPI backend:**
```bash
# Go back to app directory
cd /var/www/theliquidation

# Create backend directory
mkdir backend
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install FastAPI dependencies
pip install fastapi uvicorn python-multipart python-dotenv fastapi-mail sqlalchemy

# Create your FastAPI app file
nano main.py
```

### **Create FastAPI application (main.py):**
```python
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
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
            # Add more products as needed
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
```

---

## 🔧 **Step 3: Configure Nginx**

### **Create Nginx configuration:**
```bash
sudo nano /etc/nginx/sites-available/theliquidation.group
```

### **Nginx configuration content:**
```nginx
server {
    listen 80;
    server_name theliquidation.group www.theliquidation.group;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
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
```

### **Enable the site:**
```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/theliquidation.group /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

---

## 🔐 **Step 4: Setup SSL Certificate**

### **Get SSL certificate with Let's Encrypt:**
```bash
# Stop nginx temporarily
sudo systemctl stop nginx

# Get SSL certificate
sudo certbot certonly --standalone -d theliquidation.group -d www.theliquidation.group

# Start nginx again
sudo systemctl start nginx
```

### **Update Nginx configuration for SSL:**
```bash
sudo nano /etc/nginx/sites-available/theliquidation.group
```

### **Replace with SSL-enabled configuration:**
```nginx
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
    
    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/theliquidation.group/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/theliquidation.group/privkey.pem;
    
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
```

### **Restart Nginx:**
```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

## ⚙️ **Step 5: Setup FastAPI Service**

### **Create systemd service for FastAPI:**
```bash
sudo nano /etc/systemd/system/fastapi.service
```

### **Service configuration:**
```ini
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
```

### **Set permissions and start service:**
```bash
# Set proper permissions
sudo chown -R www-data:www-data /var/www/theliquidation

# Reload systemd and start service
sudo systemctl daemon-reload
sudo systemctl enable fastapi
sudo systemctl start fastapi

# Check status
sudo systemctl status fastapi
```

---

## 🔄 **Step 6: Setup Auto-Renewal for SSL**

### **Create renewal script:**
```bash
sudo nano /etc/cron.d/ssl-renewal
```

### **Add renewal cron job:**
```bash
# Renew SSL certificate monthly
0 12 1 * * /usr/bin/certbot renew --quiet --post-hook "systemctl reload nginx"
```

---

## 🧪 **Step 7: Testing & Verification**

### **Test your deployment:**
```bash
# Test FastAPI directly
curl http://127.0.0.1:8000/health

# Test through Nginx
curl https://theliquidation.group/health

# Test Vue.js frontend
curl -I https://theliquidation.group/

# Test API endpoint
curl https://theliquidation.group/catalog
```

### **Check logs:**
```bash
# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# FastAPI logs
sudo journalctl -u fastapi -f
```

---

## 🔧 **Step 8: Update Your Vue.js App**

### **Update API base URL in your Vue.js app:**
```javascript
// In your axios configuration or API calls
const API_BASE_URL = 'https://theliquidation.group'

// Example API call
axios.get(`${API_BASE_URL}/catalog`)
```

### **Rebuild and deploy:**
```bash
cd /var/www/theliquidation/frontend
npm run build
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
```

---

## 📊 **Step 9: Monitoring & Maintenance**

### **Setup basic monitoring:**
```bash
# Install monitoring tools
sudo apt install -y htop iotop nethogs

# Monitor system resources
htop
```

### **Setup log rotation:**
```bash
sudo nano /etc/logrotate.d/fastapi
```

### **Log rotation configuration:**
```
/var/log/fastapi.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
    postrotate
        systemctl reload fastapi
    endscript
}
```

---

## 🚨 **Troubleshooting**

### **Common issues and solutions:**

1. **Nginx won't start:**
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   ```

2. **FastAPI won't start:**
   ```bash
   sudo systemctl status fastapi
   sudo journalctl -u fastapi -n 50
   ```

3. **SSL certificate issues:**
   ```bash
   sudo certbot certificates
   sudo certbot renew --dry-run
   ```

4. **Permission issues:**
   ```bash
   sudo chown -R www-data:www-data /var/www/theliquidation
   sudo chmod -R 755 /var/www/theliquidation
   ```

---

## ✅ **Deployment Checklist**

- [ ] Server dependencies installed
- [ ] Vue.js app built and deployed
- [ ] FastAPI backend configured
- [ ] Nginx configured and running
- [ ] SSL certificate obtained
- [ ] FastAPI service running
- [ ] DNS pointing to server IP
- [ ] All endpoints tested
- [ ] SSL auto-renewal configured
- [ ] Monitoring setup

Your liquidation website is now live with SSL! 🎉
