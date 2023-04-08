<script setup>
import {ref} from "vue";
import AccordionData from '../data.json'
import {Icon} from "@iconify/vue";
const accordion = ref(AccordionData.accordion);
function toggleAccordion(index) {
    accordion.value[index].open = !accordion.value[index].open;
}
</script>

<template>
  <div>
    <ul class="list">
      <p class="desc">NEED TO KNOW</p>
      <h1 class="title">Useful information about Moldova</h1>
      <li class="item" v-for="(info,index) in accordion" :key="index">
        <div class="question-div" v-on:click="toggleAccordion(index)">
          <h2 class="question"> {{ info.question }}</h2>
          <icon :class="!info.open ? 'icon' : 'hidden' " icon="teenyicons:down-outline"></icon>
          <icon :class="info.open ? 'icon' : 'hidden' " icon="teenyicons:up-outline"></icon>
        </div>
        <p :class="info.open ? 'show' : 'hidden' ">{{ info.answer }} </p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.list {
  list-style-type: none;
  width: 50vw;
  padding-bottom: 96px;
  .desc {
    margin: 0;
    color: #079A82;
    letter-spacing: 1.5px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
  .title {
    text-align: center;
    font-size: 24px;
    padding-bottom: 48px;
    margin: 0;
  }
  .item {
    border-bottom: solid #F0F4F8;
    padding: 16px;
    color: #102A43;
    .question-div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      .question {
        color: #102A43;
        margin: 0;
        font-weight: 600;
        font-size: 18px;
      }
      .icon {
        height: 18px;
        width: 18px;
        color: #102A43;
      }
    }
    .show {
      margin: 0;
      font-weight: 300;
      font-size: 18px;
      display: block;
      padding-top: 16px;
    }
    .hidden {
      display: none;
    }
  }
}
</style>