<template>
    <div class="overlay" v-if="show" @click.self="closeModal">
        <div class="modal">
            <!-- Modern Header -->
            <div class="modal-header">
                <div class="header-left">
                    <h3 class="modal-title">{{ title }}</h3>
                    <div class="condition-badge" :class="{
                        returns: detectCondition(description) === 'Customer Returns',
                        refurbished: detectCondition(description) === 'Refurbished',
                        salvage: detectCondition(description) === 'Salvage',
                        new: detectCondition(description) === 'Brand New'
                    }">
                        {{ detectCondition(description) }}
                    </div>
                </div>
                <button class="close-btn" @click="closeModal" aria-label="Close modal">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="modal-content">
                <!-- Image Section -->
                <div class="image-section">
                    <div class="image-wrapper" @click="enlargeImage">
                        <img 
                            :src="imageURL" 
                            :alt="title" 
                            class="product-image"
                        >
                        <div class="enlarge-overlay">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                            <span>Click to enlarge</span>
                        </div>
                    </div>
                </div>

                <!-- Details Section -->
                <div class="details-section">
                    <!-- Price Display -->
                    <div class="price-display">
                        <div class="price-main">
                            <span class="price-amount">${{ price ? price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00' }}</span>
                            <span class="price-label">Total Lot Price</span>
                        </div>
                    </div>

                    <!-- Quick Stats -->
                    <div class="stats-grid">
                        <div class="stat-card">
                            <span class="stat-label">Units</span>
                            <span class="stat-value">{{ extractUnitsAndPricePerUnit(title, price).totalUnits }}</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-label">Per Unit</span>
                            <span class="stat-value">{{ extractUnitsAndPricePerUnit(title, price).pricePerUnit === '?' ? '?' : '$' + extractUnitsAndPricePerUnit(title, price).pricePerUnit.toFixed(2).replace(/\.?0+$/, '') }}</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-label">MSRP</span>
                            <span class="stat-value">{{ extractUnitsAndPricePerUnit(title, price).msrp === '?' ? 'N/A' : '$' + extractUnitsAndPricePerUnit(title, price).msrp.toLocaleString() }}</span>
                        </div>
                    </div>

                    <!-- Contact Actions -->
                    <div class="contact-section" v-if="inStock">
                        <div class="contact-buttons">
                            <button @click="clickToCall('+16479017565')" class="contact-btn phone-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span>Call Now</span>
                            </button>
                            <a href="https://wa.me/16479017565" target="_blank" class="contact-btn whatsapp-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                </svg>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                    <div class="out-of-stock" v-else>
                        <div class="stock-status">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                <line x1="9" y1="9" x2="15" y2="15"></line>
                            </svg>
                            <span>Out of Stock</span>
                        </div>
                    </div>

                    <!-- Important Notice -->
                    <div class="notice-section">
                        <div class="notice-content">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <span>Final sale - {{ detectCondition(description) }} condition. No returns or exchanges.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Fullscreen Image Modal -->
    <div class="fullscreen-overlay" v-if="showFullscreen" @click="closeFullscreen">
        <div class="fullscreen-content" @click.stop>
            <button class="fullscreen-close-btn" @click="closeFullscreen" aria-label="Close fullscreen">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <img :src="imageURL" :alt="title" class="fullscreen-image">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { clickToCall } from '@/composables/clickAction.js';

const emit = defineEmits(['close'])
defineProps({
    show: Boolean,
    imageURL: String,
    title: String,
    description: String,
    price: Number,
    inStock: Boolean
})

const showFullscreen = ref(false);

function closeModal() {
    emit('close')
}

function enlargeImage() {
    showFullscreen.value = true;
}

function closeFullscreen() {
    showFullscreen.value = false;
}

function detectCondition(description) {
    const match = description.match(/\b(Customer Returns|Refurbished|Brand New|Salvage)\b/i);
    return match ? match[0] : "Customer Returns";
}

function extractUnitsAndPricePerUnit(title, price) {
    // Extract number of units from title
    const unitsMatch = title.match(/(\d+)\s*Units?/i);
    const units = unitsMatch ? parseInt(unitsMatch[1]) : null;
    
    // Extract MSRP from title
    const msrpMatch = title.match(/MSRP\s*\$?([\d,]+)/i);
    const msrp = msrpMatch ? parseInt(msrpMatch[1].replace(/,/g, '')) : null;
    
    // If no valid units found, return placeholder object
    if (!units || units <= 0) {
        return {
            totalUnits: "?",
            pricePerUnit: "?",
            msrp: msrp || "?"
        };
    }
    
    // If no valid price, return placeholder object
    if (!price || price <= 0) {
        return {
            totalUnits: units,
            pricePerUnit: "?",
            msrp: msrp || "?"
        };
    }
    
    // Calculate price per unit
    const pricePerUnit = price / units;
    
    return {
        totalUnits: units,
        pricePerUnit: pricePerUnit,
        msrp: msrp || "?"
    };
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
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    font-family: 'Inter', sans-serif;
    padding: 1rem;
}

.modal {
    width: 100%;
    max-width: 800px;
    max-height: 90vh;
    background: white;
    border-radius: 20px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    animation: modalSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

/* Modern Header */
.modal-header {
    background: linear-gradient(135deg, #032C50 0%, #1a4a7a 100%);
    padding: 1.25rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
}

.header-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-width: 0; /* Allow flex item to shrink below content size */
}

.modal-title {
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; /* Force single line with ellipsis */
}

.condition-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    color: white;
    width: fit-content;
}

.condition-badge.returns {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.condition-badge.refurbished {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.condition-badge.salvage {
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.condition-badge.new {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.close-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: white;
    flex-shrink: 0;
}

.close-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
}

/* Content Layout */
.modal-content {
    display: grid;
    grid-template-columns: 1fr 320px;
    flex: 1;
    min-height: 0;
}

/* Image Section */
.image-section {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
}

.image-wrapper {
    position: relative;
    cursor: pointer;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.2s ease;
    max-width: 100%;
    max-height: 400px;
}

.image-wrapper:hover {
    transform: scale(1.02);
}

.product-image {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
    display: block;
}

.enlarge-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.6875rem;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    pointer-events: none;
    z-index: 10;
    text-align: center;
    padding: 8px;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.image-wrapper:hover .enlarge-overlay {
    opacity: 1;
}

.enlarge-overlay svg {
    margin-bottom: 4px;
    flex-shrink: 0;
}

.enlarge-overlay span {
    line-height: 1.2;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

/* Details Section */
.details-section {
    padding: 1.5rem;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    overflow-y: auto;
}

/* Price Display */
.price-display {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border: 1px solid #0ea5e9;
    border-radius: 16px;
    padding: 1.25rem;
    text-align: center;
}

.price-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.price-amount {
    font-size: 2rem;
    font-weight: 700;
    color: #0ea5e9;
    line-height: 1;
}

.price-label {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
}

/* Stats Grid */
.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
}

.stat-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    transition: transform 0.2s ease;
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.stat-label {
    display: block;
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    margin-bottom: 0.5rem;
}

.stat-value {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: #1e293b;
}

/* Contact Section */
.contact-section {
    margin-top: 0.5rem;
}

.contact-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
}

.contact-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem 1rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.875rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.phone-btn {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
}

.phone-btn:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.whatsapp-btn {
    background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
    color: white;
}

.whatsapp-btn:hover {
    background: linear-gradient(135deg, #128c7e 0%, #075e54 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

/* Out of Stock */
.out-of-stock {
    background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
    border: 1px solid #ef4444;
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
}

.stock-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #dc2626;
    font-weight: 600;
    font-size: 0.875rem;
}

/* Notice Section */
.notice-section {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 1px solid #f59e0b;
    border-radius: 12px;
    padding: 1rem;
}

.notice-content {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    color: #92400e;
    font-size: 0.875rem;
    line-height: 1.5;
}

/* Fullscreen Modal */
.fullscreen-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(8px);
}

.fullscreen-content {
    position: relative;
    max-width: 95vw;
    max-height: 95vh;
}

.fullscreen-close-btn {
    position: absolute;
    top: -50px;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    transition: all 0.2s ease;
}

.fullscreen-close-btn:hover {
    background: rgba(220, 38, 38, 0.9);
    transform: scale(1.1);
}

.fullscreen-image {
    max-width: 100%;
    max-height: 95vh;
    object-fit: contain;
    border-radius: 16px;
}

/* Animations */
@keyframes modalSlideIn {
    0% {
        transform: scale(0.95) translateY(10px);
        opacity: 0;
    }
    100% {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .overlay {
        padding: 0.5rem;
    }

    .modal {
        max-height: 95vh;
        border-radius: 16px;
    }

    .modal-content {
        grid-template-columns: 1fr;
    }

    .modal-header {
        padding: 1rem;
        flex-direction: row;
        align-items: flex-start;
        gap: 1rem;
    }

    .header-left {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .modal-title {
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .image-section {
        padding: 1.5rem;
    }

    .image-wrapper {
        max-height: 300px;
    }

    .product-image {
        max-height: 300px;
    }

    .enlarge-overlay {
        width: 60px;
        height: 60px;
        font-size: 0.625rem;
        padding: 6px;
    }

    .enlarge-overlay svg {
        width: 16px;
        height: 16px;
        margin-bottom: 2px;
    }

    .details-section {
        padding: 1.25rem;
        gap: 1rem;
    }

    .price-amount {
        font-size: 1.75rem;
    }

    .stats-grid {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.5rem;
    }

    .stat-card {
        padding: 0.75rem;
    }

    .stat-label {
        font-size: 0.6875rem;
    }

    .stat-value {
        font-size: 0.875rem;
    }

    .contact-buttons {
        grid-template-columns: 1fr;
        gap: 0.5rem;
    }

    .contact-btn {
        padding: 0.75rem;
        font-size: 0.8125rem;
    }

    .notice-content {
        font-size: 0.8125rem;
    }

    .fullscreen-close-btn {
        top: -40px;
        width: 40px;
        height: 40px;
    }
}

@media (max-width: 480px) {
    .overlay {
        padding: 0.25rem;
    }

    .modal {
        max-height: 98vh;
        border-radius: 12px;
    }

    .modal-header {
        padding: 0.75rem;
        flex-direction: row;
        align-items: flex-start;
        gap: 0.75rem;
    }

    .header-left {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .modal-title {
        font-size: 0.875rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .condition-badge {
        font-size: 0.6875rem;
        padding: 0.25rem 0.5rem;
    }

    .close-btn {
        width: 28px;
        height: 28px;
    }

    .image-section {
        padding: 1rem;
    }

    .image-wrapper {
        max-height: 250px;
    }

    .product-image {
        max-height: 250px;
    }

    .enlarge-overlay {
        width: 50px;
        height: 50px;
        font-size: 0.5625rem;
    }

    .enlarge-overlay svg {
        width: 14px;
        height: 14px;
        margin-bottom: 1px;
    }

    .enlarge-overlay span {
        font-size: 0.5625rem;
    }

    .details-section {
        padding: 1rem;
        gap: 0.875rem;
    }

    .price-display {
        padding: 1rem;
    }

    .price-amount {
        font-size: 1.5rem;
    }

    .price-label {
        font-size: 0.8125rem;
    }

    .stats-grid {
        gap: 0.375rem;
    }

    .stat-card {
        padding: 0.5rem;
    }

    .stat-label {
        font-size: 0.625rem;
        margin-bottom: 0.25rem;
    }

    .stat-value {
        font-size: 0.8125rem;
    }

    .contact-btn {
        padding: 0.625rem;
        font-size: 0.75rem;
    }

    .stock-status {
        font-size: 0.8125rem;
    }

    .notice-content {
        font-size: 0.75rem;
    }

    .fullscreen-close-btn {
        top: -35px;
        width: 36px;
        height: 36px;
    }
}
</style>