<script setup>
import {useCycleList} from "@vueuse/core";
import {Icon} from "@iconify/vue";
import GuideComponent from "./GuideComponent.vue";
import {useLikedChart} from "./Likes.js";
import {ref} from "vue";
import TravelStories from "./TravelStories.vue";
import Carousel from './CarouselComponent.vue'
import Slide from './SlideComponent.vue'
import sourceData from '../data.json'
// const {state, next, prev} = useCycleList([
//     carousel1,
//     carousel2,
//     carousel3
// ])
const likedChart = useLikedChart()
const destinations = sourceData.destinations

</script>

<template>
  <div class="home">
    <div class="title">
      <p class="desc">
        TRAVEL FOR GOOD
      </p>
      <h1 class="banner">
        Moldova is Out There
      </h1>
    </div>
    <Carousel
      v-slot="{currentSlide}"
      class="carousel"
    >
      <Slide
        v-for="(slide, index) in likedChart.carousel"
        :key="index"
      >
        <div
          v-show="currentSlide === index + 1"
          class="slide-info"
        >
          <img :src="slide.img">
        </div>
      </Slide>
    </Carousel>


    <!--        <div class="carouselslide" @click="next()">-->
    <!--            <transition>-->
    <!--                <img class="imgs" :src="state" alt="photo" :key="state"/>-->
    <!--            </transition>-->
    <!--            <div class="buttons">-->
    <!--                <div class="btn " @click="prev()">-->
    <!--                    <icon class="btn-icon" icon="uil:angle-left-b"/>-->
    <!--                </div>-->
    <!--                <div class="btn " @click="next()">-->
    <!--                    <icon class="btn-icon" icon="uil:angle-right-b"/>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <div class="destination">
      <p class="desc">
        POPULAR DESTINATIONS
      </p>
      <ul class="destinations">
        <li class="element">
          Tipova Monastery
        </li>
        <li class="element">
          Saharna
        </li>
        <li class="element">
          Capriana Monastery
        </li>
        <li class="element">
          Soroca Fortress
        </li>
        <li class="element">
          Old Orhei
        </li>
        <li class="element">
          Purcari Winery
        </li>
      </ul>
    </div>
    <div class="travel">
      <div class="guide">
        <h1 class="title">
          Travel Guides
        </h1>
      </div>
      <div class="guides">
        <h2 class="title">
          FEATURED TRAVEL GUIDES
        </h2>
        <div class="list">
          <div
            v-for="(guide,index) in likedChart.likes"
            :key="index"
            class="item"
          >
            <!--          <router-link class="guidee" v-for="guide in likedChart.likes" :key="guide.id" :to="guide.slug">-->
            <guide-component :guide="guide"/>

            <!--          </router-link>-->

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="guide">
    <h1 class="title">
      Travel Stories
    </h1>
  </div>
<!--  <div class="stories">-->
<!--    <router-link v-for="destination in destinations" :key="destination.id" :to="destination.slug">-->
<!--<h2>{{destination.name}}</h2>-->
<!--      <img :src="`/images/${destination.image}`"/>-->
<!--    </router-link>-->

<!--  </div>-->

</template>

<style scoped lang="scss">
.home {
  padding-top: 128px;
}

.title {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-bottom: 24px;

  .desc {
    margin: 0;
    color: #186FAF;
    letter-spacing: 1.5px;
    font-size: 14px;
    font-weight: 600;
  }

  .banner {
    margin: 0;
    color: #014D40;
    font-weight: 600;
  }
}

.carousel {
  position: relative;
  height: 65vh;

  .slide-info {
    position: absolute;

    left: 0;
    width: 100%;
    height: 65vh;

    img {
      width: 100%;
      height: 65vh;
      object-fit: cover;
    }
  }
}


.carouselslide {
  position: relative;
  height: 65vh;
  cursor: pointer;
  padding-bottom: 48px;


  .imgs {
    height: 65vh;
    width: 100%;
    object-fit: cover;
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .buttons {
    .btn {
      position: absolute;
      transition: transform .2s;

      &:hover {
        transform: scale(1.5);
      }

      &:nth-of-type(1) {
        top: 32vh;
      }

      &:nth-of-type(2) {
        top: 32vh;
        right: 0;
      }
    }

    .btn-icon {
      color: white;
      height: 40px;
      width: 40px;
    }
  }
}

.destination {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
  //box-shadow: rgba(33, 35, 38, 0.2) 0 10px 10px -10px;

  .desc {
    margin: 0;
    color: #186FAF;
    letter-spacing: 1.5px;
    font-size: 14px;
    font-weight: 600;
    padding: 0 96px;

  }

  .destinations {
    list-style: none;
    display: flex;
    gap: 12px;

    .element {
      border-right: solid #BCCCDC;
      margin: 0;
      padding-right: 12px;
      color: #627D98;

      &:last-of-type {
        border: none;
      }
    }
  }
}

.travel {
  padding-bottom: 48px;


  .guide {
    box-shadow: inset 0 10px 10px -10px rgba(33, 35, 38, 0.05),
    inset 0 -10px 10px -10px rgba(33, 35, 38, 0.05);
    background-color: #F0F4F8;
    margin-bottom: 96px;

    .title {
      margin: 0;
      padding: 64px 0;
      color: #014D40;
      font-weight: 600;


    }
  }

  .guides {
    padding: 0 96px;

    .title {
      display: flex;
      align-items: flex-start;
      margin: 0;
      padding: 0 0 48px 0;
      color: #102A43;
    }

    .list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 64px;
      padding-bottom: 96px;
      //position: relative;
      //height: 30vh;
      //overflow-x: auto;
      //overflow-y: hidden;


    }
  }
}

.guide {
  box-shadow: inset 0 10px 10px -10px rgba(33, 35, 38, 0.05),
  inset 0 -10px 10px -10px rgba(33, 35, 38, 0.05);
  background-color: #F0F4F8;
  margin-bottom: 96px;

  .title {
    margin: 0;
    padding: 64px 0;
    color: #014D40;
    font-weight: 600;


  }
}
</style>
