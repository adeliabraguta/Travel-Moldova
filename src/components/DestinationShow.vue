<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import {useData} from "./Likes";
import {Icon} from "@iconify/vue";
const destinationsData = useData()
const destinationId = computed(() => parseInt(useRoute().params.id));
const destination = computed(() => destinationsData.destinations.find(destination => destination.id === destinationId.value))
</script>

<template>
<div>
  <div class="section">
    <div class="line">
    </div>
  </div>
  <div class="destination">
    <div class="description">
      <h2 class="desc">DISCOVER NOW</h2>
      <h1 class="title">{{ destination.title }}</h1>
    </div>
      <p class="information">{{ destination.generalInformation }}</p>
    <icon
      :class="{active: destination.isFav}"
      class="iconLike"
      icon="teenyicons:heart-solid"
      @click="destinationsData.toggleFav(destination.id)"
    />
  </div>
  <div class="carousel-section">
    <div class="carousel">
      <img class="img" :src="destination.img" alt="image"/>
      <img class="img" :src="destination.img2" alt="image"/>
      <img class="img" :src="destination.img3" alt="image"/>
    </div>
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
</template>

<style scoped lang="scss">
.section {
  padding: 96px 48px 0 48px;
  .line {
    border-top: solid #102A43;
    color: #102A43;
  }
}
.carousel-section {
  .carousel {
    margin: 0;
    display: flex;
    gap: 48px;
    overflow-x: scroll;
    overflow-y: hidden;
    transform: rotateX(180deg);
    //&::-webkit-scrollbar-track {
    //  background-color: white;
    //}
    &::-webkit-scrollbar {
      width: 0;
      background-color: white;
    }
    //&::-webkit-scrollbar-thumb {
    //  background-color: #F0F4F8;
    //}
    .img {
      transform: rotateX(180deg);
      height: 40vh;
      width: 500px;
      object-fit: cover;
    }
  }
}
.destination {
  display: grid;
  grid-template-columns: 1fr;
  padding: 48px 96px 24px 96px;
  align-items: center;
  justify-items: center;
  .description {
    padding: 0 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .desc{
      margin: 0;
      color: #079A82;
      letter-spacing: 1.5px;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
    }
    .title {
      margin: 0;
      color: #102A43;
      padding-top: 8px;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      text-align: center;
      font-size: 24px;
    }
  }
}
.information {
  color: #102A43;
  line-height: 1.3;
  margin-top: 32px;
  //border-right: solid #D9E2EC;
  //border-left: solid #D9E2EC;
  padding:0 48px 32px 48px;
  text-align: center;
}
.location {
  padding: 32px 16px 96px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0;
  grid-column: 2;
  grid-row: 2;
  justify-content: center;
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
.iconLike {
  height: 24px;
  width: 24px;
  color: #BCCCDC;
  cursor: pointer;
  &:hover {
    color: #9FB3C8;
  }
}
.iconLike.active {
  color: #2680C2;
}
</style>