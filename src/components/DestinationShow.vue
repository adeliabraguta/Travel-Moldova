<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import {useLikedChart} from "./Likes";
import {Icon} from "@iconify/vue";

const likedChart = useLikedChart()
const destinationId = computed(() => parseInt(useRoute().params.id));
const destination = computed(() => likedChart.likes.find(destination => destination.id === destinationId.value))
</script>

<template>
  <div class="destination">
    <div class="carousel">
    <img class="img" :src="destination.img" alt="image"/>
    <img class="img" :src="destination.img2" alt="image"/>
    <img class="img" :src="destination.img3" alt="image"/>
    </div>
    <h1 class="title">{{ destination.title }}</h1>
    <div class="location">
      <icon
        class="icon"
        icon="uil:location-point"
      />
      <p class="address">
        {{ destination.address }}
      </p>
    </div>
    <p class="information">{{ destination.generalInformation }}</p>

  </div>
</template>

<style scoped lang="scss">
.destination {
  padding: 128px 96px;
  color: #102A43;
  display: grid;
  align-items: center;
  justify-items: center;
  .carousel{
    display: flex;
    gap: 64px ;
    overflow-x: scroll;
    overflow-y:  hidden;
    width: 100vh;
    padding-bottom: 8px;
    transform: rotateX(180deg);
    &::-webkit-scrollbar-track
    {
      border-radius: 10px;
      background-color: white;
    }

    &::-webkit-scrollbar
    {
      width: 0;
      background-color: white;
    }

    &::-webkit-scrollbar-thumb
    {

      background-color: #F0F4F8;
    }

    .img {
      transform: rotateX(180deg);

      width: 100vh;
      height: 50vh;
      object-fit: cover;
    }
  }
  .title {
    margin: 0;
    color: #27AB83;
    padding-top: 8px;
    text-transform: uppercase;
    letter-spacing: 1.2px;

  }

  .location {
    padding: 8px 16px 16px 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-bottom: solid #D9E2EC;
    margin: 0;

    .icon {
      color: #2680C2;

    }

    .address {
      margin: 0;
      font-weight: 400;
      font-size: 16px;
      font-style: italic;
    }
  }

  .information {
    padding-top: 12px;
    text-align: center;
  }


}
</style>