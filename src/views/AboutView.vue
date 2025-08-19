<template>
  <div class="container">
    <SectionHeader title="About Us" subtitle="Quality, Affordability & Convenience" />

    <div class="content">
      <div class="content-left">
        <div class="text-content">
          <p>
            At The Liquidation Group, we specialize in bringing you high-quality electronics at exceptional value. Whether
            you're looking for individual tech products or entire pallets of liquidation items, our carefully curated
            inventory has something for every shopper, from tech enthusiasts to resale businesses.
          </p>
          <p>
            With a commitment to transparency and reliability, we aim to offer unmatched deals and personalized service,
            ensuring every purchase meets your needs and expectations. Our goal is to simplify your shopping experience
            through clear communication, exceptional customer care, and a diverse selection from trusted brands.
          </p>
          <p>
            By offering both retail and wholesale liquidation options, we help customers find exactly what they're
            looking for—whether it's a great deal on a single device or a profitable business opportunity with bulk
            purchases.
          </p>
          <p>
            Our inventory includes a wide variety of Amazon liquidation products such as <strong>Amazon LPN</strong>, 
            <strong>Amazon HCE</strong>, <strong>Amazon FC</strong>, <strong>Amazon Med</strong>. <strong>Bulk Electronics</strong>, 
            and much more. We source directly from Amazon's liquidation channels to ensure you get authentic products at 
            the best possible prices. Additionally, we source from other top retailers including <strong>Best Buy</strong>, <strong>Home Depot</strong>, 
            <strong>Walmart</strong>, <strong>Target</strong>, <strong>Costco</strong>, and more, providing you with a diverse selection of quality electronics from 
            trusted brands.
          </p>
        </div>

        <div class="why-choose-us">
          <h2>Why Choose The Liquidation Group?</h2>
          <div class="benefits-grid">
                         <div class="benefit-card">
               <div class="benefit-icon">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                   <path d="M20 7h-9m9 10h-9m9-5h-9"/>
                   <path d="M3 7h2m2 0h2m-6 5h2m2 0h2m-6 5h2m2 0h2"/>
                 </svg>
               </div>
               <h3>Bulk Liquidation</h3>
               <p>Purchase entire pallets of electronics at wholesale prices. Perfect for resellers and businesses.</p>
             </div>

             <div class="benefit-card">
               <div class="benefit-icon">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                   <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                   <circle cx="8.5" cy="8.5" r="1.5"/>
                   <polyline points="21,15 16,10 5,21"/>
                 </svg>
               </div>
               <h3>Individual Items</h3>
               <p>Single electronics for personal use or small-scale reselling. New and refurbished options available.</p>
             </div>

                           <div class="benefit-card">
                <div class="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </div>
                                 <h3>Local Pickup & Delivery</h3>
                 <p>Visit our warehouse in North York or arrange delivery to your location for added convenience.</p>
              </div>

             
          </div>
        </div>
      </div>

      <div class="content-right">
                         <div class="location-section">
          <div class="location-header">
            <div class="location-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
            </div>
            <h3>Visit Our Store</h3>
          </div>
          <div class="location-info">
            <button class="contact-button" @click="openMap('724 Caledonia Rd, North York, ON, M6B 3X7')">
              <div class="button-content">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <div class="button-text">
                  <span class="button-label">Address</span>
                  <span class="button-value">724 Caledonia Rd, North York, ON</span>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="arrow-icon">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </button>
            <button class="contact-button" @click="clickToCall('6479017565')">
              <div class="button-content">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div class="button-text">
                  <span class="button-label">Phone</span>
                  <span class="button-value">(647) 901-7565</span>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="arrow-icon">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="image-gallery">
          <div class="gallery-item">
            <div class="image-placeholder">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 12l2 2 4-4"/>
                <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"/>
                <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"/>
                <path d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"/>
                <path d="M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"/>
              </svg>
            </div>
            <h4>New Products</h4>
            <p>Brand new electronics in original packaging with full manufacturer warranty</p>
          </div>

          <div class="gallery-item">
            <div class="image-placeholder">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h4>Refurbished Items</h4>
            <p>Professionally restored electronics tested and certified to work like new</p>
          </div>

          <div class="gallery-item">
            <div class="image-placeholder">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <h4>Customer Returns</h4>
            <p>Gently used items returned by customers, inspected and tested for quality</p>
          </div>

          <div class="gallery-item">
            <div class="image-placeholder">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 7h-9m9 10h-9m9-5h-9"/>
                <path d="M3 7h2m2 0h2m-6 5h2m2 0h2m-6 5h2m2 0h2"/>
              </svg>
            </div>
            <h4>Salvage Pallets</h4>
            <p>Bulk lots of mixed condition items perfect for parts or repair projects</p>
          </div>
        </div>

        <div class="cta-section">
          <h3>Ready to Find Your Perfect Deal?</h3>
          <p>Explore our inventory and discover amazing electronics at unbeatable prices.</p>
          <router-link to="/inventory" class="cta-button">
            <span>Browse Inventory</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
import { openMap, clickToCall } from '@/composables/clickAction';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&family=Work+Sans:wght@400;600&display=swap');

.container {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.content-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.text-content p {
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  margin: 0;
  color: #374151;
}

.why-choose-us h2 {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  color: #1f2937;
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.benefit-card {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.benefit-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.benefit-icon svg {
  color: white;
}

.benefit-card h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #1f2937;
}

.benefit-card p {
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: #6b7280;
}

.content-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.location-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  padding: 2rem;
  border-radius: 20px;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
}

.location-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.location-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
}

.location-icon svg {
  color: white;
}

.location-section h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-decoration: none;
  width: 100%;
  text-align: left;
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.4;
  min-height: 60px;
  box-sizing: border-box;
}

.contact-button:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.button-content {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  flex: 1;
}

.button-content svg {
  color: #60a5fa;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.contact-button:hover .button-content svg {
  transform: scale(1.1);
}

.button-text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.button-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #94a3b8;
  opacity: 0.8;
}

.button-value {
  font-size: 14px;
  font-weight: 500;
  color: white;
}

.arrow-icon {
  color: #94a3b8;
  flex-shrink: 0;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.contact-button:hover .arrow-icon {
  color: #60a5fa;
  opacity: 1;
  transform: translateX(4px);
}

.image-gallery {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.gallery-item {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.image-placeholder {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.image-placeholder svg {
  color: #64748b;
}

.gallery-item h4 {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #1f2937;
}

.gallery-item p {
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: #6b7280;
}

.cta-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.cta-section h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #1f2937;
}

.cta-section p {
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
  color: #6b7280;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
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

@media (max-width: 1024px) {
  .content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .content {
    gap: 1.5rem;
  }

  .location-section {
    padding: 1.5rem;
  }

  .location-header {
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .location-icon {
    width: 40px;
    height: 40px;
  }

  .location-section h3 {
    font-size: 1.25rem;
  }

  .contact-button {
    padding: 0.875rem 1rem;
    font-size: 13px;
    min-height: 56px;
  }

  .button-content {
    gap: 0.75rem;
  }

  .button-content svg {
    width: 16px;
    height: 16px;
  }

  .button-label {
    font-size: 10px;
  }

  .button-value {
    font-size: 13px;
  }

  .stats-section {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stat-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }

  .categories-grid {
    gap: 1rem;
  }

  .category-card {
    padding: 1rem;
  }

  .gallery-item {
    padding: 1rem;
  }

  .cta-section {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .text-content p {
    font-size: 14px;
  }

  .category-card h3 {
    font-size: 1rem;
  }

  .category-card p {
    font-size: 13px;
  }

  .location-section {
    padding: 1rem;
  }

  .location-header {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .location-icon {
    width: 36px;
    height: 36px;
  }

  .location-section h3 {
    font-size: 1.125rem;
  }

  .contact-button {
    padding: 0.75rem 0.875rem;
    font-size: 12px;
    min-height: 52px;
  }

  .button-content {
    gap: 0.625rem;
  }

  .button-content svg {
    width: 14px;
    height: 14px;
  }

  .button-label {
    font-size: 9px;
  }

  .button-value {
    font-size: 12px;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 12px;
  }

  .cta-section h3 {
    font-size: 1.25rem;
  }

  .cta-section p {
    font-size: 14px;
  }
}
</style>
