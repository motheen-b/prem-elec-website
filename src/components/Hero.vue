<template>
    <div class="hero-container">
        <div class="hero-content">
            <div class="hero-text">
                <h4>Welcome to The Liquidation Group,</h4>
                <h1>Wholesale Liquidation Pallets & Bulk Electronics</h1>
                
                <div class="contact-details">
                    <button class="contact-button" @click="openMap('724 Caledonia Rd, North York, ON, M6B 3X7')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                        </svg>
                        <span>724 Caledonia Rd, North York, ON</span>
                    </button>
                    
                    <div class="contact-button" @click="clickToCall('6479017565')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        <span>(647) 901-7565</span>
                    </div>
                </div>
                
                <div class="hero-actions">
                    <router-link to="/inventory" class="cta-button">
                        <span>Browse Inventory</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 12h14m-7-7 7 7-7 7"/>
                        </svg>
                    </router-link>
                    
                    <div class="social-links">
                        <a href="https://www.facebook.com/electronics.liquidation" class="social-link" target="_blank">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/theliquidation.group" class="social-link" target="_blank">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { clickToCall, openMap } from '@/composables/clickAction';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.hero-container {
    display: flex;
    padding: 2rem;
    height: 500px;
    /* background-image: url('@/assets/hero.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    background-color: #000;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    position: relative;
}

.hero-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    /* border-radius: 15px; */
    z-index: 1;
}

.hero-content {
    display: flex;
    position: relative;
    align-self: center;
    z-index: 2;
    padding: 2rem;
    gap: 2rem;
    height: auto;
    flex-direction: column;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    /* border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px; */
    max-width: 600px;
}

.hero-text {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    color: white;
}

.hero-text h4 {
    font-size: 1.125rem;
    font-weight: 500;
    margin: 0;
    opacity: 0.9;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-text h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.contact-button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    width: fit-content;
    max-width: 400px;
}

.contact-button:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.contact-button svg {
    color: #3b82f6;
    flex-shrink: 0;
    transition: transform 0.3s ease;
}

.contact-button:hover svg {
    transform: scale(1.1);
}

.hero-actions {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: #3b82f6;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 12px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
}

.cta-button svg {
    transition: transform 0.3s ease;
}

.cta-button:hover svg {
    transform: translateX(4px);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.social-link:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

.social-link svg {
    color: white;
    transition: transform 0.3s ease;
}

.social-link:hover svg {
    transform: scale(1.1);
}

@media screen and (max-width: 769px) {
    .hero-container {
        padding: 1.5rem;
        height: 450px;
    }

    .hero-content {
        padding: 1.5rem;
        gap: 1.5rem;
    }

    .hero-text h1 {
        font-size: 1.75rem;
    }

    .hero-text h4 {
        font-size: 1rem;
    }

    .contact-button {
        font-size: 0.875rem;
        padding: 0.625rem 1rem;
    }

    .cta-button {
        padding: 0.875rem 1.75rem;
        font-size: 0.875rem;
    }

    .social-link {
        width: 40px;
        height: 40px;
    }
}

@media screen and (max-width: 585px) {
    .hero-container {
        padding: 1rem;
        height: 400px;
    }

    .hero-content {
        padding: 1rem;
        gap: 1.25rem;
    }

    .hero-text h1 {
        font-size: 1.5rem;
    }

    .hero-text h4 {
        font-size: 0.875rem;
    }

    .contact-button {
        font-size: 0.8125rem;
        padding: 0.5rem 0.875rem;
    }

    .cta-button {
        padding: 0.75rem 1.5rem;
        font-size: 0.8125rem;
    }

    .social-link {
        width: 36px;
        height: 36px;
    }
}

@media screen and (max-width: 522px) {
    .hero-container {
        padding: 0.75rem;
        height: 350px;
    }

    .hero-content {
        padding: 0.75rem;
        gap: 1rem;
    }

    .hero-text h1 {
        font-size: 1.25rem;
    }

    .hero-text h4 {
        font-size: 0.8rem;
    }

    .contact-button {
        font-size: 0.75rem;
        padding: 0.5rem 0.75rem;
    }

    .cta-button {
        padding: 0.625rem 1.25rem;
        font-size: 0.75rem;
    }

    .social-link {
        width: 32px;
        height: 32px;
    }
}
</style>