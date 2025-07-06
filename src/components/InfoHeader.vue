<template>
    <div class="header-container">
    <div class="socials">
        <img src="@/assets/instagram.svg" alt="">
        <img src="@/assets/facebook.svg" alt="">
    </div>
    <span class="header-text">724 Caledonia Rd, North York</span>
    <div class="contact">
        +1(647)901-7565
    </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    background-color: #110135;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.header-text {
    display: flex;
    font-size: 28px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-family: 'Inter', 'sans-serif';
}
.socials {
    display: flex;
    gap: 1rem;
}
.socials img {
    width: 35px;
    height: 35px;
    transition: transform 0.3s ease-in-out;
}
.socials img:hover {
    cursor: pointer;
    transform: scale(1.1);
}
.contact {
    color: white;
    margin-left: auto;
    font-family: 'Inter', 'sans-serif';
    font-size: 18px;
    transition: transform 0.3s ease-in-out;
}
.contact:hover {
    cursor: pointer;
    transform: scale(1.1);
}
</style>