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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

.overlay {
    position: fixed;
    z-index: 10000;
    top: 90px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
}

.container {
    position: fixed;
    top: 90;
    right: 0;
    z-index: 10000;
    width: 250px;
    height: 100%;
    background: linear-gradient(135deg, #032C50 0%, #1a4a7a 100%);
    transform: translateX(100%);
    animation: slideIn 0.6s forwards;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.links {
    display: flex;
    padding: 1rem;
    text-align: center;
    flex-direction: column;
    line-height: 4;
    font-family: 'Inter', sans-serif;
}

a {
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
}

a:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-4px);
}

hr {
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    margin: 0.5rem 0;
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