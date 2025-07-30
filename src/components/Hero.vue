<template>
    <div class="hero-container">
        <div class="hero-content">
            <div class="hero-text">
                <h4>Welcome to Premium Electronics</h4>
                <h1>Discounted Electronics & Wholesale Pallets</h1>
                <p>724 Caledonia Rd, North York, ON, M6B 3X7</p>
                <p>(647) 901 7565 - Adam</p>
            </div>
            <div class="button">Browse</div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
.hero-container {
    display: flex;
    padding: 2rem;
    height: 500px;
    background-image: url('@/assets/hero.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
.hero-content::before {
    content: ""; /* Required */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    border-radius: 15px;
}
.hero-content {
    display: flex;
    position: relative;
    z-index: 2;
    padding: 2rem;
    gap: 1.5rem;
    flex-direction: column;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    border-radius: 15px;

}
.hero-text {
    display: flex;
    z-index: 3;
    flex-direction: column;
    gap: 1.5rem;
    color: white;
    text-shadow:
        -1px -1px 0 black,
        1px -1px 0 black,
        -1px  1px 0 black,
        1px  1px 0 black;
}
.button {
    display: inline-block;
    align-self: flex-start; 
    z-index: 4;
    border: 1px solid black;
    border-radius: 15px;
    padding: 0.5rem 1.25rem;
    font-size: 24px;
    font-weight: 700;
    color: white;
    background-color: #110135;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.button:hover {
    cursor: pointer;
    transform: scale(1.15);
}
h1 {
    font-size: 30px;
}
h4 {
    font-size: 20px;
}
p {
    font-size: 18px;
}
</style>