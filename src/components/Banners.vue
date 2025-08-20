<template>
  <div class="banners-wrapper">
    <!-- Delivery Banner -->
    <div class="banner-container delivery-banner">
      <div class="banner-content">
        <div class="banner-text">
          <h1>Need Delivery?</h1>
          <p>Contact for fast & reliable delivery service</p>
        </div>
        <button class="action-button phone-button" @click="clickToCall('4167862973')">
          <svg class="button-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span>Call Now</span>
        </button>
      </div>
    </div>

    <!-- WhatsApp Channel Banner -->
    <div class="banner-container whatsapp-banner">
      <div class="banner-content">
        <div class="banner-text">
          <div class="channel-text">
            <h1>Join WhatsApp Channel</h1>
            <p>Get instant updates on new inventory & deals</p>
          </div>
        </div>
        <a href="https://whatsapp.com/channel/0029Vb5MLGlHFxOwrOEmzb1y" target="_blank" class="action-button join-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <span>Join Now</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { clickToCall } from '@/composables/clickAction';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

/* Banners Wrapper */
.banners-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 3rem 1rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* Common Banner Styles */
.banner-container {
  background: linear-gradient(135deg, #032C50 0%, #1a4a7a 100%);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 140px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.banner-container:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  gap: 1rem;
  width: 100%;
  height: 100%;
}

.banner-text {
  flex: 1;
  min-width: 0; /* Prevents flex item from overflowing */
}

.banner-text h1 {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.25rem 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  line-height: 1.2;
}

.banner-text p {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.3;
}

/* Action Button Styles */
.action-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  white-space: nowrap;
  flex-shrink: 0;
  text-decoration: none;
}

.action-button:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.button-icon {
  flex-shrink: 0;
  color: #93c5fd;
}

/* Delivery Banner Specific */
.delivery-banner {
  background: linear-gradient(135deg, #032C50 0%, #1a4a7a 100%);
}

/* WhatsApp Banner Specific */
.whatsapp-banner {
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.2), 0 4px 16px rgba(37, 211, 102, 0.1);
}

.whatsapp-banner:hover {
  box-shadow: 0 12px 40px rgba(37, 211, 102, 0.25), 0 6px 20px rgba(37, 211, 102, 0.15);
}

.channel-text h1 {
  font-size: 1.25rem;
}

.channel-text p {
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .banners-wrapper {
    gap: 1rem;
    margin: 2.5rem 1rem;
  }
  
  .banner-content {
    padding: 1.25rem;
  }
  
  .banner-text h1 {
    font-size: 1.125rem;
  }
  
  .banner-text p {
    font-size: 0.8rem;
  }
  
  .action-button {
    padding: 0.625rem 0.875rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .banners-wrapper {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 2rem 1rem;
  }
  
  .banner-container {
    height: 140px; /* Fixed height for mobile */
    min-height: unset;
  }
  
  .banner-content {
    flex-direction: row; /* Keep horizontal layout on mobile */
    text-align: left;
    padding: 1rem;
    gap: 1rem;
    height: 100%;
  }
  
  .banner-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .banner-text h1 {
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
  }
  
  .banner-text p {
    font-size: 0.8rem;
    margin: 0;
  }
  
  .action-button {
    align-self: center;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    white-space: nowrap;
  }
  
  .channel-text {
    flex: 1;
  }
}

@media (max-width: 480px) {
  .banners-wrapper {
    margin: 1.5rem 1rem;
    gap: 0.75rem;
  }
  
  .banner-container {
    height: 120px; /* Slightly smaller for very small screens */
    border-radius: 8px;
  }
  
  .banner-content {
    padding: 0.875rem;
    gap: 0.75rem;
  }
  
  .banner-text h1 {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
  
  .banner-text p {
    font-size: 0.75rem;
  }
  
  .action-button {
    padding: 0.625rem 0.875rem;
    font-size: 0.8rem;
  }
  
  .button-icon {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 360px) {
  .banners-wrapper {
    margin: 1rem 0.75rem;
  }
  
  .banner-container {
    height: 110px;
  }
  
  .banner-content {
    padding: 0.75rem;
    gap: 0.5rem;
  }
  
  .banner-text h1 {
    font-size: 0.95rem;
  }
  
  .banner-text p {
    font-size: 0.7rem;
  }
  
  .action-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }
  
  .button-icon {
    width: 16px;
    height: 16px;
  }
}
</style>
