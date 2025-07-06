<template>
    <SectionHeader
      title="Explore Our Inventory"
      subtitle="Browse our latest liquidation pallets — updated daily."
    />

    <div class="catalog">
      <div class="product-card" v-for="product in paginatedProducts" :key="product.id">
        <img :src="product.image_url" alt="Product Image" class="product-image" />
        <div class="product-details">
          <h2>{{ product.name }}</h2>
          <p class="price">${{ product.price.toFixed(2) }} {{ product.currency }}</p>
          <p class="stock" :class="{ soldout: !product['in-stock'] }">
            {{ product['in-stock'] ? 'In Stock' : 'Sold Out' }}
          </p>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">Prev</button>

      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: currentPage === page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <button :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">Next</button>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import SectionHeader from './SectionHeader.vue'
import axios from 'axios'

const products = ref([])
const currentPage = ref(1)
const itemsPerPage = 20

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8000/')
    products.value = res.data.products
  } catch (err) {
    console.error('Error loading products:', err)
  }
})

// Sort in-stock first
const sortedProducts = computed(() =>
  [...products.value].sort((a, b) => b['in-stock'] - a['in-stock'])
)

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return sortedProducts.value.slice(start, start + itemsPerPage)
})

const totalPages = computed(() =>
  Math.ceil(sortedProducts.value.length / itemsPerPage)
)

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.catalog {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
  padding: 1rem;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  background-color: white;
  transition: transform 0.2s ease;
  font-family: 'Inter', sans-serif;
}
.product-card:hover {
  transform: translateY(-6px);
  cursor: pointer;
}

.product-image {
  width: 100%;
  height: 425px;
  object-fit: cover;
}

.product-details {
  padding: 1rem;
}

h2 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  min-height: 3rem;
}

.price {
  font-weight: bold;
  color: #2c3e50;
}

.stock {
  font-size: 0.95rem;
  margin-top: 0.25rem;
  font-weight: bold;
  color: green;
}

.soldout {
  color: red;
  font-weight: bold;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 0;
}
.pagination button {
  padding: 0.4rem 0.8rem;
  border: none;
  background-color: #eee;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
.pagination button.active {
  background-color: #2c3e50;
  color: white;
}
.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
