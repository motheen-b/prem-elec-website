<template>
  <div class="container">
    <SectionHeader title="About Us" subtitle="Quality, Affordability & Convenience" />

    <div class="content">
    
      <div class="content-left">
        <p>
          At Premium Electronics, we specialize in bringing you high-quality electronics at exceptional value. Whether
          you're looking for individual tech products or entire pallets of liquidation items, our carefully curated
          inventory has something for every shopper, from tech enthusiasts to resale businesses.
        </p>
        <p>
          With a commitment to transparency and reliability, we aim to offer unmatched deals and personalized service,
          ensuring every purchase meets your needs and expectations. Our goal is to simplify your shopping experience
          through clear communication, exceptional customer care, and a diverse selection from trusted brands.
        </p>
        <p>
          By offering both retail and wholesale liquidation options, we help customers find exactly what they’re
          looking for—whether it's a great deal on a single device or a profitable business opportunity with bulk
          purchases.
        </p>
      </div>

     
      <div class="content-right">
      
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display:wght@400;700&family=Work+Sans:wght@400;600&display=swap');

.container {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
}

.content {
  display: flex;
  /* flex-wrap: wrap; */
}

.content-left {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.content-right {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
}

.image-placeholder img {
  width: 150px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  /* box-shadow: 0px 4px 8px rgba(0,0,0,0.1); */
}

.map-container iframe {
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
}

p {
  font-family: 'Work Sans', 'sans-serif';
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}
</style>
