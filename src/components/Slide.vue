<template>
    <div>
        <div class="slide-container">
            <div class="logos">
                <div class="logos-slide">
                    <img src="@/assets/best-buy.png" id="logo">
                    <img src="@/assets/amazon.png" alt="logo">
                    <img src="@/assets/walmart.png" alt="logo">
                    <img src="@/assets/costco.png" alt="logo">
                    <img src="@/assets/wayfair.png" alt="logo">
                    <img src="@/assets/target.png" alt="logo">
                    <img src="@/assets/homedepot.png" alt="logo">
                </div>
                <div class="logos-slide">
                    <img src="@/assets/best-buy.png" id="logo">
                    <img src="@/assets/amazon.png" alt="logo">
                    <img src="@/assets/walmart.png" alt="logo">
                    <img src="@/assets/costco.png" alt="logo">
                    <img src="@/assets/wayfair.png" alt="logo">
                    <img src="@/assets/target.png" alt="logo">
                    <img src="@/assets/homedepot.png" alt="logo">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.slide-container {
    display: flex;
    align-items: center;
    overflow: hidden;
    flex-basis: 100%;
    height: 90px;
}

.logos {
    display: flex;
    align-items: center;
    overflow: hidden;
    flex-basis: 100%;
    padding: 10px 0;
    white-space: nowrap;
}

.logos-slide {
    display: flex;
    align-items: center;
    animation: slide 20s infinite linear;
}

.logos-slide img {
    margin: 0 30px;
    border-radius: 15px;
    width: 75px;
}

#logo {
    display: block;
}

@keyframes slide {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>