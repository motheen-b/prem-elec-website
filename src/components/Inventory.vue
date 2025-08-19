<template>
  <SectionHeader title="Explore Our Inventory" subtitle="Browse our latest liquidation pallets — updated daily." />

  <div class="filter-container">
    <div class="filter-row">
      <div class="filter-group">
        <label for="category-select">Category</label>
        <select id="category-select" v-model="selectedCategory" class="filter-select">
          <option value="All Categories">All Categories</option>
          <option v-for="(cat, index) in categories" :key="index" :value="cat">
            {{ cat }}
          </option>
        </select>
      </div>

      <div class="filter-group">
        <label for="condition-select">Condition</label>
        <select id="condition-select" v-model="selectedCondition" class="filter-select">
          <option value="All Conditions">All Conditions</option>
          <option v-for="(con, index) in conditions" :key="index" :value="con">
            {{ con }}
          </option>
        </select>
      </div>

      <div class="filter-group search-group">
        <label for="search-input">Search</label>
        <div class="search-container">
          <input 
            type="text" 
            id="search-input"
            v-model="searchText" 
            placeholder="Search products..."
            class="search-input"
          >
          <button type="button" class="search-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>


  <!-- <select id="category2">
      <option value="All Categories">All Categories</option>
      <option v-for="cat in categories" :key="cat.id" :value="cat.name">
        {{ cat.name }}
      </option>
    </select>

    <select id="category3">
      <option value="All Categories">All Categories</option>
      <option v-for="cat in categories" :key="cat.id" :value="cat.name">
        {{ cat.name }}
      </option>
    </select> -->


  <div class="catalog">

    <ProductSkeleton v-if="loading" v-for="n in itemsPerPage" :key="'skeleton-' + n" />

    <div class="product-card" v-else v-for="product in paginatedProducts" :key="product.id" @click="openModal(product)">
      <img :src="product.image_url" :alt="product.name + ' - liquidation product'" class="product-image" />
      <div class="product-details">
        <h2>{{ product.name }}</h2>
        <p class="price">{{ product.price.toLocaleString() }}</p>
        <p class="stock" :class="{ soldout: !product['in-stock'] }">
          {{ product['in-stock'] ? 'In Stock' : 'Sold' }}
        </p>
      </div>
    </div>
  </div>

  <div class="pagination">
    <button :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">Prev</button>

    <button v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }" @click="goToPage(page)">
      {{ page }}
    </button>

    <button :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">Next</button>
  </div>

  <ItemModal :show="showModal" @close="closeModalHandler" :imageURL="selectedProduct?.image_url"
    :title="selectedProduct?.name" :price="selectedProduct?.price" :description="selectedProduct?.description" />

</template>

<script setup>
import ProductSkeleton from "@/components/ProductSkeleton.vue";
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, onMounted, watch } from 'vue'
import SectionHeader from './SectionHeader.vue'
import ItemModal from './ItemModal.vue'
import axios from 'axios'
import { useToast } from '@/composables/useToast'

const searchText = ref('');
const router = useRouter()
const route = useRoute()
const showModal = ref(false)
const selectedProduct = ref(null)
const loading = ref(true)
const products = ref([])
const categories = ref([])
const currentPage = ref(1)
const itemsPerPage = 20
const selectedCategory = ref("All Categories")
const selectedCondition = ref("All Conditions")
const conditions = ref(["Brand New", "Refurbished", "Customer Returns", "Salvage"])
const { error } = useToast()

const openModal = (product) => {
  selectedProduct.value = product
  showModal.value = true
  router.push({ query: { ...route.query, item: product.id } })
}

function closeModalHandler() {
  showModal.value = false
  const query = { ...route.query }
  delete query.item
  router.replace({ query })
}

const detectCondition = (title) => {
  const match = title.match(/\b(Customer Returns|Refurbished|Brand New|Salvage)\b/i);
  return match ? match[0] : "Customer Returns";
};

onMounted(async () => {
  try {
    const res = await axios.get('https://api.theliquidation.group/catalog') // https://api.theliquidation.group/catalog')
    products.value = res.data.result.products
    categories.value = res.data.result.categories
    console.log("Categories: " + categories.value)
    if (route.query.item) {
      const product = products.value.find(p => p.id == route.query.item)
      if (product) {
        selectedProduct.value = product
        showModal.value = true
      }
    }
  } catch (err) {
    console.error('Error loading products:', err)
    error('Failed to load products. Please refresh the page.', 'Loading Error')
  } finally {
    loading.value = false;
  }
})

const sortedProducts = computed(() => {
  return products.value
    .filter(p => selectedCategory.value === "All Categories" || p.category === selectedCategory.value)
    .filter(p => selectedCondition.value === "All Conditions" || detectCondition(p.name) === selectedCondition.value)
    .filter(p => !searchText.value || p.name.toLowerCase().includes(searchText.value.toLowerCase())) // <-- search filter
    .sort((a, b) => Number(b['in-stock'] || 0) - Number(a['in-stock'] || 0))
});

// const sortedProducts = computed(() => {
//   return products.value
//     .filter(p => selectedCategory.value === "All Categories" || p.category === selectedCategory.value)
//     .filter(p => selectedCondition.value === "All Conditions" || detectCondition(p.name) === selectedCondition.value)
//     .sort((a, b) => Number(b['in-stock'] || 0) - Number(a['in-stock'] || 0))
// })

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

// const filteredCategories = computed(() => {
//   if (selectedCategory.value === "All Categories") return products.value
//   return products.value.filter(p => p.category === selectedCategory.value)
// })

// const filteredConditions = computed(() => {
//   if (selectedCondition.value == "All Conditions") return filteredCategories.value
//   return filteredCategories.value.filter(
//     product => detectCondition(product.title) === selectedCondition.value
//   )
// })

// const sortedProducts = computed(() =>
//   [...filteredConditions.value].sort((a, b) => Number(b['in-stock']) - Number(a['in-stock']))
// )



// const sortedProducts = computed(() =>
//   [...products.value].sort((a, b) => Number(b['in-stock']) - Number(a['in-stock']))
// )

// const sortedProducts = computed(() => {
//   const inStockReversed = products.value
//     .filter(p => p['in-stock'])
//     .slice()
//     .reverse()

//   const outOfStockReversed = products.value
//     .filter(p => !p['in-stock'])
//     .slice()
//     .reverse()

//   return [...inStockReversed, ...outOfStockReversed]
// })

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.catalog {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.product-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', sans-serif;
  border: 2px solid #e5e7eb;
  position: relative;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(59, 130, 246, 0.2);
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover::before {
  opacity: 1;
}

.product-image {
  width: 100%;
  height: 320px;
  object-fit: contain;
  background: #f8fafc;
  transition: transform 0.3s ease;
  padding: 1rem;
}

.product-card:hover .product-image {
  transform: scale(1.02);
}

.product-details {
  padding: 1.5rem;
  background: white;
}

.product-details h2 {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #3b82f6;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.price::before {
  content: '$';
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
}

.stock {
  font-size: 0.875rem;
  font-weight: 600;
  color: #059669;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.stock::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #059669;
  border-radius: 50%;
  display: inline-block;
}

.soldout {
  color: #dc2626;
}

.soldout::before {
  background: #dc2626;
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
  background-color: #032C50;
  color: white;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Filter Container */
.filter-container {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 1rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.filter-row {
  display: flex;
  gap: 2rem;
  align-items: flex-end;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 200px;
}

.filter-group label {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.25rem;
}

.filter-select {
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background: white;
  color: #374151;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.filter-select:hover {
  border-color: #3b82f6;
  background-color: #f8fafc;
}

.filter-select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Search Group */
.search-group {
  flex: 2;
  min-width: 300px;
}

.search-container {
  display: flex;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  transition: all 0.3s ease;
}

.search-container:hover {
  border-color: #3b82f6;
}

.search-container:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background: transparent;
  color: #374151;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.search-btn svg {
  transition: transform 0.3s ease;
}

.search-btn:hover svg {
  transform: scale(1.1);
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .filter-container {
    padding: 1.5rem;
    margin: 1.5rem 1rem;
  }
  
  .filter-row {
    gap: 1.5rem;
  }
  
  .filter-group {
    min-width: 180px;
  }
  
  .search-group {
    min-width: 250px;
  }
}

@media (max-width: 768px) {
  .filter-container {
    padding: 1rem;
    margin: 1rem;
  }
  
  .filter-row {
    flex-direction: column;
    gap: 1rem;
  }
  
  .filter-group {
    min-width: 100%;
  }
  
  .search-group {
    min-width: 100%;
  }
  
  .filter-select,
  .search-input {
    font-size: 16px; /* Prevents zoom on iOS */
  }
}

@media (max-width: 480px) {
  .filter-container {
    padding: 0.75rem;
    margin: 0.75rem;
    border-radius: 12px;
  }
  
  .filter-group label {
    font-size: 13px;
  }
  
  .filter-select,
  .search-input {
    padding: 0.625rem 0.875rem;
    font-size: 14px;
  }
  
  .search-btn {
    padding: 0.625rem 0.875rem;
  }
}

/* Card Mobile Responsive */
@media (max-width: 1024px) {
  .catalog {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 1.5rem 1rem;
  }
  
  .product-details {
    padding: 1.25rem;
  }
  
  .product-image {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .catalog {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
  
  .product-card {
    border-radius: 12px;
  }
  
  .product-card:hover {
    transform: translateY(-4px);
  }
  
  .product-details {
    padding: 1rem;
  }
  
  .product-details h2 {
    font-size: 0.9rem;
  }
  
  .price {
    font-size: 1.125rem;
  }
  
  .product-image {
    height: 260px;
  }
}

@media (max-width: 480px) {
  .catalog {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.75rem;
  }
  
  .product-card {
    border-radius: 10px;
  }
  
  .product-details {
    padding: 0.875rem;
  }
  
  .product-details h2 {
    font-size: 0.875rem;
  }
  
  .price {
    font-size: 1rem;
  }
  
  .stock {
    font-size: 0.8rem;
  }
  
  .product-image {
    height: 240px;
  }
}

</style>