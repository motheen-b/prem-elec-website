<template>
    <div class="nav">
        <div class="nav-logo">
            <img src="@/assets/logo-2.png" alt="">
        </div>
        <div class="nav-links">
            <router-link to="/" active-class="active">Home</router-link>
            <router-link to="/inventory" active-class="active">Inventory</router-link>
            <router-link to="/about" active-class="active">About</router-link>
            <router-link to="/contact" active-class="active">Contact</router-link>
            <router-link to="/faq" active-class="active">F.A.Q.</router-link>
            <router-link to="/testimonials" active-class="active">Testimonials</router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
.nav {
    display: flex;
    height: 70px;
    padding: 0 1rem;
    flex-basis: 100%;
    align-items: center;
    justify-content: space-between;
    font-family: 'Inter', 'sans-serif';
    border: 1px solid black;
}
.nav-logo img {
    width: 200px;
    height: auto;
}
.nav-logo:hover {
    cursor: pointer;
}
.nav-links {
    display: flex;
    position: absolute;
    gap: 2rem;
    left: 50%;
    transform: translateX(-50%);
}
a {
    font-size: 20px;
    color: #110135;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
}
a:hover {
    cursor: pointer;
    text-decoration: none;
    transform: scale(1.15);
}
.active {
    font-weight: 800;
    text-decoration: underline;
}
</style>