<template>
    <div class="container">
        <div class="content">

            <div class="links">
                <router-link v-for="(group, index) in routerPaths" :to="group.path" :key="index">
                    {{ group.name }}
                    <span v-if="index < routerPaths.length - 1"> • </span>
                </router-link>
            </div>

            <div class="contact-details">
                <div class="detail" v-for="(info, index) in contactDetails" :key="index">
                    {{ info }}
                    <span v-if="index < contactDetails.length - 1"> | </span>
                </div>
            </div>

            <div class="trademark">
                © 2025 Premium Electronics. All rights reserved.
            </div>

        </div>
    </div>
</template>

<script setup>
const routerPaths = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'Contact', path: '/contact-us' },
];
const contactDetails = [
    "(647) 901 7565",
    "Contact@premiumelectronics.ca",
    "724 Caledonia Rd, North York, ON, M6B 3X7"
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.container {
    display: flex;
    bottom: 0;
    position: relative;
    width: 100%;
    height: 100px;
    background-color: #032C50;
    font-family: 'Inter', 'sans-serif';
}

.content {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    /* gap: 0.5rem; */
    flex-direction: column;
    /* border: 2px solid white; */
}

.links {
    display: flex;
    justify-content: center;
    /* border: 1px solid red; */
    padding: 5px;
    gap: 1rem;
}

a {
    color: white;
    text-decoration: none;
}

a:hover {
    cursor: pointer;
    text-decoration: underline;
}

.contact-details {
    display: flex;
    gap: 1rem;
    padding: 5px;
    justify-content: center;
    /* border: 2px solid pink; */
}

.detail {
    cursor: pointer;
    color: white;
}

.trademark {
    display: flex;
    padding: 5px;
    color: white;
    justify-content: center;
}
</style>