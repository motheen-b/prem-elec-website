<template>
  <div class="testimonials-container">
    <SectionHeader 
      title="What Our Customers Say" 
      subtitle="Trusted by businesses across Canada and the US for quality liquidation products" 
    />
    
    <div class="testimonials-grid">
      <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
        <div class="testimonial-header">
          <div class="stars">
            <svg v-for="star in 5" :key="star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div class="quote-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
        </div>
        
        <p class="testimonial-text">{{ testimonial.text }}</p>
        
        <div class="testimonial-author">
          <div class="author-info">
            <h4 class="author-name">{{ testimonial.name }}</h4>
            <p class="author-company">{{ testimonial.company }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue';

const testimonials = [
  {
    id: 1,
    text: "Premier Electronics has been our go-to source for quality liquidation products. Their inventory is always fresh and the prices are unbeatable. Highly recommended!",
    name: "Sarah Johnson",
    company: "Retail Solutions Inc."
  },
  {
    id: 2,
    text: "Fast delivery and excellent customer service. The products we received were in great condition and exactly as described. Will definitely order again!",
    name: "Mike Chen",
    company: "Tech Warehouse"
  },
  {
    id: 3,
    text: "Outstanding quality and professional service. Premier Electronics consistently delivers top-notch liquidation products that help our business grow.",
    name: "Lisa Rodriguez",
    company: "Electronics Plus"
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.testimonials-container {
  max-width: 1200px;
  margin: 4rem auto 4rem;
  padding: 0 1rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.testimonial-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #032C50 0%, #1a4a7a 100%);
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: #cbd5e1;
}

.testimonial-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.stars {
  display: flex;
  gap: 0.25rem;
  color: #fbbf24;
}

.quote-icon {
  color: #032C50;
  opacity: 0.3;
}

.testimonial-text {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  margin: 0 0 1.5rem 0;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-info {
  flex: 1;
}

.author-name {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.25rem 0;
}

.author-company {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

/* Tablet and smaller desktop */
@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
}

/* Mobile devices */
@media (max-width: 768px) {
  .testimonials-container {
    margin: 3rem auto;
    padding: 0 0.75rem;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 2rem 0;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .testimonial-text {
    font-size: 0.95rem;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .testimonials-container {
    margin: 2rem auto;
    padding: 0 0.5rem;
  }
  
  .testimonial-card {
    padding: 1.25rem;
  }
  
  .testimonial-text {
    font-size: 0.9rem;
  }
}
</style>
