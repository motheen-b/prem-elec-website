<template>
    <div class="contact-container">
        <SectionHeader title="Contact Us" subtitle="We'd love to hear from you! Reach us by phone, email, or by sending us a message directly." />

                 <div class="contact-content">
             <!-- Top Section: Contact Info & Form -->
             <div class="contact-top">
                 <div class="contact-info">
                     <h2>Get In Touch</h2>
                     <p class="contact-description">
                         Ready to buy liquidation pallets or single electronics? Contact us for wholesale pricing and inventory details.
                     </p>
 
                     <div class="contact-details">
                         <div class="contact-item">
                             <div class="contact-icon">
                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                     <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                                 </svg>
                             </div>
                             <div class="contact-text">
                                 <h4>Visit Our Warehouse</h4>
                                 <p>724 Caledonia Rd, North York, Ontario M6B 3X7, Canada</p>
                             </div>
                         </div>
 
                         <div class="contact-item">
                             <div class="contact-icon">
                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                     <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                 </svg>
                             </div>
                             <div class="contact-text">
                                 <h4>Call Us</h4>
                                 <p>(647) 901-7565</p>
                             </div>
                         </div>
 
                         <div class="contact-item">
                             <div class="contact-icon">
                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                     <polyline points="22,6 12,13 2,6"/>
                                 </svg>
                             </div>
                             <div class="contact-text">
                                 <h4>Email Us</h4>
                                 <p>contact@theliquidation.group</p>
                             </div>
                         </div>
 
                         <div class="contact-item">
                             <div class="contact-icon">
                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                     <circle cx="12" cy="12" r="10"/>
                                     <polyline points="12,6 12,12 16,14"/>
                                 </svg>
                             </div>
                             <div class="contact-text">
                                 <h4>Business Hours</h4>
                                 <p>Available by appointment from 9 AM to 6 PM.</p>
                             </div>
                         </div>
                     </div>
 
                     <div class="action-buttons">
                         <button class="action-btn" @click="openMap('724 Caledonia Rd, North York, ON, M6B 3X7')">
                             <div class="button-content">
                                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                     <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                                 </svg>
                                 <div class="button-text">
                                     <span class="button-label">Directions</span>
                                     <span class="button-value">Get Directions</span>
                                 </div>
                             </div>
                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="arrow-icon">
                                 <path d="M5 12h14m-7-7 7 7-7 7"/>
                             </svg>
                         </button>
                         <button class="action-btn" @click="clickToCall('6479017565')">
                             <div class="button-content">
                                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                     <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                 </svg>
                                 <div class="button-text">
                                     <span class="button-label">Phone</span>
                                     <span class="button-value">Call Now</span>
                                 </div>
                             </div>
                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="arrow-icon">
                                 <path d="M5 12h14m-7-7 7 7-7 7"/>
                             </svg>
                         </button>
                     </div>
                 </div>
 

             </div>
 
             <!-- Bottom Section: Map -->
             <div class="contact-bottom">
                 <div class="map-container">
                     <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.565808313008!2d-79.46279992377443!3d43.691597851612404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33d52c481b37%3A0xb78e9e2852b2d3d6!2s724%20Caledonia%20Rd%2C%20North%20York%2C%20ON%20M6B%203X7%2C%20Canada!5e0!3m2!1sen!2sca!4v1691771586789!5m2!1sen!2sca"
                         width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                         referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </div>
             </div>
         </div>
    </div>
</template>

<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import { openMap, clickToCall } from '@/composables/clickAction';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&family=Work+Sans:wght@400;600&display=swap');

.contact-container {
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Work Sans', sans-serif;
}

.contact-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 2rem;
}

.contact-top {
    display: flex;
    margin: 0 1rem;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

.contact-bottom {
    width: 100%;
}

.contact-info {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    padding: 2rem;
    border-radius: 20px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    width: 100%;
    max-width: 800px;
}

.contact-info h2 {
    font-family: 'Inter', sans-serif;
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0 0 0.75rem 0;
}

.contact-description {
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 2rem 0;
    opacity: 0.9;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.contact-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 6px 12px rgba(59, 130, 246, 0.3);
}

.contact-icon svg {
    color: white;
}

.contact-text h4 {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
}

.contact-text p {
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    opacity: 0.9;
}

.action-buttons {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    width: 100%;
}

.action-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-radius: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.08);
    color: white;
    backdrop-filter: blur(10px);
    flex: 1;
    white-space: nowrap;
    box-sizing: border-box;
    min-height: 60px;
}

.action-btn:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.button-content {
    display: flex;
    align-items: flex-end;
    gap: 0.875rem;
    flex: 1;
}

.button-content svg {
    color: #60a5fa;
    flex-shrink: 0;
    transition: transform 0.3s ease;
    margin-bottom: 0.125rem;
}

.action-btn:hover .button-content svg {
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

.action-btn:hover .arrow-icon {
    color: #60a5fa;
    opacity: 1;
    transform: translateX(4px);
}

.map-container {
    background: #f8fafc;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    height: 400px;
}



@media (max-width: 1024px) {
    .contact-top {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .contact-container {
        padding: 1rem;
    }

    .contact-content {
        gap: 2rem;
    }

    .contact-top {
        gap: 1.5rem;
    }

    .contact-info {
        padding: 1.5rem;
        margin: 0 1rem;
    }

    .action-buttons {
        flex-direction: column;
        align-items: stretch;
    }

    .action-btn {
        width: 100%;
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

    .contact-info h2 {
        font-size: 1.5rem;
    }

    .contact-description {
        font-size: 14px;
    }

    .contact-item {
        gap: 0.75rem;
    }

    .contact-icon {
        width: 32px;
        height: 32px;
    }

    .contact-text h4 {
        font-size: 14px;
    }

    .contact-text p {
        font-size: 13px;
    }
}

@media (max-width: 480px) {
    .contact-info {
        padding: 1rem;
        margin: 0 0.75rem;
    }

    .contact-info h2 {
        font-size: 1.25rem;
    }

    .contact-description {
        font-size: 13px;
    }



    .action-btn {
        width: 100%;
        padding: 0.5rem 0.75rem;
        font-size: 11px;
    }

    .map-container {
        height: 300px;
    }
}
</style>
