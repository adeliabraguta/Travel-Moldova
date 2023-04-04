<script setup>
import NavBar from './components/NavBar.vue'
import HomePage from './components/HomePage.vue'
</script>

<template>
  <NavBar />
  <router-view v-slot="{Component}">
    <component :is="Component" />
  </router-view>
</template>

<style scoped>

</style>
