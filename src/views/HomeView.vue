<template>
  <div>
    <!-- Main hero section -->
    <section aria-label="Hero">
      <!-- <Slide /> -->
      <Hero />
    </section>
    
    <!-- Banners section (Delivery & WhatsApp) -->
    <section aria-label="Banners">
      <ShippingBanner />
    </section>
    
    <!-- Featured inventory -->
    <section aria-label="Featured Inventory">
      <Inventory />
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import Slide from '@/components/Slide.vue';
import Inventory from '@/components/Inventory.vue';
import ShippingBanner from '@/components/Banners.vue';
</script>

<style scoped>
  
</style>