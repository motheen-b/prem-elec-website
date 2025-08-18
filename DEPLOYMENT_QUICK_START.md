# 🚀 Quick Deployment Guide

## **Prerequisites:**
- Ubuntu VPS (recommended: $21/mo plan)
- Domain name pointing to your server IP
- SSH access to your server

## **Quick Start (Automated):**

### **1. Upload and Run Deployment Script:**
```bash
# Upload the deploy.sh script to your server
scp deploy.sh user@your-server-ip:~/

# SSH into your server
ssh user@your-server-ip

# Make script executable and run
chmod +x deploy.sh
./deploy.sh
```

### **2. Manual Steps (if needed):**

#### **Update your Vue.js API URL:**
```javascript
// In your Vue.js app, change:
const API_BASE_URL = 'http://localhost:8000'
// To:
const API_BASE_URL = 'https://theliquidation.group'
```

#### **Rebuild and redeploy frontend:**
```bash
cd /var/www/theliquidation/frontend
npm run build
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
```

## **🔧 Common Commands:**

### **Check Services:**
```bash
sudo systemctl status nginx
sudo systemctl status fastapi
```

### **View Logs:**
```bash
# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# FastAPI logs
sudo journalctl -u fastapi -f
```

### **Restart Services:**
```bash
sudo systemctl restart nginx
sudo systemctl restart fastapi
```

### **SSL Certificate:**
```bash
# Check certificate status
sudo certbot certificates

# Manual renewal
sudo certbot renew
```

## **🌐 Test Your Deployment:**

### **Endpoints to Test:**
- **Website**: https://theliquidation.group
- **API Health**: https://theliquidation.group/health
- **Catalog API**: https://theliquidation.group/catalog

### **Expected Responses:**
```bash
# Health check
curl https://theliquidation.group/health
# Should return: {"status": "healthy"}

# Catalog API
curl https://theliquidation.group/catalog
# Should return your catalog data
```

## **🚨 Troubleshooting:**

### **If Nginx won't start:**
```bash
sudo nginx -t
sudo systemctl status nginx
```

### **If FastAPI won't start:**
```bash
sudo systemctl status fastapi
sudo journalctl -u fastapi -n 50
```

### **If SSL fails:**
```bash
sudo certbot certificates
sudo certbot renew --dry-run
```

### **Permission issues:**
```bash
sudo chown -R www-data:www-data /var/www/theliquidation
sudo chmod -R 755 /var/www/theliquidation
```

## **📊 Monitoring:**

### **System Resources:**
```bash
htop
df -h
free -h
```

### **Network:**
```bash
sudo netstat -tlnp
sudo ss -tlnp
```

## **🔄 Updates:**

### **Update Frontend:**
```bash
cd /var/www/theliquidation/frontend
git pull
npm install
npm run build
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
```

### **Update Backend:**
```bash
cd /var/www/theliquidation/backend
# Edit main.py or other files
sudo systemctl restart fastapi
```

## **🔒 Security Checklist:**

- [ ] SSL certificate installed
- [ ] Firewall configured (UFW)
- [ ] SSH key authentication
- [ ] Regular security updates
- [ ] Backups configured

## **📞 Support:**

If you encounter issues:
1. Check the logs first
2. Verify DNS is pointing to your server
3. Ensure ports 80 and 443 are open
4. Check service status

Your liquidation website should now be live with SSL! 🎉
