<template>
    <div class="container">
        <div class="nav">
            <div class="nav-items">
                <div class="logo">
                    Premium Electronics
                </div>
                <div class="router-items">
                    <router-link v-for="(route, index) in routes" :key="index" :to="route.path">
                        {{ route.name }}
                    </router-link>
                </div>
                <div class="socials">
            <img src="@/assets/instagram.svg" alt="">
            <img src="@/assets/facebook.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const routes = [
    { name: 'Home', path: '/' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'F.A.Q.', path: '/faq' },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.container {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 1000;
    justify-content: center;
    width: 100%;
    height: 70px;
    background-color: #032C50;
}

.nav {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    min-width: 320px;
    font-family: 'Inter', 'sans-serif';
}

.nav-items {
    display: flex;
    padding: 0 25px;
    flex-basis: 100%;
}

.router-items {
    display: flex;
    align-items: center;
    flex-basis: 100%;
    position: fixed;
    height: 70px;
    left: 50%;
    transform: translateX(-50%);
    gap: 2rem;
}

a {
    color: white;
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
}

a:hover {
    text-decoration: underline;
    transform: scale(1.15);
}

.logo {
    display: flex;
    align-items: center;
    color: white;
    flex-basis: 100%;

}

.socials {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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

</style>



<!-- <template>
    <div class="nav">
        <div class="nav-logo">
            
        </div>

        <div class="nav-links">
            <router-link to="/" active-class="active">Home</router-link>
            <router-link to="/inventory" active-class="active">Inventory</router-link>
            <router-link to="/about" active-class="active">About</router-link>
            <router-link to="/contact" active-class="active">Contact</router-link>
            <router-link to="/faq" active-class="active">F.A.Q.</router-link>
        </div>

        <div class="phone">
            +1 (647) 901-7565
        </div>

        <div class="socials">
            <img src="@/assets/instagram.svg" alt="">
            <img src="@/assets/facebook.svg" alt="">
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
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-family: 'Inter', 'sans-serif';
    background-color: #032C50;
}

.nav-logo img {
    padding: 25px;
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
    color: white;
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

.socials {
    display: flex;
    padding: 25px;
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

.phone {
    display: flex;
    left: 80%;
    color: white;
    border: 1px solid red;
}

</style> -->