<script setup>
import {Icon} from "@iconify/vue";
import {ref} from "vue";
import {useLikedChart} from "./Likes.js";

const filter = ref('all')
defineProps({
    "guide": {
        type: Object,
        required:true
    }
});
const likedChart = useLikedChart()
</script>
<template>
  <div class="component">
    <img
      class="img"
      :src="guide.img"
    >
    <div class="info">
      <div class="desc">
        <h2 class="title">
          {{ guide.title }}
        </h2>
      </div>
      <div class="location">
        <icon
          class="icon"
          icon="uil:location-point"
        />
        <p class="address">
          {{ guide.address }}
        </p>
      </div>
    </div>
    <div>
      <icon
        :class="{active: guide.isFav}"
        class="icon"
        icon="teenyicons:heart-solid"
        @click="likedChart.toggleFav(guide.id)"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.component {
  width: 25vw;
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  align-items: center;
  column-gap: 16px;
  background-color: white;
  border-bottom: solid #D9E2EC;
    padding-bottom: 12px;
  .img {
    width: 7vw;
    height: 10vh;
    object-fit: cover;
  }

  .desc {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;

    .title {
      color: #486581;
      margin: 0;
      font-weight: 600;
      font-size: 20px;
    }


  }

  .icon {
    height: 20px;
    width: 20px;
    color: #BCCCDC;

  }

  .icon.active {
    color: #2680C2;
  }

  .location {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 16px;
    padding-bottom: 16px;

    .icon {
      color: #27AB83;

    }


    .address {
      margin: 0;
      font-weight: 300;
      font-size: 16px;
      font-style: italic;
      color: #102A43;

    }

  }
}
</style>