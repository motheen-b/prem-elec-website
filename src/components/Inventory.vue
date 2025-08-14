<template>
  <SectionHeader title="Explore Our Inventory" subtitle="Browse our latest liquidation pallets — updated daily." />

  <div class="filter">
    <select id="dropdown" v-model="selectedCategory">
      <option value="All Categories">All Categories</option>
      <option v-for="(cat, index) in categories" :key="index" :value="cat">
        {{ cat }}
      </option>
    </select>

    <select id="dropdown" v-model="selectedCondition">
      <option value="All Conditions">All Conditions</option>
      <option v-for="(con, index) in conditions" :key="index" :value="con">
        {{ con }}
      </option>
    </select>

  <div class="search-container">
    <input type="text" v-model="searchText" placeholder="Search...">
    <button type="button">&#128269;</button>
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
      <img :src="product.image_url" alt="Product Image" class="product-image" />
      <div class="product-details">
        <h2>{{ product.name }}</h2>
        <p class="price">${{ product.price.toFixed(2) }} {{ product.currency }}</p>
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
    const res = await axios.get('http://localhost:8000/catalog')
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
  object-fit: contain;
  /* object-position: center; */
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
  background-color: #032C50;
  color: white;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Filter */

.filter {
  display: flex;
  padding: 1rem;
  gap: 1rem;
  flex-basis: 100%;
  justify-content: flex-end;
}

#dropdown {
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}

#dropdown:hover {
  background-color: #e0e0e0;
}

#dropdown:focus {
  border-color: #007BFF;
  box-shadow: 0 0 5px #007BFF;
}

/* End of Filter */

/* Search Bar */

.search-container {
  display: flex;
  border-radius: 8px;
  border: 1px solid #ccc;
  overflow: hidden;
  width: auto;
}

#searchbar {
  flex: 1;
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
}

#searchbar:hover {
  background-color: #e0e0e0;
}

#searchbar:focus {
  border-color: #007BFF;
  box-shadow: 0 0 5px #007BFF;
  background-color: #f0f0f0;
}

#searchbtn {
  background-color: #f0f0f0;
  color: #333;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
}

#searchbtn:hover {
  background-color: #e0e0e0;
}

/* End of Search Bar */

</style>