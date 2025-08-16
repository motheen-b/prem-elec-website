<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-row-1">
                    <div class="brand">
                        <img src="../assets/logo-test.png" alt="Premium Electronics">
                    </div>
                    
                    <div class="social-media">
                        <a href="#" class="social-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div class="footer-row-2">
                    <div class="contact-info">
                        <p>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem;">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                            (647) 901 7565
                        </p>
                        <p>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem;">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            contact@premiumelectronics.ca
                        </p>
                    </div>
                    
                    <nav class="footer-nav">
                        <router-link to="/">Home</router-link>
                        <router-link to="/about">About</router-link>
                        <router-link to="/inventory">Inventory</router-link>
                        <router-link to="/contact-us">Contact</router-link>
                    </nav>
                </div>
            </div>
            
            <div class="footer-divider"></div>
            
            <div class="footer-bottom">
                <p>© 2025 Premium Electronics. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
// No additional script needed for this simple footer
</script>

<style scoped>
.footer {
    background: linear-gradient(135deg, #032C50 0%, #1a4a7a 100%);
    color: white;
    width: 100%;
    font-family: Arial, sans-serif;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.25rem 2rem 0.875rem 2rem;
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 0.875rem;
}

.footer-row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand img {
    height: 35px;
}

.social-media {
    display: flex;
    gap: 0.5rem;
}

.social-link {
    color: #cccccc;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #032C50 0%, #1a4a7a 100%);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 6px;
}

.social-link:hover {
    color: white;
    transform: scale(1.1);
}

.footer-row-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact-info {
    display: flex;
    gap: 1.5rem;
}

.contact-info p {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.2;
    color: #cccccc;
    display: flex;
    font-weight: 600;
    align-items: center;
}

.contact-info svg {
    color: white;
    flex-shrink: 0;
}

.footer-nav {
    display: flex;
    gap: 1.25rem;
}

.footer-nav a {
    color: #cccccc;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: bold;
    transition: color 0.3s ease;
    line-height: 1.2;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.footer-nav a:hover {
    color: white;
}

.footer-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    margin: 0.875rem 0;
}

.footer-bottom {
    text-align: center;
}

.footer-bottom p {
    margin: 0;
    font-size: 0.75rem;
    color: #999999;
    line-height: 1.2;
}

@media (max-width: 900px) {
    .footer-container {
        padding: 1rem 1.5rem 0.75rem 1.5rem;
    }
    
    .footer-content {
        gap: 0.875rem;
        margin-bottom: 0.75rem;
    }
    
    .brand img {
        height: 32px;
    }
    
    .contact-info {
        gap: 1.25rem;
    }
    
    .contact-info p {
        font-size: 0.8rem;
    }
    
    .footer-nav {
        gap: 1rem;
    }
    
    .footer-nav a {
        font-size: 0.8rem;
    }
    
    .social-link {
        width: 30px;
        height: 30px;
        padding: 5px;
    }
    
    .social-link svg {
        width: 17px;
        height: 17px;
    }
}

@media (max-width: 768px) {
    .footer-container {
        padding: 0.875rem 1.25rem 0.625rem 1.25rem;
    }
    
    .footer-content {
        gap: 0.875rem;
        text-align: center;
        margin-bottom: 0.625rem;
    }
    
    .footer-row-1 {
        flex-direction: column;
        gap: 0.875rem;
    }
    
    .footer-row-2 {
        flex-direction: column;
        gap: 0.875rem;
    }
    
    .brand img {
        height: 30px;
    }
    
    .contact-info {
        flex-direction: column;
        gap: 0.375rem;
        align-items: center;
    }
    
    .contact-info p {
        justify-content: center;
    }
    
    .footer-nav {
        gap: 0.875rem;
    }
    
    .social-media {
        gap: 0.75rem;
    }
    
    .social-link {
        width: 32px;
        height: 32px;
        padding: 6px;
    }
    
    .social-link svg {
        width: 18px;
        height: 18px;
    }
    
    .footer-divider {
        margin: 0.625rem 0;
    }
}

@media (max-width: 480px) {
    .footer-container {
        padding: 0.75rem 1rem 0.5rem 1rem;
    }
    
    .footer-content {
        gap: 0.75rem;
        margin-bottom: 0.5rem;
    }
    
    .footer-row-1 {
        gap: 0.75rem;
    }
    
    .footer-row-2 {
        gap: 0.75rem;
    }
    
    .brand img {
        height: 26px;
    }
    
    .contact-info p {
        font-size: 0.75rem;
    }
    
    .footer-nav {
        gap: 0.75rem;
    }
    
    .footer-nav a {
        font-size: 0.75rem;
    }
    
    .social-media {
        gap: 0.625rem;
    }
    
    .social-link {
        width: 28px;
        height: 28px;
        padding: 5px;
    }
    
    .social-link svg {
        width: 17px;
        height: 17px;
    }
    
    .footer-divider {
        margin: 0.5rem 0;
    }
    
    .footer-bottom p {
        font-size: 0.7rem;
    }
}

@media (max-width: 320px) {
    .footer-container {
        padding: 0.625rem 0.875rem 0.375rem 0.875rem;
    }
    
    .footer-content {
        gap: 0.625rem;
        margin-bottom: 0.375rem;
    }
    
    .footer-row-1 {
        gap: 0.625rem;
    }
    
    .footer-row-2 {
        gap: 0.625rem;
    }
    
    .brand img {
        height: 22px;
    }
    
    .contact-info p {
        font-size: 0.7rem;
    }
    
    .footer-nav {
        gap: 0.625rem;
    }
    
    .footer-nav a {
        font-size: 0.7rem;
    }
    
    .social-media {
        gap: 0.5rem;
    }
    
    .social-link {
        width: 26px;
        height: 26px;
        padding: 4px;
    }
    
    .social-link svg {
        width: 16px;
        height: 16px;
    }
    
    .footer-divider {
        margin: 0.375rem 0;
    }
    
    .footer-bottom p {
        font-size: 0.65rem;
    }
}
</style>