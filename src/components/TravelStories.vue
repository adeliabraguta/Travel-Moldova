<script setup>
import {useData} from "./Likes.js";
import { useRoute } from 'vue-router'

defineProps({
    "story": {
        type: Object,
        required: true
    }
});
// const route = useRoute();
</script>

<template>
  <div>
    <div class="story">
      <img class="img" :src="`/storyImages/${story.img}`"/>
      <div class="info">
        <router-link class="link" :to="{name:'story.show' , params: {id: story.id, slug: story.slug}}" :key="story.id">
          <h1 class="title">{{story.title}} </h1>
        </router-link>
        <p class="description">{{story.description}}</p>
        <div class="post-info">
          <h2 class="author">BY {{story.author}}</h2>
          <p class="date">{{story.date}}</p>
        </div>

      </div>

    </div>

  </div>
</template>



<style scoped lang="scss">
.story{
  height: 30vh;
  width: 50vw;
  position: relative;
  color: #102A43;
  .img{
    height: 30vh;
    width: 50vw;
    object-fit: cover;
    opacity: 40%;
  }
  .info{
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    display: grid;
    gap: 24px;
    justify-content: center;
    padding: 32px;
    .link{
      text-decoration: none;
    }
    .title{
      font-size: 24px;
      margin: 0;
      font-weight: 700;
      color: #243B53;
      border-top: solid transparent;
      border-bottom: solid transparent;
      display: inline-block;
      padding: 0 12px 0 0;
      &:hover{
        border-top: solid #2DCCA7;
        border-bottom: solid #2DCCA7;
      }
    }
    .description{
      margin: 0;
      font-size: 16px;
    }
    .post-info{
      display: flex;
      gap: 24px;
      align-items: center;
      color: #003E6B;
      .author{
        margin: 0;
        letter-spacing: 1.2px;
        font-size: 18px;
        font-weight: 600;
      }
      .date{
        margin: 0;
        letter-spacing: 1.2px;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }


}
</style>