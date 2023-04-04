<script setup>
import {Icon} from "@iconify/vue";
import {computed, ref} from "vue";
import {useLikedChart} from "./Likes.js";
import LikedChart from "./LikedChart.vue";

defineProps({
    "guide": {
        type: Object,
        required: true
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

    <div class="desc">
      <h2 class="title">
        {{ guide.title }}
      </h2>
      <icon
        :class="{active: guide.isFav}"
        class="icon"
        icon="teenyicons:heart-solid"
        @click="likedChart.toggleFav(guide.id)"
      />
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
</template>
<style scoped lang="scss">
.component {
  width: 25vw;
  display: flex;
  flex-direction: column;
  gap: 12px;


  .img {
    width: 25vw;
    height: 30vh;
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
      font-size: 24px;
    }

    .icon {
      height: 24px;
      width: 24px;
      color: #BCCCDC;

    }

    .icon.active {
      color: #2680C2;
    }
  }


  .location {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 16px;
    border-bottom: solid #D9E2EC;
    padding-bottom: 16px;

    .icon {
      color: #27AB83;

    }


    .address {
      margin: 0;
      font-weight: 300;
      font-style: italic;
      color: #102A43;

    }

  }

}

</style>