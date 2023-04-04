<template>
  <div class="stories">
<!--{{likedChart.likes.id}}-->
<!--    {{ $route.params.id }}-->
  </div>
</template>

<script setup>
import {useLikedChart} from "./Likes.js";
import { useRoute } from 'vue-router'

defineProps({
    "guide": {
        type: Object,
        required: true
    }
});
// const route = useRoute();
const likedChart = useLikedChart()
</script>

<style scoped>
.stories{
    padding: 500px;
}
</style>