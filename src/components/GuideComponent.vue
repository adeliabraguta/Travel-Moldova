<script setup>
import {Icon} from "@iconify/vue";
import {computed, ref} from "vue";
import {useData} from "./Likes.js";
import LikedChart from "./LikedChart.vue";

defineProps({
    "destination": {
        type: Object,
        required: true
    }
});
const destinationsData = useData()

</script>
<template>
  <div>
  <div class="component">
    <router-link class="route" :to="{name:'destination.show', params:{id: destination.id, slug:destination.slug}}" :key="destination.id">
    <img
      class="img"
      :src="destination.img"
    >
      <div class="see">
        <p>See More</p>
        <icon icon="teenyicons:arrow-right-solid"></icon>
      </div>
    </router-link>


    <div class="desc">
      <router-link class="route" :to="{name:'destination.show', params:{id: destination.id, slug:destination.slug}}" :key="destination.id">
        <h2 class="title">
          {{ destination.title }}
        </h2>
      </router-link>

      <icon
        :class="{active: destination.isFav}"
        class="icon"
        icon="teenyicons:heart-solid"
        @click="destinationsData.toggleFav(destination.id)"
      />
    </div>
    <div class="location">
      <icon
        class="icon"
        icon="uil:location-point"
      />
      <p class="address">
        {{ destination.address }}
      </p>

    </div>
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
    position: relative;
    //&:hover{
    //  opacity: 80%;
    //}
  }
  .see{
    width: 25vw;
    height: 31vh;
    position: absolute;
    opacity: 0;
    background-color: white;
    transform: translate(0%, -100%);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 12px;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    transition: 0.5s;

    &:hover{
      opacity: 80%;
      color: #0A558C;

    }
  }

  .desc {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;

    .route {
      text-decoration: none;

    }

    .title {
      color: #486581;
      margin: 0;
      font-weight: 600;
      font-size: 24px;
      &:active,
      &:hover{
        color: #243B53;
      }
    }

    .icon {
      height: 24px;
      width: 24px;
      color: #BCCCDC;
      cursor: pointer;
      &:hover{
        color: #9FB3C8;
      }
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
      font-size: 16px;

    }

  }

}

</style>