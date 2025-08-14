<template>
    <transition name="slide">
        <div class="overlay" v-if="show" @click="closeNav">
            <div class="container">
                <div class="links">
                    <router-link v-for="(route, index) in routes" :key="index" :to="route.path" @click="closeNav">
                        {{ route.name }}
                        <hr v-if="index < routes.length - 1" />
                    </router-link>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
const emit = defineEmits(['closeNav'])
defineProps(({
    show: Boolean
}))


const closeNav = () => {
    emit('closeNav')
}

const routes = [
    { name: 'Home', path: '/' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'F.A.Q.', path: '/faq' },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');

.overlay {
    position: fixed;
    z-index: 10000;
    top: 90px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
}

.container {
    position: fixed;
    top: 90;
    right: 0;
    z-index: 10000;
    width: 250px;
    height: 100%;
    background-color: #032C50;
    transform: translateX(-100%);
    animation: slideIn 0.6s forwards;
}

.links {
    display: flex;
    padding: 1rem;
    text-align: center;
    flex-direction: column;
    line-height: 4;
    font-family: 'Montserrat', 'sans-serif';
}

a {
    color: white;
    font-size: 20px;
    text-decoration: none;
}

a:hover {
    cursor: pointer;
}

.line-title hr {
    flex-grow: 1;
    height: 1px;
    background-color: #ffffff;
    border: none;
}

.slide-enter-active {
    animation: slideIn 0.6s forwards;
}

.slide-leave-active {
    animation: slideOut 0.6s forwards;
}

@keyframes slideIn {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes slideOut {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(100%);
    }
}
</style>