<template>
    <div class="section-header">
        <div class="line-title">
            <hr />
                <h2>{{ title }}</h2>
            <hr />
        </div>
    <p class="section-subtitle">
        {{ subtitle }}
    </p>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
.section-header {
    text-align: center;
    margin: 2rem 0;
    font-family: 'Inter', 'sans-serif';
}

.line-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
}

.line-title hr {
    flex-grow: 1;
    height: 1px;
    background-color: #ccc;
    border: none;
}

.line-title h2 {
    font-size: 1.8rem;
    white-space: nowrap;
    margin: 0;
    font-weight: 600;
    color: #110135;
}

.section-subtitle {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: #555;
}
</style>