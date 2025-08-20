<template>
    <div class="overlay" v-if="show" @click.self="closeModal">
        <div class="modal">
            <div class="modal-header">
                <h3 class="modal-title">{{ title }}</h3>
                <button class="close-btn" @click="closeModal" aria-label="Close modal">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="modal-content">
                <div class="product-image-container">
                    <img 
                        :src="imageURL" 
                        :alt="title" 
                        class="product-image"
                        @click="enlargeImage"
                        :class="{ 'clickable': true }"
                    >
                    <div class="enlarge-overlay" @click="enlargeImage">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                            <line x1="11" y1="8" x2="11" y2="14"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                        <span>Click to enlarge</span>
                    </div>
                </div>

                <div class="product-details">
                    <div class="lot-info">
                        <!-- <div class="lot-header">
                            <h3>Lot Information:</h3>
                        </div> -->
                        
                        <div class="lot-price">
                            <span class="price">${{ price ? price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00' }}</span>
                        </div>
                        
                        <div style="text-align: center;">
                            <div class="condition-badge" :class="{
                                returns: detectCondition(description) === 'Customer Returns',
                                refurbished: detectCondition(description) === 'Refurbished',
                                salvage: detectCondition(description) === 'Salvage',
                                new: detectCondition(description) === 'Brand New'
                            }">
                                {{ detectCondition(description) }}
                            </div>
                        </div>
                        
                        <div class="lot-details">
                            <div class="detail-row">
                                <span class="detail-label">Total Units</span>
                                <span class="detail-value">{{ extractUnitsAndPricePerUnit(title, price).totalUnits }}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Price per Unit</span>
                                <span class="detail-value">{{ extractUnitsAndPricePerUnit(title, price).pricePerUnit === '?' ? '?' : '$' + extractUnitsAndPricePerUnit(title, price).pricePerUnit.toFixed(2).replace(/\.?0+$/, '') }}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">MSRP</span>
                                <span class="detail-value">{{ extractUnitsAndPricePerUnit(title, price).msrp === '?' ? '?' : '$' + extractUnitsAndPricePerUnit(title, price).msrp.toLocaleString() }}</span>
                            </div>
                        </div>
                    </div>

                                        <div class="contact-menu" v-if="inStock">
                        <a href="#" @click.prevent="clickToCall('+16479017565')" class="contact-option phone">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            <span>Call</span>
                        </a>
                        <a href="https://wa.me/16479017565" target="_blank" class="contact-option whatsapp">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                    <div class="contact-note sold-out" v-else>
                        <span>Out of stock</span>
                    </div>

                    <div class="note-section">
                        <p>Note:</p>
                        <span>
                            This item is in {{ detectCondition(description) }} condition and is final sale. No returns or exchanges.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fullscreen-overlay" v-if="showFullscreen" @click="closeFullscreen">
        <div class="fullscreen-content" @click.stop>
            <button class="fullscreen-close-btn" @click="closeFullscreen" aria-label="Close fullscreen">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <img :src="imageURL" :alt="title" class="fullscreen-image">
            <!-- <div class="fullscreen-title">{{ title }}</div> -->
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
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    font-family: 'Inter', sans-serif;
    padding: 1rem;
}

.modal {
    width: 100%;
    max-width: 750px;
    max-height: 85vh;
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
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: linear-gradient(135deg, #032C50 0%, #1a4a7a 100%);
    border-bottom: 1px solid rgba(59, 130, 246, 0.2);
}

.modal-title {
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    flex: 1;
    padding-right: 1rem;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    padding: 1.5rem;
    min-height: 300px;
    position: relative;
}

.product-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.enlarge-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    pointer-events: none;
    z-index: 10;
    text-align: center;
    padding: 8px;
    box-sizing: border-box;
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

.product-details {
    flex: 0 0 280px;
    padding: 1.5rem;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
}

.product-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.5rem;
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
    font-size: 1.5rem;
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
    justify-content: center;
    padding: 0.375rem 0.75rem;
    border-radius: 8px;
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    color: white;
    margin-bottom: 0.75rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    min-width: 100px;
    width: fit-content;
    text-align: center;
}

.condition-badge.returns {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%);
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.condition-badge.refurbished {
    background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.condition-badge.salvage {
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%);
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.condition-badge.new {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
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
    border-radius: 8px;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.contact-note.in-stock :hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(22, 163, 74, 0.2);
}

.contact-note.in-stock {
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    border: 1px solid #16a34a;
    box-shadow: 0 2px 8px rgba(22, 163, 74, 0.15);
}

.contact-note.sold-out {
    background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
    border: 1px solid #dc2626;
    box-shadow: 0 2px 8px rgba(220, 38, 38, 0.15);
}

.contact-note span {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.contact-note.in-stock span {
    color: #16a34a;
}

.contact-note.sold-out span {
    color: #dc2626;
}

.contact-menu {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.contact-option {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.75rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.6875rem;
    transition: all 0.15s ease;
    border: 1px solid transparent;
    width: 80px;
    justify-content: center;
}

.contact-option:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.contact-option.phone {
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-color: #3b82f6;
    color: #1d4ed8;
}

.contact-option.phone:hover {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    border-color: #2563eb;
    color: #1e40af;
}

.contact-option.whatsapp {
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    border-color: #25d366;
    color: #15803d;
}

.contact-option.whatsapp:hover {
    background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
    border-color: #16a34a;
    color: #166534;
}

.contact-option svg {
    flex-shrink: 0;
}

.lot-info {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.lot-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #f3f4f6;
}

.lot-header h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
}

.lot-price {
    margin-bottom: 1rem;
    text-align: center;
}

.lot-price .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #059669;
    background: none;
    padding: 0;
    border: none;
    box-shadow: none;
}

.lot-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f9fafb;
}

.detail-row:last-child {
    border-bottom: none;
}

.detail-label {
    font-size: 0.75rem;
    font-weight: 500;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.025em;
}

.detail-value {
    font-size: 0.75rem;
    font-weight: 600;
    color: #111827;
}

.note-section {
    background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
    border: 1px solid #dc2626;
    border-radius: 8px;
    padding: 0.75rem;
    margin-top: 0;
    margin-bottom: 0;
    box-shadow: 0 2px 8px rgba(220, 38, 38, 0.1);
    min-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.note-section p {
    margin: 0 0 0.5rem 0;
    font-size: 0.875rem;
    color: #dc2626;
    font-weight: bold;
}

.note-section span {
    font-size: 0.875rem;
    line-height: 1.5;
    color: #000000;
}

/* Fullscreen overlay styles */
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
    font-family: 'Inter', sans-serif;
}

.fullscreen-content {
    width: 90%;
    max-width: 1200px;
    max-height: 90vh;
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.fullscreen-close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: white;
    backdrop-filter: blur(10px);
    z-index: 11;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.fullscreen-close-btn:hover {
    background: rgba(220, 38, 38, 0.9);
    border-color: rgba(255, 255, 255, 0.5);
    color: white;
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.fullscreen-close-btn svg {
    width: 20px;
    height: 20px;
    stroke-width: 2.5;
}

.fullscreen-image {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.fullscreen-title {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 1.25rem;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    z-index: 10;
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

    .enlarge-overlay {
        width: 50px;
        height: 50px;
        font-size: 0.5rem;
        padding: 4px;
    }

    .enlarge-overlay svg {
        width: 16px;
        height: 16px;
        margin-bottom: 1px;
    }

    .enlarge-overlay span {
        font-size: 0.5rem;
        line-height: 1;
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

    /* Fullscreen responsive */
    .fullscreen-content {
        width: 95%;
        max-height: 95vh;
        border-radius: 12px;
    }

    .fullscreen-image {
        max-height: 85vh;
    }

    .fullscreen-title {
        font-size: 1rem;
        padding: 0.375rem 0.75rem;
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

    .enlarge-overlay {
        width: 50px;
        height: 50px;
        font-size: 0.5rem;
    }

    .enlarge-overlay svg {
        width: 16px;
        height: 16px;
        margin-bottom: 1px;
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

    .contact-menu {
        padding: 0.375rem;
        gap: 0.375rem;
    }

    .contact-option {
        padding: 0.25rem 0.5rem;
        font-size: 0.625rem;
        width: 70px;
        gap: 0.25rem;
    }

    .fullscreen-content {
        width: 98%;
        max-height: 98vh;
        border-radius: 8px;
    }

    .fullscreen-close-btn {
        width: 40px;
        height: 40px;
        top: 0.5rem;
        right: 0.5rem;
    }

    .fullscreen-close-btn svg {
        width: 18px;
        height: 18px;
        stroke-width: 2;
    }

    .fullscreen-image {
        max-height: 90vh;
    }

    .fullscreen-title {
        font-size: 0.875rem;
        padding: 0.25rem 0.5rem;
        bottom: 0.5rem;
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