<template>
    <div class="overlay" v-if="show">
        <div class="modal">
            <div class="logo">
                <img src="@/assets/logo-2.png" alt="">
            </div>
            <div class="item">
                <img :src="imageURL" alt="">
            </div>
            <div class="item-info-container">
                <div class="item-title">{{ title }}</div>
                <!-- <div class="item-description">{{ description }}</div> -->
                <div class="condition-container">
                    {{ detectCondition(description) }}
                </div>
                <div class="item-description">{{ description }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    show: Boolean,
    imageURL: String,
    title: String,
    description: String,
    price: Number,
})
defineEmits(['closeModal'])

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
    gap: 20px;
    width: 90%;
    display: flex;
    padding: 2rem;
    max-width: 400px;
    text-align: center;
    position: relative;
    border-radius: 15px;
    flex-direction: column;
    background-color: rgb(218, 236, 247);
}

.logo {
    display: flex;
    justify-content: center;
}

.logo img {
    width: 200px;
    height: auto;
}

.item img {
    width: 350px;
    height: auto;
}

.item-info-container {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    gap: 0.5rem;
}

.item-title {
    font-weight: 600;
    font-size: 20px;

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
    background-color: green;
}
</style>