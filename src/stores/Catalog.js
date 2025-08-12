import { defineStore } from 'pinia'
import axios from 'axios'

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    products: [],
    loaded: false
  }),
  actions: {
    async loadProducts() {
      if (!this.loaded) {
        try {
          const res = await axios.get('http://localhost:8000/catalog')
          this.products = res.data.products
          this.loaded = true
        } catch (err) {
          console.error('Error loading products:', err)
        }
      }
    }
  }
})
