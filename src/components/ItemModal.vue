<template>
    <div class="overlay" v-if="show" @click.self="closeModal">
        <div class="modal">
            <div class="logo">
                <img src="@/assets/logo-2.png" alt="">
                <div class="exit" @click.self="closeModal" style="color:red; font-size: 35px;">&times;</div>
            </div>
            <div class="item">
                <img :src="imageURL" alt="">
            </div>
            <div class="item-info-container">
                <div class="item-title">{{ title }}</div>
                <div class="condition-container" :class="{
                    returns: detectCondition(description) === 'Customer Returns',
                    refurbished: detectCondition(description) === 'Refurbished'
                }">
                    {{ detectCondition(description) }}
                </div>
                <div class="item-description">{{ description }}</div>
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
    const match = description.match(/\b(Customer Returns|Refurbished)\b/i);
    return match ? match[0] : "Customer Returns";
}
</script>

<style scoped>
.overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    background: rgba(0, 0, 0, 0.6);
}

.modal {
    gap: 10px;
    width: 90%;
    display: flex;
    max-width: 400px;
    text-align: center;
    position: relative;
    border-radius: 15px;
    flex-direction: column;
    background-color: rgb(218, 236, 247);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    animation: explodeIn 0.6s ease-out;
}

.logo {
    display: flex;
    padding: 10px;
    justify-content: center;
}

.exit {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    padding-right: 5px;
    font-size: 25px;
    transition: transform 0.3s ease-in-out;
}

.exit:hover {
    cursor: pointer;
    transform: scale(1.5);
}

.logo img {
    width: 200px;
    height: auto;
}

.item img {
    width: 300px;
    height: auto;
    max-height: 400px;
}

.item-info-container {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    padding: 10px;
    gap: 0.5rem;
}

.item-title {
    font-weight: 600;
    font-size: 18px;

}

.item-description {
    font-size: 14px;
    white-space: pre-line;
}

.condition-container {
    display: inline-block;
    align-self: flex-start;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    color: white;
    width: auto;
    height: auto;
    padding: 0.5rem;
    border-radius: 15px;
}

.condition-container.returns {
    background-color: rgb(235, 162, 27);
}

.condition-container.refurbished {
    background-color: green;
}

@keyframes explodeIn {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    50% {
        transform: scale(1.2);
        opacity: 1;
    }

    70% {
        transform: scale(0.95);
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>