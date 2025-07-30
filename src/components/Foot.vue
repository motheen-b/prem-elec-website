<!-- <span v-for="(link, index) in footerLinks" :key="index">
    <router-link :to="link.path">{{ link.name }}</router-link>
    <span v-if="index < footerLinks.length - 1"> • </span>
</span> -->

<!-- <div v-for="(group, index) in footerLinks" :key="index">
    <router-link v-for="(path, name) in group" :key="name" :to="path">
        {{ group.name }} •
    </router-link>
</div> -->
<template>
    <div class="footer-container">

        <div class="links" v-for="(link, index) in footerLinks" :key="index">
            <router-link :to="link.path">{{ link.name }}</router-link>
            <span v-if="index < footerLinks.length - 1">•</span>
        </div>

        <!-- <div class="contact-details" v-for="detail in contactDetails" :key="detail">
            <div class="details">
                {{ detail }}
            </div>
        </div> -->

    </div>
</template>

<script setup>

const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'Contact', path: '/contact-us' },
];

const contactDetails = [
    "(647) 901 7565",
    "contact@premiumelectronics.ca"
]

</script>

<style scoped>
.footer-container {
    display: flex;
    /* height: 400px; */
    padding: 1rem;
    justify-content: center;
    align-items: start;
    background-color: #032C50;
    border: 1px solid red;
    gap: 1rem;
}

.links {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
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

.contact-container {
    display: flex;
}

</style>