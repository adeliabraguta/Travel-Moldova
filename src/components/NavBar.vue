<script setup>
import {computed, defineComponent, ref} from "vue";
import {Icon} from "@iconify/vue";
import {useLikedChart} from "./Likes.js";
import LikedChart from "./LikedChart.vue";

const likedChart = useLikedChart()
const isActive = computed(() => {
     likedChart.active
})

</script>
<template>
    <div class="nav">
        <div class="nav-bar">
            <h1 class="title">Travel</h1>
            <div class="fav">
                <p class="number">{{ likedChart.favCount }}</p>
                <icon :class="{active: isActive}" @click=" likedChart.toggleActive(), favs = !favs" class="icon" icon="teenyicons:heart-solid" />

            </div>

        </div>
        <div class="list" v-if="favs">
            <div class="item" v-for="guide in likedChart.favs" >

                <liked-chart :guide="guide"/>
            </div>
        </div>
        <div v-else></div>
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
      font-size: 36px;
      margin: 0;
      color: #102A43;
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
          &:hover{
              transform: scale(1.2);
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