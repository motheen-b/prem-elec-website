# The Liquidation Group - E-commerce Platform

A full-stack web application for managing and displaying wholesale liquidation inventory. Built with Vue.js 3 frontend and FastAPI backend, integrated with Square's e-commerce platform.

## 🚀 Features

- **Real-time Inventory Management**: Display and manage liquidation products from Square API
- **Advanced Filtering**: Filter by category, condition, and search functionality
- **Responsive Design**: Mobile-friendly interface with modern UI/UX
- **Product Modals**: Detailed product information with images and descriptions
- **Pagination**: Efficient browsing of large product catalogs
- **SSL Security**: HTTPS enabled with Let's Encrypt certificates

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router** - Client-side routing
- **Pinia** - State management
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with Grid/Flexbox

### Backend
- **FastAPI** - Modern Python web framework
- **Square API** - E-commerce platform integration
- **Python-dotenv** - Environment variable management

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy and web server
- **Let's Encrypt** - SSL certificate management

## 📋 Prerequisites

- Node.js 20+
- Python 3.11+
- Docker and Docker Compose
- Square API credentials

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prem-elec-website
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Set up backend environment**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your Square API credentials
   ```

4. **Start frontend development server**
   ```bash
   npm run dev
   ```

5. **Start backend server**
   ```bash
   cd backend
   python main.py
   ```

### Docker Deployment

1. **Build and push Docker images**
   ```bash
   # Build frontend
   docker build -t yourusername/prem-elec-frontend:latest .
   docker push yourusername/prem-elec-frontend:latest
   
   # Build backend
   cd backend
   docker build -t yourusername/prem-elec-backend:latest .
   docker push yourusername/prem-elec-backend:latest
   ```

2. **Deploy to VPS**
   ```bash
   # Create docker-compose.yml on VPS
   version: '3.8'
   services:
     frontend:
       image: yourusername/prem-elec-frontend:latest
       ports:
         - "3000:80"
       restart: unless-stopped
     backend:
       image: yourusername/prem-elec-backend:latest
       ports:
         - "8000:8000"
       env_file:
         - .env
       restart: unless-stopped
   ```

3. **Configure Nginx and SSL**
   ```bash
   # Install Certbot
   sudo apt install certbot python3-certbot-nginx
   
   # Get SSL certificates
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com -d api.yourdomain.com
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
SQUARE_APPLICATION_ID="your_square_app_id"
SQUARE_ACCESS_TOKEN="your_square_access_token"
API_HOST=0.0.0.0
API_PORT=8000
ALLOWED_ORIGINS=http://localhost:5173,http://localhost,https://yourdomain.com
```

### Square API Setup

1. Create a Square Developer account
2. Create a new application
3. Get your Application ID and Access Token
4. Add them to your `.env` file

## 📁 Project Structure

```
prem-elec-website/
├── src/
│   ├── components/          # Vue components
│   ├── views/              # Page components
│   ├── stores/             # Pinia stores
│   ├── composables/        # Reusable composables
│   └── assets/             # Static assets
├── backend/
│   ├── main.py             # FastAPI application
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment variables
├── Dockerfile              # Frontend Docker configuration
├── nginx.conf             # Nginx configuration
├── docker-compose.yml     # Docker orchestration
└── package.json           # Node.js dependencies
```

## 🌐 API Endpoints

- `GET /catalog` - Retrieve all products and categories
- `GET /` - Health check endpoint
- `GET /health` - Application health status

## 🔒 Security

- HTTPS/SSL enabled with Let's Encrypt
- CORS properly configured for production domains
- Environment variables for sensitive data
- Input validation and sanitization

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

The application is deployed using:
- **Docker containers** for consistent environments
- **Nginx reverse proxy** for load balancing and SSL termination
- **Let's Encrypt** for free SSL certificates
- **VPS hosting** for production deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact the development team.

---

**Built with ❤️ using Vue.js 3 and FastAPI**
