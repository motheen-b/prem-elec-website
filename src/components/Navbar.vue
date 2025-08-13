<template>
    <div class="container">
        <div class="nav">
            <div class="nav-items">

                <div class="hamburger" v-if="isMobile" @click="toggleHamburger">
                    <img src="../assets/burger.svg" alt="">
                </div>

                <div class="logo">
                    <img src="../assets/logo-test.png" alt="">
                </div>

                <div class="router-items" v-if="!isMobile">
                    <router-link v-for="(route, index) in routes" :key="index" :to="route.path">
                        {{ route.name }}
                    </router-link>
                </div>

                <div class="router-items" v-else>
                </div>

                <div class="socials">
                    <a href="https://www.instagram.com/premium_electronics_ca" target="_blank"
                        rel="noopener noreferrer">
                        <img src="@/assets/instagram.svg" alt="Instagram">
                    </a>
                    <a href="https://www.facebook.com/electronics.liquidation" target="_blank"
                        rel="noopener noreferrer">
                        <img src="@/assets/facebook.svg" alt="Facebook">
                    </a>
                </div>

            </div>
        </div>
    </div>
    <Hamburger :show="showHamburger" @closeNav="showHamburger = false"/>
</template>

<script setup>
import { useScreen } from '@/composables/useScreen';
import { ref } from 'vue';
import Hamburger from './Hamburger.vue';

const { width, isMobile } = useScreen(1001)
const showHamburger = ref(false)

const toggleHamburger = () => {
    showHamburger.value = !showHamburger.value
}

// const openHamburger = () => {
//     showHamburger.value = true
// }

// const closeHamburger = () => {
//     showHamburger.value = false
// }

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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.container {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 1000;
    justify-content: center;
    width: 100%;
    height: 90px;
    background-color: #032C50;
}

.nav {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    min-width: 320px;
    font-family: 'Montserrat', 'sans-serif';
}

.nav-items {
    display: flex;
    padding: 0 25px;
    flex-basis: 100%;
}

.hamburger {
    display: flex;
    flex-basis: 100%;
    position: fixed;
    height: 90px;
    transition: transform 0.3s ease-in-out;
}

.hamburger:hover {
    cursor: pointer;
    transform: scale(1.15);
}

.hamburger img {
    width: 50px;
    height: auto;
}

.router-items {
    display: flex;
    align-items: center;
    flex-basis: 100%;
    position: fixed;
    height: 90px;
    left: 50%;
    transform: translateX(-50%);
    gap: 2rem;
}

a {
    position: relative;
    color: white;
    font-size: 20px;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
}

a::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s cubic-bezier(.25, .8, .25, 1), left 0.3s cubic-bezier(.25, .8, .25, 1);
}

.router-items a:hover::after,
.router-items a.router-link-active::after {
    width: 100%;
    left: 0;
}

.logo {
    display: flex;
    align-items: center;
    color: white;
    flex-basis: 100%;
}

.logo img {
    height: 50px;
}

.socials {
    display: flex;
    position: relative;
    align-items: center;
    top: 5px;
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

@media screen and (max-width: 1001px) {
    .logo {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        align-self: center;
    }

    .router-items {
        display: flex;
        position: relative;
        /* display: flex;
        position: relative;
        color: white;
        left: 0;
        justify-content: flex-start;
        border: 2px solid red; */
    }

}

</style>
