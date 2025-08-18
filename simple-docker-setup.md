# 🐳 Simple Docker Setup (No Compose)

## **Option 1: Just FastAPI Backend in Docker**

### **Create FastAPI Dockerfile**
```bash
# Create backend Dockerfile
cat > backend/Dockerfile << 'EOF'
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y gcc && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY . .

# Create non-root user
RUN adduser --disabled-password --gecos '' appuser
USER appuser

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
EOF
```

### **Create Requirements**
```bash
cat > backend/requirements.txt << 'EOF'
fastapi==0.104.1
uvicorn[standard]==0.24.0
python-multipart==0.0.6
python-dotenv==1.0.0
fastapi-mail==1.4.1
EOF
```

### **Build and Run**
```bash
# Build the image
docker build -t liquidation-api ./backend

# Run the container
docker run -d \
  --name liquidation-api \
  --restart unless-stopped \
  -p 8000:8000 \
  -v $(pwd)/backend:/app \
  liquidation-api
```

### **Setup Nginx (on host)**
```bash
# Install nginx on the host
sudo apt install nginx

# Configure nginx to proxy to Docker container
sudo nano /etc/nginx/sites-available/theliquidation.group
```

### **Nginx Configuration**
```nginx
server {
    listen 80;
    server_name theliquidation.group www.theliquidation.group;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name theliquidation.group www.theliquidation.group;
    
    # SSL configuration (from Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/theliquidation.group/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/theliquidation.group/privkey.pem;
    
    # Frontend (served by nginx)
    location / {
        root /var/www/html;
        try_files $uri $uri/ /index.html;
    }
    
    # API (proxied to Docker container)
    location /api/ {
        proxy_pass http://127.0.0.1:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    location /catalog {
        proxy_pass http://127.0.0.1:8000/catalog;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### **Deploy Frontend**
```bash
# Build Vue.js app
cd frontend
npm run build

# Deploy to nginx
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
```

### **Get SSL Certificate**
```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d theliquidation.group -d www.theliquidation.group
```

---

## **Option 2: Minimal Compose (Just Backend + Nginx)**

### **Simple docker-compose.yml**
```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    container_name: liquidation-api
    restart: unless-stopped
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    container_name: liquidation-nginx
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./frontend/dist:/usr/share/nginx/html:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - backend
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
```

### **Run It**
```bash
# Build and start
docker compose up -d --build

# Check status
docker compose ps

# View logs
docker compose logs -f
```

---

## **🤔 Which Should You Choose?**

### **Choose Simple Setup If:**
- You want minimal complexity
- You're comfortable managing services manually
- You only need the API in Docker
- You want to use host nginx for frontend

### **Choose Compose If:**
- You want everything containerized
- You want automatic SSL management
- You want easy updates and rollbacks
- You want production-ready setup
- You plan to scale later

---

## **💡 My Recommendation:**

**Start with the simple setup** (Option 1) if you want to:
- Get up and running quickly
- Keep things simple
- Learn Docker basics first

**Use Compose** if you want:
- Full containerization
- Automatic SSL renewal
- Easy deployment updates
- Production-ready setup

Both approaches will work great for your liquidation website! 🚀
