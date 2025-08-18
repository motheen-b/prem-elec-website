<template>
    <div class="contact-container">
        <SectionHeader title="Contact Us" subtitle="We'd love to hear from you! Reach us by phone, email, or by sending us a message directly." />

        <div class="contact-content">
            <div class="contact-left">
                <div class="contact-info">
                    <h2>Get In Touch</h2>
                    <p class="contact-description">
                        Ready to find your perfect electronics deal? Contact us today for personalized service and expert guidance.
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
                                <p>(647) 901-7565 - Motheen</p>
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
                                <p>contact@premiumelectronics.ca</p>
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
                                <p>Open by appointment only - Contact us prior to arrival</p>
                            </div>
                        </div>
                    </div>

                                         <div class="action-buttons">
                         <button class="action-btn" @click="openMap('724 Caledonia Rd, North York, ON, M6B 3X7')">
                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                 <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                             </svg>
                             <span>Get Directions</span>
                         </button>
                         <button class="action-btn" @click="clickToCall('6479017565')">
                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                 <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                             </svg>
                             <span>Call Now</span>
                         </button>
                     </div>
                </div>

                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.565808313008!2d-79.46279992377443!3d43.691597851612404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33d52c481b37%3A0xb78e9e2852b2d3d6!2s724%20Caledonia%20Rd%2C%20North%20York%2C%20ON%20M6B%203X7%2C%20Canada!5e0!3m2!1sen!2sca!4v1691771586789!5m2!1sen!2sca"
                        width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div class="contact-right">
                <div class="form-container">
                    <h2>Send Us a Message</h2>
                    <p class="form-description">
                        Have questions about our inventory or need assistance? Fill out the form below and we'll get back to you promptly.
                    </p>
                    
                    <form @submit.prevent="sendEmail" class="contact-form">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input 
                                v-model="form.name" 
                                type="text" 
                                id="name" 
                                required 
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input 
                                v-model="form.email" 
                                type="email" 
                                id="email" 
                                required 
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea 
                                v-model="form.message" 
                                id="message" 
                                rows="6" 
                                required 
                                placeholder="Tell us about your inquiry or what you're looking for..."
                            ></textarea>
                        </div>

                        <button type="submit" class="submit-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import { reactive } from "vue";
import { openMap, clickToCall } from '@/composables/clickAction';
import { useToast } from '@/composables/useToast';

const { success, error } = useToast();

const form = reactive({
    name: "",
    email: "",
    message: "",
});

function sendEmail() {
    console.log("📨 Sending email...", form);
    
    // Simulate form submission
    try {
        // Here you would typically send the data to your backend
        // For now, we'll simulate a successful submission
        
        success(
            "We'll get back to you within 24 hours!", 
            "Message Sent Successfully"
        );
        
        // Reset form
        form.name = "";
        form.email = "";
        form.message = "";
        
    } catch (err) {
        error(
            "Failed to send message. Please try again or contact us directly.", 
            "Submission Error"
        );
    }
}
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 2rem;
}

.contact-left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.contact-info {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    padding: 2rem;
    border-radius: 16px;
    color: white;
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
    align-items: flex-start;
    gap: 1rem;
}

.contact-icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.contact-icon svg {
    color: #93c5fd;
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
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    backdrop-filter: blur(10px);
    flex: 1;
    justify-content: center;
    white-space: nowrap;
    box-sizing: border-box;
}

.action-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.action-btn svg {
    flex-shrink: 0;
}

.action-btn span {
    flex: 1;
    text-align: center;
}

.map-container {
    background: #f8fafc;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.contact-right {
    display: flex;
    flex-direction: column;
}

.form-container {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    margin-top: 0;
}

.form-container h2 {
    font-family: 'Inter', sans-serif;
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0 0 0.75rem 0;
    color: #1f2937;
    padding-top: 0;
}

.form-description {
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 2rem 0;
    color: #6b7280;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
}

.form-group input,
.form-group textarea {
    padding: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    background: white;
    transition: all 0.3s ease;
    resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #9ca3af;
}

.submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
    margin-top: 0.5rem;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
}

.submit-btn svg {
    transition: transform 0.3s ease;
}

.submit-btn:hover svg {
    transform: translateX(2px);
}

@media (max-width: 1024px) {
    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .contact-container {
        padding: 1rem;
    }

    .contact-content {
        gap: 1.5rem;
    }

    .contact-info,
    .form-container {
        padding: 1.5rem;
    }

    .action-buttons {
        flex-direction: column;
        align-items: stretch;
    }

    .action-btn {
        width: 100%;
        padding: 0.625rem 1rem;
        font-size: 12px;
    }

    .contact-info h2,
    .form-container h2 {
        font-size: 1.5rem;
    }

    .contact-description,
    .form-description {
        font-size: 14px;
    }

    .contact-item {
        gap: 0.75rem;
    }

    .contact-icon {
        width: 36px;
        height: 36px;
    }

    .contact-text h4 {
        font-size: 14px;
    }

    .contact-text p {
        font-size: 13px;
    }
}

@media (max-width: 480px) {
    .contact-info,
    .form-container {
        padding: 1rem;
    }

    .contact-info h2,
    .form-container h2 {
        font-size: 1.25rem;
    }

    .contact-description,
    .form-description {
        font-size: 13px;
    }

    .form-group input,
    .form-group textarea {
        padding: 0.875rem;
        font-size: 14px;
    }

    .submit-btn {
        padding: 0.875rem 1.5rem;
        font-size: 14px;
    }

    .action-btn {
        width: 100%;
        padding: 0.5rem 0.75rem;
        font-size: 11px;
    }
}
</style>
