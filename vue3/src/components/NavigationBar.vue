<template>
    <div class="nav">
        <router-link v-for="({ path, name }, key) in routes" :to="path" :key="key">{{ name }}</router-link>
    </div>
</template>
<script setup>
import { routes } from '../router/index'
</script>
<style scoped>
.nav {
    width: 100%;
    margin: 0 0 30px 0;
    display: flex;
    justify-content: space-around;
}
</style>