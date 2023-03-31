<script setup>
import {Icon} from "@iconify/vue";
import {ref} from "vue";
const show = ref(false);
defineProps({
    "title": {
        type: String,
        required: true,
    },
    "img": {
        type: String,
        required: true,
    },
    "address": {
        type: String,
        required: true,
    }
});
</script>
<template>
    <div class="component">
        <img class="img" :src="img"/>
        <div class="desc">
            <h2 class="title">{{ title }}</h2>
            <icon v-if="show" @click="show='true'" class="icon" icon="teenyicons:heart-outline"/>
            <icon v-else="show" @click="show='false'" class="icon" icon="teenyicons:heart-solid"/>
        </div>
        <div class="location">
            <icon class="icon" icon="uil:location-point"></icon>
            <p class="address">{{ address }}</p>
        </div>
    </div>

</template>
<style scoped lang="scss">
.component {
  width: 25vw;
  display: flex;
  flex-direction: column;
  gap: 12px;


  .img {
    width: 25vw;
    height: 30vh;
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
      font-size: 24px;
    }

    .icon {
      height: 24px;
      width: 24px;
      color: #4098D7;

    }
  }


  .location {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 16px;
    border-bottom: solid #D9E2EC;
    padding-bottom: 16px;

    .icon {
      color: #27AB83;
    }

    .address {
      margin: 0;
      font-weight: 300;
      font-style: italic;
      color: #102A43;

    }

  }
}
</style>