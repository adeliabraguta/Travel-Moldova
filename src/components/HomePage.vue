<script setup>
import {useCycleList} from "@vueuse/core";
import {Icon} from "@iconify/vue";
import GuideComponent from "./GuideComponent.vue";
import {useData} from "./Likes.js";
import TravelStories from "./TravelStories.vue";
import Carousel from './CarouselComponent.vue'
import Slide from './SlideComponent.vue'
import StoryData from '../data.json'
import InfoComponent from "./InfoComponent.vue";
const destinationsData = useData()
const storyDestinations = StoryData.stories
</script>

<template>
  <div>
    <div class="home">
      <div class="line">
        <div class="title">
          <p class="desc">
            TRAVEL FOR GOOD
          </p>
          <h1 class="banner">
            Moldova is Out There
          </h1>
        </div>
      </div>
      <Carousel
        v-slot="{currentSlide}"
        class="carousel"
      >
        <Slide
          v-for="(slide, index) in destinationsData.carousel"
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
            Travel Destinations
          </h1>
        </div>
        <div class="guides">
          <p class="about">Despite its small area, small population,
            Moldova has a fairly rich history and culture.
            Attractions of Moldova are unique in its kind,
            and each of them deserves attention. During its existence,
            the country has gone through several historical transformations.
            What to see in Moldova is described below. </p>
          <h2 class="title" >
            FEATURED TRAVEL DESTINATIONS
          </h2>
          <section class="list" id="destinations">
            <div
              v-for="(destination,index) in destinationsData.destinations"
              :key="index"
              class="item"
            >
              <guide-component :destination="destination"/>
            </div>
          </section>
        </div>
      </div>
      <div class="guide">
        <h1 class="title">
          Travel Stories
        </h1>
      </div>
    <div class="travel-stories">
      <div class="desc-div">
        <p class="desc">Here you can discover fascinating travel stories from Moldova.
          This will not leave you indifferent.
          Moldova is about wonderful nature and interesting adventures.</p>
      </div>
    <div class="stories">
      <div class="story"  v-for="story in storyDestinations">
        <TravelStories :story="story"></TravelStories>
      </div>
    </div>
    </div>
      <div class="information">
      <InfoComponent/>
      </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  padding-top: 96px;
  color: #102A43;
}
.line {
  border-top: solid #102A43;
  margin: 0 48px;
  padding-top: 32px;
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
    color: #079A82;
    letter-spacing: 1.5px;
    font-size: 14px;
    font-weight: 600;
  }
  .banner {
    margin: 0;
    color: #003E6B;
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
.destination {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
  .desc {
    margin: 0;
    color: #079A82;
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
  .guide {
    box-shadow: inset 0 10px 10px -10px rgba(33, 35, 38, 0.05),
    inset 0 -10px 10px -10px rgba(33, 35, 38, 0.05);
    background-color: #F0F4F8;
    margin-bottom: 96px;
    .title {
      margin: 0;
      padding: 64px 0;
      color: #003E6B;
      font-weight: 600;
      font-size: 30px;
    }
  }
  .guides {
    padding: 0 96px;
    .about {
      margin: 0 64px 96px 64px;
      padding: 0 64px;
      text-align: center;
      font-size: 18px;
      border-right: solid #BCCCDC;
      border-left: solid #BCCCDC;
      display: flex;
      align-items: center;
    }
    .title {
      display: flex;
      align-items: flex-start;
      margin: 0;
      padding: 0 0 48px 0;
      color: #102A43;
      letter-spacing: 1.2px;
    }
    .list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 64px;
      padding-bottom: 96px;
      transition-property: box-shadow, transform;
      transition: 0.3s ease;
      will-change: box-shadow, transform;
    }
  }
}
.guide {
  box-shadow: inset 0 10px 10px -10px rgba(33, 35, 38, 0.05),
  inset 0 -10px 10px -10px rgba(33, 35, 38, 0.05);
  background-color: #F0F4F8;
  .title {
    margin: 0;
    padding: 64px 0;
    color: #003E6B;
    font-weight: 600;
    font-size: 30px;
  }
}
.travel-stories{
  padding: 96px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 96px;
  justify-content: center;
  align-items: center;
  .desc{
    margin: 0;
    padding: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: solid #BCCCDC;
    border-left: solid #BCCCDC;
    font-size: 18px;
    text-align: center;
  }
  .stories{
    display: flex;
    flex-direction: column;
    gap: 64px;
    .story{
      align-items: center;
      justify-content: center;
    }
  }
}
.information{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
