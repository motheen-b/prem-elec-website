<template>
    <div class="hero-container">
        <div class="hero-content">
            <div class="hero-text">
                <h4>Welcome to Premium Electronics</h4>
                <h1>Discounted Electronics & Wholesale Pallets</h1>
                <p>Premium returns & overstock. Single items to full pallets. Pickup & delivery available.</p>
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
.hero-content {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    justify-content: center;
    font-family: 'Inter', sans-serif;

}
.hero-text {
    display: flex;
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