<template>
  <div class="banner-container">
    <div class="banner-content">
      <div class="banner-text">
        <h1>Need Delivery?</h1>
        <p>Contact us for a fast & reliable delivery service!</p>
      </div>
      <button class="phone-button" @click="clickToCall('4167862973')">
        <svg class="phone-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        <span class="phone-number">+1 (416) 786-2973</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { clickToCall } from '@/composables/clickAction';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

.banner-container {
  background: linear-gradient(135deg, #032C50 0%, #1a4a7a 100%);
  border-radius: 16px;
  margin: 4rem auto;
  max-width: 1200px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  gap: 2rem;
}

.banner-text {
  flex: 1;
}

.banner-text h1 {
  font-family: 'Inter', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.2;
}

.banner-text p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.4;
}

.phone-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  white-space: nowrap;
  flex-shrink: 0;
}

.phone-button:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.phone-button:active {
  transform: translateY(0);
}

.phone-icon {
  flex-shrink: 0;
  color: #93c5fd;
  transition: transform 0.3s ease;
}

.phone-button:hover .phone-icon {
  transform: scale(1.1);
}

.phone-number {
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Tablet and smaller desktop */
@media (max-width: 1024px) {
  .banner-content {
    padding: 1.75rem 2rem;
    gap: 1.5rem;
  }

  .banner-text h1 {
    font-size: 1.5rem;
  }

  .banner-text p {
    font-size: 0.95rem;
  }

  .phone-button {
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
  }
}

/* Mobile devices */
@media (max-width: 768px) {
  .banner-container {
    margin: 3rem auto;
    border-radius: 12px;
  }

  .banner-content {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
    gap: 1.25rem;
  }

  .banner-text h1 {
    font-size: 1.375rem;
    margin-bottom: 0.375rem;
  }

  .banner-text p {
    font-size: 0.9rem;
  }

  .phone-button {
    width: 100%;
    justify-content: center;
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
    gap: 0.5rem;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .banner-container {
    margin: 2rem auto;
    border-radius: 10px;
  }

  .banner-content {
    padding: 1.25rem;
    gap: 1rem;
  }

  .banner-text h1 {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }

  .banner-text p {
    font-size: 0.85rem;
  }

  .phone-button {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    gap: 0.5rem;
  }

  .phone-icon {
    width: 18px;
    height: 18px;
  }
}

/* Extra small mobile devices */
@media (max-width: 360px) {
  .banner-container {
    margin: 1.5rem auto;
  }
  
  .banner-content {
    padding: 1rem;
    gap: 0.875rem;
  }

  .banner-text h1 {
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
  }

  .banner-text p {
    font-size: 0.8rem;
  }

  .phone-button {
    padding: 0.625rem 0.875rem;
    font-size: 0.8rem;
    gap: 0.375rem;
  }

  .phone-icon {
    width: 16px;
    height: 16px;
  }
}

/* 320px specific breakpoint */
@media (max-width: 320px) {
  .banner-container {
    margin: 1.25rem auto;
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

  .phone-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    gap: 0.25rem;
    border-radius: 8px;
  }

  .phone-icon {
    width: 14px;
    height: 14px;
  }
}

/* Landscape orientation on mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .banner-content {
    flex-direction: row;
    text-align: left;
    padding: 1rem 1.5rem;
    gap: 1rem;
  }

  .banner-text h1 {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }

  .banner-text p {
    font-size: 0.85rem;
  }

  .phone-button {
    width: auto;
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
