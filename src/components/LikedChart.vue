<script setup>
import {Icon} from "@iconify/vue";
import {ref} from "vue";
import {useData} from "./Likes.js";

const filter = ref('all')
defineProps({
    "destination": {
        type: Object,
        required:true
    }
});
const destinationsData = useData();
</script>
<template>
  <div class="component">
    <router-link class="route" :to="{name:'destination.show', params:{id: destination.id, slug:destination.slug}}" :key="destination.id">
    <img
      class="img"
      :src="destination.img"
    >
    </router-link>
    <div class="info">
      <div class="desc">
        <router-link class="route" :to="{name:'destination.show', params:{id: destination.id, slug:destination.slug}}" :key="destination.id">

        <h2 class="title">
          {{ destination.title }}
        </h2>
        </router-link>
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
    <div>
      <icon
        :class="{active: destination.isFav}"
        class="icon"
        icon="teenyicons:heart-solid"
        @click="destinationsData.toggleFav(destination.id)"
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
      &:active,
      &:hover{
        color: #243B53;
      }
    }


  }

  .icon {
    height: 20px;
    width: 20px;
    color: #BCCCDC;
    cursor: pointer;

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
  .route{
    text-decoration: none;
  }
}
</style>