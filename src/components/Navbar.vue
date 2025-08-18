<template>
    <div class="container">
        <div class="nav">
            <div class="nav-items">

                <router-link to="/" class="logo">
                    <img src="../assets/logo-test.png" alt="Premium Electronics">
                </router-link>

                <div class="hamburger" v-if="isMobile" @click="toggleHamburger">
                    <img src="../assets/burger.svg" alt="">
                </div>

                <div class="router-items" v-else>
                    <router-link v-for="(route, index) in routes" :key="index" :to="route.path">
                        {{ route.name }}
                    </router-link>
                </div>


                <!-- <div class="socials">
                    <a href="https://www.instagram.com/premium_electronics_ca" target="_blank"
                        rel="noopener noreferrer">
                        <img src="@/assets/instagram.svg" alt="Instagram">
                    </a>
                    <a href="https://www.facebook.com/electronics.liquidation" target="_blank"
                        rel="noopener noreferrer">
                        <img src="@/assets/facebook.svg" alt="Facebook">
                    </a>
                </div> -->

            </div>
        </div>
    </div>
    <Hamburger :show="showHamburger" @closeNav="showHamburger = false" />
</template>

<script setup>
import { useScreen } from '@/composables/useScreen';
import { ref, watch } from 'vue';
import Hamburger from './Hamburger.vue';

const { width, isMobile } = useScreen(1001)
const showHamburger = ref(false)

const toggleHamburger = () => {
    showHamburger.value = !showHamburger.value
}

watch(isMobile, (mobile) => {
    if (!mobile) {
        showHamburger.value = false;
    }
});

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
    background: linear-gradient(135deg, #032C50 0%, #1a4a7a 100%);
}

.nav {
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    max-width: 1440px;
    min-width: 320px;
    font-family: 'Montserrat', 'sans-serif';
}

.nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    flex-basis: 100%;
}

.hamburger {
    display: flex;
    position: relative;
    left: 50;
    transform: translateX(50);
    align-items: center;
    cursor: pointer;
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
    justify-content: flex-end;
    flex-basis: 100%;
    height: 90px;
    gap: 2rem;
}

a {
    position: relative;
    color: white;
    font-size: 20px;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
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
    .router-items {
        display: flex;
        position: relative;
    }

}

@media screen and (max-width: 520px) {
    /* .socials {
        display: none;
    } */
}
</style>
