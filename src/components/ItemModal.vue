<template>
    <div class="overlay" v-if="show" @click.self="closeModal">
        <div class="modal">
            <!-- Header with logo and close button -->
            <div class="modal-header">
                <img src="@/assets/logo-2.png" alt="Prem Elec" class="logo">
                <button class="close-btn" @click="closeModal" aria-label="Close modal">
                    <span>&times;</span>
                </button>
            </div>

            <!-- Product content in a more efficient layout -->
            <div class="modal-content">
                <!-- Left side: Product image -->
                <div class="product-image">
                    <img :src="imageURL" :alt="title">
                </div>

                <!-- Right side: Product details -->
                <div class="product-details">
                    <h2 class="product-title">{{ title }}</h2>
                    
                    <!-- Price prominently displayed -->
                    <div class="price-container">
                        <span class="price">${{ price?.toFixed(2) || '0.00' }}</span>
                    </div>

                    <!-- Condition badge -->
                    <div class="condition-badge" :class="{
                        returns: detectCondition(description) === 'Customer Returns',
                        refurbished: detectCondition(description) === 'Refurbished',
                        salvage: detectCondition(description) === 'Salvage',
                        new: detectCondition(description) === 'Brand New'
                    }">
                        {{ detectCondition(description) }}
                    </div>

                    <!-- Description -->
                    <div class="product-description">
                        <h3>Description</h3>
                        <p>{{ description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['close'])
defineProps({
    show: Boolean,
    imageURL: String,
    title: String,
    description: String,
    price: Number,
})

function closeModal() {
    emit('close')
}

function detectCondition(description) {
  const match = description.match(/\b(Customer Returns|Refurbished|Brand New|Salvage)\b/i);
  return match ? match[0] : "Customer Returns";
}
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    font-family: 'Inter', sans-serif;
}

.modal {
    width: 95%;
    max-width: 800px;
    max-height: 90vh;
    background-color: rgb(218, 236, 247);
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.3s ease-out;
    overflow: hidden;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.1);
}

.logo {
    height: 40px;
    width: auto;
}

.close-btn {
    background: none;
    border: none;
    font-size: 28px;
    color: #666;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.close-btn:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #333;
    transform: scale(1.1);
}

.modal-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    min-height: 400px;
}

.product-image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.3);
}

.product-image img {
    max-width: 100%;
    max-height: 350px;
    object-fit: contain;
    border-radius: 8px;
}

.product-details {
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.product-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    color: #333;
    line-height: 1.3;
}

.price-container {
    margin: 10px 0;
}

.price {
    font-size: 28px;
    font-weight: 700;
    color: #2c5aa0;
    background: rgba(44, 90, 160, 0.1);
    padding: 8px 16px;
    border-radius: 8px;
    display: inline-block;
}

.condition-badge {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 20px;
    color: white;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    align-self: flex-start;
}

.condition-badge.returns {
    background-color: #f39c12;
}

.condition-badge.refurbished {
    background-color: #27ae60;
}

.condition-badge.salvage {
    background-color: #e74c3c;
}

.condition-badge.new {
    background-color: #27ae60;
}

.product-description {
    flex: 1;
}

.product-description h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 10px 0;
    color: #333;
}

.product-description p {
    font-size: 14px;
    line-height: 1.5;
    color: #666;
    margin: 0;
    white-space: pre-line;
}

/* Responsive design */
@media (max-width: 768px) {
    .modal {
        width: 98%;
        max-height: 95vh;
    }
    
    .modal-content {
        grid-template-columns: 1fr;
        gap: 0;
    }
    
    .product-image {
        padding: 15px;
    }
    
    .product-image img {
        max-height: 250px;
    }
    
    .product-details {
        padding: 20px;
    }
    
    .product-title {
        font-size: 18px;
    }
    
    .price {
        font-size: 24px;
    }
}

@keyframes slideIn {
    0% {
        transform: scale(0.8);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>