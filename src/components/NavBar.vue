<script setup>
import {computed} from "vue";
import {Icon} from "@iconify/vue";
import {useData} from "./Likes.js";
import LikedChart from "./LikedChart.vue";
const destinationsData = useData()
const isActive = computed(() => {
    return destinationsData.active
})
</script>

<template>
  <div class="nav">
    <div class="nav-bar">
      <router-link
        to="/"
        class="title"
      >
        <img class="img" src="../assets/moldova4.png">
        <h1 class="den">TRAVEL MOLDOVA</h1>
      </router-link>
      <div class="right">
      <div class="links">
      <router-link class="link" :to="{ path: '/', hash: '#destinations' }">
        <h2 class="title">DESTINATIONS</h2>
      </router-link>
      <router-link class="link" to="/">
        <h2 class="title">STORIES</h2>
      </router-link>
      </div>
      <div class="fav">
        <p class="number">
          {{ destinationsData.favCount }}
        </p>
        <icon
          :class="{active: isActive}"
          class="icon"
          icon="teenyicons:heart-solid"
          @click=" destinationsData.toggleActive(), favs = !favs"
        />
      </div>
      </div>
    </div>
    <div
      v-if="favs"
      class="list"
    >
      <div
        v-for="(destination, index) in destinationsData.favs"
        :key="index"
        class="item"
      >
        <liked-chart :destination="destination"/>
      </div>
    </div>
    <div v-else/>
    <div class="stories">
      <router-link to="/TravelStories"/>
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
  opacity: 90%;
  //border-bottom: solid white;
  .nav-bar {
    //border-bottom: solid #102A43;
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
      &:hover,
      &:active {
        transform: scale(1.01);
      }
    }
    .img {
      height: 36px;
      width: 36px;
    }
    .den {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 1.1px;
    }
    .right{
      display: flex;
      gap: 128px;
      .links{
        display: flex;
        gap: 64px;
        align-items: center;
        .link{
          text-decoration: none;
          .title{
            letter-spacing: 1.1px;
            font-size: 20px;
            font-weight: 600;
          }
        }
      }
      .fav {
        display: flex;
        align-items: center;
        gap: 12px;
        .number {
          color: #4098D7;
          font-size: 24px;
        }
        .icon {
          width: 24px;
          height: 24px;
          color: #4098D7;
          cursor: pointer;
          &:hover,
          &:active {
            transform: scale(1.2);
            color: #0A558C;
          }
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
  }
}
</style>