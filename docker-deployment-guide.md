# 🐳 Docker Deployment Guide for Liquidation Website

## 🚀 **Quick Start with Docker**

### **Prerequisites:**
- Docker installed on your Ubuntu VPS
- Your Vue.js + FastAPI code ready
- Domain name pointing to your server

---

## 📁 **Project Structure**

```
theliquidation-website/
├── frontend/                 # Vue.js application
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── backend/                  # FastAPI application
│   ├── main.py
│   ├── requirements.txt
│   └── Dockerfile
├── nginx/                    # Nginx configuration
│   ├── nginx.conf
│   └── ssl/
├── docker-compose.yml        # Main deployment file
└── .env                      # Environment variables
```

---

## 🔧 **Step 1: Create Docker Configuration Files**

### **Frontend Dockerfile**
```bash
# Create frontend Dockerfile
cat > frontend/Dockerfile << 'EOF'
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
EOF
```

### **Backend Dockerfile**
```bash
# Create backend Dockerfile
cat > backend/Dockerfile << 'EOF'
FROM python:3.11-slim

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

# Create non-root user
RUN adduser --disabled-password --gecos '' appuser
USER appuser

# Expose port 8000
EXPOSE 8000

# Start FastAPI
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
EOF
```

### **Backend Requirements**
```bash
# Create requirements.txt
cat > backend/requirements.txt << 'EOF'
fastapi==0.104.1
uvicorn[standard]==0.24.0
python-multipart==0.0.6
python-dotenv==1.0.0
fastapi-mail==1.4.1
sqlalchemy==2.0.23
pydantic==2.5.0
EOF
```

### **Nginx Configuration**
```bash
# Create nginx configuration
mkdir -p nginx
cat > nginx/nginx.conf << 'EOF'
events {
    worker_connections 1024;
}

http {
    upstream frontend {
        server frontend:80;
    }

    upstream backend {
        server backend:8000;
    }

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

    server {
        listen 80;
        server_name theliquidation.group www.theliquidation.group;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name theliquidation.group www.theliquidation.group;

        # SSL configuration (will be mounted)
        ssl_certificate /etc/nginx/ssl/fullchain.pem;
        ssl_certificate_key /etc/nginx/ssl/privkey.pem;

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

        # Frontend
        location / {
            proxy_pass http://frontend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # API endpoints
        location /api/ {
            limit_req zone=api burst=20 nodelay;
            proxy_pass http://backend/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Specific API endpoints
        location /catalog {
            limit_req zone=api burst=20 nodelay;
            proxy_pass http://backend/catalog;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        location /health {
            proxy_pass http://backend/health;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Gzip compression
        gzip on;
        gzip_vary on;
        gzip_min_length 1024;
        gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
EOF
```

### **Docker Compose File**
```bash
# Create docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: liquidation-frontend
    restart: unless-stopped
    networks:
      - liquidation-network
    volumes:
      - frontend-logs:/var/log/nginx

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: liquidation-backend
    restart: unless-stopped
    environment:
      - CORS_ORIGINS=https://theliquidation.group
      - ENVIRONMENT=production
    networks:
      - liquidation-network
    volumes:
      - backend-logs:/app/logs

  nginx:
    image: nginx:alpine
    container_name: liquidation-nginx
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/ssl:/etc/nginx/ssl:ro
      - nginx-logs:/var/log/nginx
    depends_on:
      - frontend
      - backend
    networks:
      - liquidation-network

  certbot:
    image: certbot/certbot
    container_name: liquidation-certbot
    volumes:
      - ./nginx/ssl:/etc/letsencrypt
      - ./nginx/ssl:/var/lib/letsencrypt
    command: certonly --webroot --webroot-path=/var/www/html --email your-email@example.com --agree-tos --no-eff-email -d theliquidation.group -d www.theliquidation.group

networks:
  liquidation-network:
    driver: bridge

volumes:
  frontend-logs:
  backend-logs:
  nginx-logs:
EOF
```

### **Environment File**
```bash
# Create .env file
cat > .env << 'EOF'
# Domain configuration
DOMAIN=theliquidation.group
EMAIL=your-email@example.com

# Database configuration (if needed)
DATABASE_URL=sqlite:///./liquidation.db

# Email configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Security
SECRET_KEY=your-secret-key-here
EOF
```

---

## 🚀 **Step 2: Deploy with Docker**

### **Build and Start Services**
```bash
# Build and start all services
docker compose up -d --build

# Check service status
docker compose ps

# View logs
docker compose logs -f
```

### **Get SSL Certificate**
```bash
# Stop nginx temporarily
docker compose stop nginx

# Get SSL certificate
docker compose run --rm certbot

# Start nginx again
docker compose up -d nginx
```

### **Setup SSL Auto-Renewal**
```bash
# Create renewal script
cat > renew-ssl.sh << 'EOF'
#!/bin/bash
docker compose run --rm certbot renew
docker compose restart nginx
EOF

chmod +x renew-ssl.sh

# Add to crontab (renew monthly)
(crontab -l 2>/dev/null; echo "0 12 1 * * /path/to/renew-ssl.sh") | crontab -
```

---

## 🔧 **Step 3: Update Your Vue.js App**

### **Update API Configuration**
```javascript
// In your Vue.js app, update the API base URL
const API_BASE_URL = 'https://theliquidation.group'

// Example API call
axios.get(`${API_BASE_URL}/catalog`)
```

### **Rebuild and Redeploy**
```bash
# Rebuild frontend with new configuration
docker compose build frontend

# Restart frontend service
docker compose up -d frontend
```

---

## 📊 **Step 4: Monitoring and Maintenance**

### **Check Service Status**
```bash
# View running containers
docker compose ps

# View service logs
docker compose logs frontend
docker compose logs backend
docker compose logs nginx

# Monitor resource usage
docker stats
```

### **Update Services**
```bash
# Pull latest changes
git pull

# Rebuild and restart services
docker compose down
docker compose up -d --build

# Or update specific service
docker compose build frontend
docker compose up -d frontend
```

### **Backup and Restore**
```bash
# Backup volumes
docker run --rm -v liquidation_backend-logs:/data -v $(pwd):/backup alpine tar czf /backup/backend-logs-backup.tar.gz -C /data .

# Restore volumes
docker run --rm -v liquidation_backend-logs:/data -v $(pwd):/backup alpine tar xzf /backup/backend-logs-backup.tar.gz -C /data
```

---

## 🚨 **Troubleshooting**

### **Common Issues**

#### **Container Won't Start**
```bash
# Check container logs
docker compose logs <service-name>

# Check container status
docker compose ps

# Restart specific service
docker compose restart <service-name>
```

#### **SSL Certificate Issues**
```bash
# Check certificate status
docker compose run --rm certbot certificates

# Force certificate renewal
docker compose run --rm certbot renew --force-renewal
```

#### **Port Conflicts**
```bash
# Check what's using ports
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443

# Stop conflicting services
sudo systemctl stop nginx  # if nginx is running on host
```

#### **Permission Issues**
```bash
# Fix volume permissions
sudo chown -R $USER:$USER ./nginx/ssl

# Recreate volumes
docker compose down -v
docker compose up -d
```

---

## 🔒 **Security Best Practices**

### **Docker Security**
```bash
# Run containers as non-root user (already configured in Dockerfiles)
# Use specific image tags instead of 'latest'
# Regularly update base images
# Scan images for vulnerabilities

# Install Trivy for vulnerability scanning
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin

# Scan images
trivy image your-image-name
```

### **Network Security**
```bash
# Use custom networks (already configured)
# Limit container access to host
# Use secrets for sensitive data
# Enable Docker content trust
```

---

## 📈 **Performance Optimization**

### **Docker Optimization**
```bash
# Use multi-stage builds (already implemented)
# Optimize layer caching
# Use .dockerignore files
# Compress images

# Create .dockerignore for frontend
cat > frontend/.dockerignore << 'EOF'
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.nyc_output
coverage
.DS_Store
EOF

# Create .dockerignore for backend
cat > backend/.dockerignore << 'EOF'
__pycache__
*.pyc
*.pyo
*.pyd
.Python
env
pip-log.txt
pip-delete-this-directory.txt
.tox
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.log
.git
.mypy_cache
.pytest_cache
.hypothesis
EOF
```

---

## ✅ **Deployment Checklist**

- [ ] Docker installed on VPS
- [ ] Project structure created
- [ ] Dockerfiles created
- [ ] Docker Compose file configured
- [ ] SSL certificates obtained
- [ ] Services built and started
- [ ] Frontend API URL updated
- [ ] SSL auto-renewal configured
- [ ] Monitoring setup
- [ ] Backups configured
- [ ] Security measures implemented

Your liquidation website is now deployed with Docker! 🐳✨
