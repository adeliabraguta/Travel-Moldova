<template>
  <div class="stories">
ssfs
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

}
</style>