<template>
  <div class="faq-container">
    <SectionHeader 
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our products, delivery, and policies." 
    />

    <div class="faq-content">
      <div 
        v-for="(item, index) in faqs" 
        :key="index" 
        class="faq-item"
        :class="{ 'faq-open': item.open }"
      >
        <button 
          class="faq-question" 
          @click="toggle(index)"
          :aria-expanded="item.open"
          :aria-controls="`faq-answer-${index}`"
        >
          <span class="question-text">{{ item.question }}</span>
          <svg 
            class="arrow-icon" 
            :class="{ 'arrow-open': item.open }"
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </button>
        <transition name="faq-slide">
          <div 
            v-show="item.open" 
            class="faq-answer"
            :id="`faq-answer-${index}`"
          >
            <p>{{ item.answer }}</p>
          </div>
        </transition>
      </div>
    </div>

    <div class="faq-cta">
      <h3>Still have questions?</h3>
      <p>Can't find what you're looking for? Contact us directly and we'll be happy to help!</p>
      <router-link to="/contact" class="cta-button">
        <span>Contact Us</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 12h14m-7-7 7 7-7 7"/>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeader from '@/components/SectionHeader.vue'

const faqs = ref([
  { 
    question: 'What is a Liquidation Pallet?', 
    answer: 'Liquidation pallets are bulk lots of customer-returned or overstocked items sold at discounted prices, often for resale or liquidation. These pallets contain a variety of electronics and other products that are sold at wholesale prices to help businesses and individuals save money while offering great deals.', 
    open: false 
  },
  { 
    question: 'Can you deliver to me?', 
    answer: 'Yes! We offer Ontario-wide delivery for all orders. Our delivery service is convenient, secure, and reliable. We ensure your items are carefully packaged and delivered to your location in excellent condition. Contact us to arrange delivery and get a quote for your specific location.', 
    open: false 
  },
  { 
    question: 'How does Pickup work?', 
    answer: 'Warehouse pickup is simple and convenient. Once you\'ve selected your items, contact us to schedule a pickup time that works for you. Our warehouse is located in North York, and we\'ll have your items ready for inspection and pickup. This option allows you to see the products in person before taking them home.', 
    open: false 
  },
  { 
    question: 'What is your return policy?', 
    answer: 'All sales are final with no refunds or exchanges, except for refurbished items which come with a 30-day warranty. We thoroughly inspect all items before sale to ensure quality. For refurbished products, we offer replacement or repair within 30 days if there are any issues.', 
    open: false 
  },
  { 
    question: 'Why don\'t you offer online purchases?', 
    answer: 'We prioritize security and customer satisfaction by not accepting online credit card payments. Instead, we offer payment via cash, cheque, or e-transfer. This approach ensures you can inspect products in person and are completely satisfied before making payment, providing a more secure and transparent transaction process.', 
    open: false 
  },
  { 
    question: 'Are your items new, refurbished, or used?', 
    answer: 'We offer a comprehensive mix of new, refurbished, and used items. Each product listing clearly states its condition so you know exactly what you\'re purchasing. New items come in original packaging, refurbished items are professionally restored and tested, and used items are inspected for quality.', 
    open: false 
  },
  { 
    question: 'What payment methods are accepted?', 
    answer: 'We accept cash, cheque, and e-transfer for all purchases. These payment methods provide flexibility and security for our customers. E-transfer is particularly convenient for quick and secure transactions.', 
    open: false 
  },
  { 
    question: 'How can I contact your team with questions?', 
    answer: 'You can reach us via phone at (647) 901-7565, email at contact@premiumelectronics.ca, or by visiting our warehouse during business hours. We\'re here to help with any questions about our products, delivery options, or policies.', 
    open: false 
  },
])

const toggle = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Work+Sans:wght@400;500;600&display=swap');

.faq-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Work Sans', sans-serif;
}

.faq-content {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.faq-item:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-color: #cbd5e1;
}

.faq-item.faq-open {
  border-color: #3b82f6;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  transition: all 0.3s ease;
  position: relative;
}

.faq-question:hover {
  background: #f8fafc;
  color: #3b82f6;
}

.faq-question:focus {
  outline: none;
  background: #f1f5f9;
  color: #3b82f6;
}

.question-text {
  flex: 1;
  line-height: 1.5;
}

.arrow-icon {
  flex-shrink: 0;
  margin-left: 1rem;
  color: #6b7280;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.arrow-open {
  transform: rotate(180deg);
  color: #3b82f6;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem 1.5rem;
  overflow: hidden;
}

.faq-answer p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #6b7280;
  font-weight: 400;
}

.faq-cta {
  margin-top: 4rem;
  text-align: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 3rem 2rem;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}

.faq-cta h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1rem 0;
}

.faq-cta p {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0 0 2rem 0;
  line-height: 1.6;
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

/* FAQ Slide Animation */
.faq-slide-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.faq-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.faq-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
  max-height: 0;
}

.faq-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}

.faq-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}

.faq-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .faq-container {
    padding: 1.5rem 1rem;
  }

  .faq-content {
    margin-top: 2rem;
    gap: 0.75rem;
  }

  .faq-question {
    padding: 1.25rem;
    font-size: 1rem;
  }

  .faq-answer {
    padding: 0 1.25rem 1.25rem 1.25rem;
  }

  .faq-answer p {
    font-size: 0.95rem;
  }

  .faq-cta {
    margin-top: 3rem;
    padding: 2rem 1.5rem;
  }

  .faq-cta h3 {
    font-size: 1.5rem;
  }

  .faq-cta p {
    font-size: 1rem;
  }

  .cta-button {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .faq-container {
    padding: 1rem;
  }

  .faq-question {
    padding: 1rem;
    font-size: 0.95rem;
  }

  .faq-answer {
    padding: 0 1rem 1rem 1rem;
  }

  .faq-answer p {
    font-size: 0.9rem;
  }

  .faq-cta {
    margin-top: 2rem;
    padding: 1.5rem 1rem;
  }

  .faq-cta h3 {
    font-size: 1.25rem;
  }

  .faq-cta p {
    font-size: 0.95rem;
  }

  .cta-button {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }
}

/* Accessibility improvements */
.faq-question:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .faq-item,
  .faq-question,
  .arrow-icon,
  .cta-button,
  .cta-button svg {
    transition: none;
  }

  .faq-slide-enter-active,
  .faq-slide-leave-active {
    transition: none;
  }

  .faq-slide-enter-from,
  .faq-slide-leave-to {
    transform: none;
    opacity: 1;
  }
}
</style>
