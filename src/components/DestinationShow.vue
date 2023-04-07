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

  <div class="section">
    <div class="line">
      <div class="destination">
    <div class="carousel">
      <img class="img" :src="destination.img" alt="image"/>
      <img class="img" :src="destination.img2" alt="image"/>
      <img class="img" :src="destination.img3" alt="image"/>
    </div>
    <div class="description">
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
      <icon
        :class="{active: destination.isFav}"
        class="iconLike"
        icon="teenyicons:heart-solid"
        @click="destinationsData.toggleFav(destination.id)"
      />
    </div>

    <p class="information">{{ destination.generalInformation }}</p>
    </div>
  </div>
  </div>

</template>

<style scoped lang="scss">

.section {
  padding: 96px 48px;

  .line{
    border-top: solid #102A43;
    color: #102A43;

    .destination{
      padding: 32px 48px;
      display: grid;
      align-items: center;
      justify-items: center;
  .carousel {
    display: flex;
    gap: 64px;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 52vw;
    padding-bottom: 8px;
    transform: rotateX(180deg);
    //&::-webkit-scrollbar-track {
    //  background-color: white;
    //}
    //
    &::-webkit-scrollbar {
      width: 0;
      background-color: white;
    }
    //
    //&::-webkit-scrollbar-thumb {
    //  background-color: #F0F4F8;
    //}

    .img {
      transform: rotateX(180deg);
      width: 100vh;
      height: 50vh;
      object-fit: cover;
    }
  }

  .description {
    display: grid;
    grid-template-columns: 1fr 7fr 1fr;
    width: 52vw;
    align-items: center;
justify-content: center;
    .title {
      margin: 0;
      color: #27AB83;
      padding-top: 8px;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      text-align: center;

    }

    .location {
      padding: 8px 16px 16px 16px;
      display: flex;
      align-items: center;
      gap: 16px;
      border-bottom: solid #D9E2EC;
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
      grid-column: 1;
      grid-row: 1;
      &:hover{
        color: #9FB3C8;
      }

    }

    .iconLike.active {
      color: #2680C2;
    }
  }
}


.information {
  padding-top: 12px;
  text-align: center;
}
}
}



</style>