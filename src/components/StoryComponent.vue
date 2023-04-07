<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import StoryData from "../data.json";


const storyId = computed(() => parseInt(useRoute().params.id));
const story = computed(() => StoryData.stories.find(story => story.id === storyId.value))

</script>
<template>
  <div>
    <div class="section">
      <div class="line">
        <div class="story">
          <h1 class="title">{{ story.title }}</h1>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped lang="scss">
.section {
  padding-top: 96px;

  .line {
    margin: 0 48px;
    border-top: solid #102A43;

    .story {
      .title {
        padding: 32px 48px;
      }
    }

  }

}
</style>