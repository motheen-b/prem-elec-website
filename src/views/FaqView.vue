<template>
  <div class="faq-container">
    <SectionHeader title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our products, delivery, and policies." />

    <div v-for="(item, index) in faqs" :key="index" class="faq-item">
      <div class="question" @click="toggle(index)">
        {{ item.question }}
        <span class="arrow" :class="{ open: item.open }">▾</span>
      </div>
      <div v-if="item.open" class="answer">
        {{ item.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeader from '@/components/SectionHeader.vue'

const faqs = ref([
  { question: 'What is a Liquidation Pallet?', answer: 'Liquidation pallets are bulk lots of customer-returned or overstocked items sold at discounted prices, often for resale or liquidation.', open: false },
  { question: 'Can you deliver to me?', answer: 'Ontario-wide delivery is available for all orders—convenient and secure shipping to your location.', open: false },
  { question: 'How does Pickup work?', answer: 'Convenient warehouse pickup—schedule a time that works for you.', open: false },
  { question: 'What is your return policy?', answer: 'All sales are final. No refunds or exchanges are offered, except replacements for refurbished items, which come with a 30-day warranty.', open: false },
  { question: 'Why don’t you offer online purchases?', answer: 'To keep transactions secure, we don’t accept online credit card payments. You can pay in person or via cash, cheque, or e-transfer while ensuring you’re happy with the product.', open: false },

  { question: 'Are your items new, refurbished, or used?', answer: 'We offer a mix of new, refurbished, and used items. Each product listing clearly states its condition so you know exactly what you’re purchasing.', open: false },
  { question: 'What payment methods are accepted?', answer: 'We accept cash, cheque, and e-transfer for all purchases.', open: false },
  { question: 'How can I contact your team with questions?', answer: 'You can reach us via phone, email, or by visiting our warehouse during business hours.', open: false },
])

const toggle = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.faq-item {
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  cursor: pointer;
}

.question {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  transition: color 0.3s;
}

.question:hover {
  color: #032C50;
}

.arrow {
  transition: transform 0.3s;
}

.arrow.open {
  transform: rotate(180deg);
}

.answer {
  margin-top: 0.5rem;
  font-weight: 400;
  color: #555;
}
</style>
