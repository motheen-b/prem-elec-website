<template>
    <div class="overlay" v-if="show" @click.self="closeModal">
        <div class="modal">
            <!-- Compact header -->
            <div class="modal-header">
                <button class="close-btn" @click="closeModal" aria-label="Close modal">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <!-- Product content -->
            <div class="modal-content">
                <!-- Product image - maximized -->
                <div class="product-image-container">
                    <img :src="imageURL" :alt="title" class="product-image">
                </div>

                <!-- Product details - compact -->
                <div class="product-details">
                    <div class="product-header">
                        <h2 class="product-title">{{ title }}</h2>
                        <div class="price-badge">
                            <span class="price">${{ price?.toLocaleString() || '0' }}</span>
                        </div>
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
                        <p>{{ description }}</p>
                    </div>

                    <!-- Contact note -->
                    <div class="contact-note">
                        <span>Contact to purchase</span>
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

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
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    font-family: 'Inter', sans-serif;
    padding: 1rem;
}

.modal {
    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(3, 44, 80, 0.3);
    border: 1px solid rgba(59, 130, 246, 0.1);
    animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.modal-header {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    background: linear-gradient(135deg, #032C50 0%, #1a4a7a 100%);
    border-bottom: 1px solid rgba(59, 130, 246, 0.2);
}

.close-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: white;
    backdrop-filter: blur(10px);
}

.close-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.3);
}

.modal-content {
    display: flex;
    flex: 1;
    min-height: 0;
}

.product-image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    padding: 2rem;
    min-height: 400px;
}

.product-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-details {
    flex: 0 0 320px;
    padding: 2rem;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
}

.product-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.product-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin: 0;
    line-height: 1.4;
}

.price-badge {
    display: inline-flex;
    align-items: center;
}

.price {
    font-size: 1.75rem;
    font-weight: 700;
    color: #3b82f6;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid #3b82f6;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
}

.condition-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    color: white;
    align-self: flex-start;
}

.condition-badge.returns {
    background: #f59e0b;
}

.condition-badge.refurbished {
    background: #10b981;
}

.condition-badge.salvage {
    background: #ef4444;
}

.condition-badge.new {
    background: #10b981;
}

.product-description {
    flex: 1;
}

.product-description p {
    font-size: 0.875rem;
    line-height: 1.6;
    color: #64748b;
    margin: 0;
    white-space: pre-line;
}

.contact-note {
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
    border: 1px solid #dc2626;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(220, 38, 38, 0.15);
}

.contact-note span {
    font-size: 0.875rem;
    font-weight: 600;
    color: #dc2626;
    text-shadow: 0 1px 2px rgba(220, 38, 38, 0.1);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .overlay {
        padding: 0.5rem;
    }

    .modal {
        max-height: 95vh;
        border-radius: 12px;
    }

    .modal-content {
        flex-direction: column;
    }

    .product-image-container {
        flex: 0 0 auto;
        min-height: 300px;
        padding: 1rem;
    }

    .product-image {
        max-height: 280px;
    }

    .product-details {
        flex: 1;
        padding: 1.5rem;
        gap: 1rem;
    }

    .product-title {
        font-size: 1.125rem;
    }

    .price {
        font-size: 1.5rem;
        padding: 0.375rem 0.75rem;
    }

    .product-description p {
        font-size: 0.8125rem;
    }
}

@media (max-width: 480px) {
    .overlay {
        padding: 0.25rem;
    }

    .modal {
        max-height: 98vh;
        border-radius: 8px;
    }

    .modal-header {
        padding: 0.75rem;
    }

    .close-btn {
        width: 32px;
        height: 32px;
    }

    .product-image-container {
        min-height: 250px;
        padding: 0.75rem;
    }

    .product-image {
        max-height: 230px;
    }

    .product-details {
        padding: 1rem;
        gap: 0.75rem;
    }

    .product-title {
        font-size: 1rem;
    }

    .price {
        font-size: 1.25rem;
        padding: 0.25rem 0.5rem;
    }

    .condition-badge {
        font-size: 0.6875rem;
        padding: 0.25rem 0.5rem;
    }

    .product-description p {
        font-size: 0.75rem;
    }

    .contact-note {
        padding: 0.5rem 0.75rem;
    }

    .contact-note span {
        font-size: 0.8125rem;
    }
}

@keyframes slideIn {
    0% {
        transform: scale(0.95);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>