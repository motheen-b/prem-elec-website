# Docker Deployment Guide

This guide explains how to build and deploy your Vue.js frontend with FastAPI backend using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed
- Your FastAPI backend code in the `backend/` directory

## Project Structure

```
prem-elec-website/
├── Dockerfile                 # Vue.js frontend Dockerfile
├── nginx.conf                 # Nginx configuration
├── docker-compose.yml         # Frontend service only
├── backend-docker-compose.yml # Backend service only
├── .env                       # Environment variables (create from env.example)
├── env.example                # Example environment variables
├── .dockerignore              # Files to exclude from build
├── backend/                   # Your FastAPI backend
│   ├── Dockerfile            # Backend Dockerfile
│   ├── requirements.txt      # Python dependencies
│   └── main.py              # FastAPI application
└── src/                      # Vue.js source code
```

## Quick Start

1. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your actual values
   ```

2. **Build and run frontend:**
   ```bash
   docker-compose up --build
   ```

3. **Build and run backend (in separate terminal):**
   ```bash
   docker-compose -f backend-docker-compose.yml up --build
   ```

4. **Access your application:**
   - Frontend: http://localhost
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

5. **Run in background:**
   ```bash
   # Frontend
   docker-compose up -d --build
   
   # Backend
   docker-compose -f backend-docker-compose.yml up -d --build
   ```

6. **Stop services:**
   ```bash
   # Frontend
   docker-compose down
   
   # Backend
   docker-compose -f backend-docker-compose.yml down
   ```

## Individual Service Commands

### Frontend Only
```bash
# Build frontend image
docker build -t premelec-frontend .

# Run frontend container
docker run -p 80:80 premelec-frontend
```

### Backend Only
```bash
# Build backend image
docker build -t premelec-backend ./backend

# Run backend container with environment variables
docker run -p 8000:8000 --env-file .env premelec-backend

# Or use the separate compose file
docker-compose -f backend-docker-compose.yml up --build
```

## Configuration

### Frontend Configuration
- The Vue.js app is built and served by Nginx
- Static files are served from `/usr/share/nginx/html`
- Vue Router history mode is supported
- Static assets are cached for 1 year

### Backend Configuration
- FastAPI runs on port 8000
- CORS is configured to allow frontend requests
- Environment variables can be set in `docker-compose.yml`

### Environment Variables
Environment variables are loaded from the `.env` file. Copy the example and configure:

```bash
cp env.example .env
# Edit .env with your actual values
```

The backend service will automatically load these variables. Key variables include:
- `ENVIRONMENT`: production/development
- `DEBUG`: true/false
- `SECRET_KEY`: your application secret
- `ALLOWED_ORIGINS`: comma-separated list of allowed CORS origins

## Production Deployment

### 1. Build Production Images
```bash
docker-compose -f docker-compose.yml build
```

### 2. Push to Registry (optional)
```bash
# Tag images
docker tag premelec-frontend your-registry/premelec-frontend:latest
docker tag premelec-backend your-registry/premelec-backend:latest

# Push images
docker push your-registry/premelec-frontend:latest
docker push your-registry/premelec-backend:latest
```

### 3. Deploy with Docker Compose
```bash
# Deploy frontend
docker-compose up -d

# Deploy backend
docker-compose -f backend-docker-compose.yml up -d
```

## Troubleshooting

### Common Issues

1. **Port conflicts:**
   - Change ports in `docker-compose.yml`
   - Check if ports 80 and 8000 are available

2. **Build failures:**
   - Ensure all dependencies are in `package.json` and `requirements.txt`
   - Check Dockerfile syntax

3. **CORS errors:**
   - Verify CORS configuration in `backend/main.py`
   - Check frontend URL in allowed origins

### Logs
```bash
# View all logs
docker-compose logs

# View specific service logs
docker-compose logs frontend
docker-compose -f backend-docker-compose.yml logs backend

# Follow logs in real-time
docker-compose logs -f
docker-compose -f backend-docker-compose.yml logs -f
```

### Debugging
```bash
# Access running containers
docker-compose exec frontend sh
docker-compose -f backend-docker-compose.yml exec backend bash

# Check container status
docker-compose ps
docker-compose -f backend-docker-compose.yml ps
```

## Customization

### Adding a Database (if needed later)
If you need a database in the future, you can add it by uncommenting the database service in `docker-compose.yml` and configuring your FastAPI app to use it.

### Custom Nginx Configuration
Modify `nginx.conf` to add custom routing, caching, or security headers.

### Environment-Specific Configs
Create different compose files for different environments:
- `docker-compose.dev.yml` for development
- `docker-compose.prod.yml` for production

## Security Considerations

1. **Use environment variables** for sensitive data
2. **Update base images** regularly
3. **Scan images** for vulnerabilities
4. **Use secrets management** for production
5. **Configure proper CORS** policies

## Performance Optimization

1. **Multi-stage builds** reduce image size
2. **Layer caching** speeds up builds
3. **Static asset caching** improves load times
4. **Gzip compression** reduces bandwidth usage
