<script setup>
import {computed, defineComponent, ref} from "vue";
import {Icon} from "@iconify/vue";
import {useLikedChart} from "./Likes.js";
import LikedChart from "./LikedChart.vue";
import TravelStories from "./TravelStories.vue";

const likedChart = useLikedChart()
const isActive = computed(() => {
    return likedChart.active

})

</script>
<template>
  <div class="nav">
    <div class="nav-bar">
      <router-link
        to="/"
        class="title"
      >
        <img class="img" src="../assets/moldova1.png">
        <h1 class="den">Travel Moldova</h1>
      </router-link>


      <div class="fav">
        <p class="number">
          {{ likedChart.favCount }}
        </p>
        <icon
          :class="{active: isActive}"
          class="icon"
          icon="teenyicons:heart-solid"
          @click=" likedChart.toggleActive(), favs = !favs"
        />
      </div>
    </div>
    <div
      v-if="favs"
      class="list"
    >
      <div
        v-for="(guide, index) in likedChart.favs"
        :key="index"
        class="item"
      >
        <liked-chart :guide="guide" />
      </div>
    </div>
    <div v-else />
    <div class="stories">
      <router-link to="/TravelStories" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.nav {
  height: 96px;
  width: 100%;
  position: fixed;
  z-index: 1;
  background-color: white;
  border-bottom: solid white;

  .nav-bar {
    border-bottom: solid #102A43;
    margin: 0 48px;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
      padding: 0 24px;

    .title {
      margin: 0;
      color: #102A43;
        text-decoration: none;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .img{
      height: 48px;
      width: 48px;
    }
    .den{
      font-size: 36px;
      font-weight: 700;

    }

    .fav {
      display: flex;
      align-items: center;
      gap: 12px;

      .number {
          color: #27AB83;
          font-size: 24px;

      }

      .icon {
        width: 24px;
        height: 24px;
        color: #27AB83;
          cursor: pointer;
          &:hover,
          &:active{
              transform: scale(1.2);
              color: #014D40;
          }
      }

    }
  }

  .list {
    position: absolute;
    right: 48px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px;
    background-color: white;
    width: 25vw;
    box-shadow: 0 10px 30px -10px rgba(33, 35, 38, 0.1), -10px 0px 30px -10px rgba(33, 35, 38, 0.1), 10px 0px 30px -10px rgba(33, 35, 38, 0.1);

    .item {

    }
  }

}
</style>