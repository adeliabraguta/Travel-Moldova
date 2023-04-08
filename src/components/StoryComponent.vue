<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import StoryData from "../data.json";
import Carousel from "./CarouselComponent.vue";
import Slide from "./SlideComponent.vue";

const storyId = computed(() => parseInt(useRoute().params.id));
const story = computed(() => StoryData.stories.find(story => story.id === storyId.value))
</script>

<template>
  <div>
    <div class="section">
      <div class="line">
      </div>
      <div class="story">
        <h2 class="desc">STORY TIME</h2>
        <h1 class="title">{{ story.title }}</h1>
        <p class="question">{{ story.desc }}</p>
        <div class="post-info">
          <h2 class="author">BY {{story.author}}</h2>
          <p class="date">{{story.date}}</p>
        </div>
      </div>
      <div class="carousel-div">
      <Carousel
        v-slot="{currentSlide}"
        class="carousel"
      >
        <Slide
          v-for="(slide, index) in story.images"
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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  padding-top: 96px;
  .carousel-div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .carousel {
    position: relative;
    height: 50vh;
    width: 70vw;
    margin-bottom: 96px;
    .slide-info {
      position: absolute;
      left: 0;
      width: 100%;
      height: 50vh;
      img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
      }
    }
  }
  .line {
    margin: 0 48px 48px 48px;
    border-top: solid #102A43;
  }
  .story {
    top: 65%;
    right: 96px;
    padding:0 96px 48px 96px;
    display: grid;
    justify-content: center;
    .desc {
      margin: 0;
      color: #079A82;
      letter-spacing: 1.5px;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
    }
    .title {
      padding-top: 12px;
      color: #102A43;
      margin: 0;
      text-align: center;
      font-size: 24px;
    }
    .question {
      color: #102A43;
      line-height: 1.3;
      padding-top: 32px;
      text-align: center;
    }
    .post-info{
      display: flex;
      gap: 24px;
      align-items: center;
      color: #003E6B;
      justify-content: center;
      .author{
        margin: 0;
        letter-spacing: 1.2px;
        font-size: 16px;
        font-weight: 600;
      }
      .date{
        margin: 0;
        letter-spacing: 1.2px;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}
</style>