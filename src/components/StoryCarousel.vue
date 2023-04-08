<script setup>
import Carousel from "./CarouselComponent.vue";
import Slide from "./SlideComponent.vue";

defineProps({
    "images": {
        type: Object,
        required: true
    }
});
</script>

<template>
  <Carousel
    v-slot="{currentSlide}"
    class="carousel"
  >
    <Slide
      v-for="(slide, index) in images"
      :key="index"
    >
      <div
        v-show="currentSlide === index + 1"
        class="slide-info"
      >
        <img :src="`/storyImages/${slide.img1}`">
      </div>
    </Slide>
  </Carousel>
</template>


