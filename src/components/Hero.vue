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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(5px);
    z-index: 1;
    border-radius: 15px;
}

.hero-content {
    display: flex;
    position: relative;
    align-self: center;
    z-index: 2;
    padding: 2rem;
    gap: 1.5rem;
    height: 200px;
    flex-direction: column;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    border-radius: 15px;

}

.hero-text {
    display: flex;
    z-index: 3;
    flex-direction: column;
    line-height: 1.8;
    color: white;
    text-shadow:
        -1px -1px 0 black,
        1px -1px 0 black,
        -1px 1px 0 black,
        1px 1px 0 black;
}

.button {
    display: inline-block;
    align-self: flex-start;
    z-index: 4;
    border-radius: 15px;
    padding: 0.75rem 1.25rem;
    font-size: 24px;
    font-weight: 700;
    color: white;
    background-color: #0494b1;
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
    font-size: 20px;
}

@media screen and (max-width: 769px) {
    h1 {
        font-size: 1.4rem;
    }

    h4 {
        font-size: 1.1rem;
    }

    p {
        font-size: 1rem;
    }
}

@media screen and (max-width: 585px) {
    h1 {
        font-size: 1.2rem;
    }

    h4 {
        font-size: 1rem;
    }

    p {
        font-size: 0.9rem;
    }
}

@media screen and (max-width: 585px) {
    h1 {
        font-size: 1.2rem;
    }

    h4 {
        font-size: 0.9rem;
    }

    p {
        font-size: 0.8rem;
    }
}

@media screen and (max-width: 522px) {
    h1 {
        font-size: 1rem;
    }

    h4 {
        font-size: 0.8rem;
    }

    p {
        font-size: 0.7rem;
    }
}


@media screen and (max-width: 520px) {}
</style>