<script setup>
import {ref, onMounted} from "vue";
import {Icon} from "@iconify/vue";
const currentSlide = ref(1);
const getSlideCount = ref(null);
const autoPlayEnable = ref(true);
const timeDuration = ref(5000)
const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
    }
    currentSlide.value += 1;
}
const goSlide = (index) => {
    currentSlide.value = index + 1
};
const prevSlide = () => {
    if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
    }
    currentSlide.value -= 1
};
const autoPlay = () => {
    setInterval(() => {
        nextSlide()
    }, timeDuration.value)
};
if (autoPlayEnable.value) {
    autoPlay();
}
onMounted(() => {
    getSlideCount.value = document.querySelectorAll('.slide').length;
});
</script>

<template>
  <div class="carousel">
    <slot :current-slide="currentSlide"/>
    <div class="nav">
      <div
        class="btn left "
        @click="prevSlide"
      >
        <icon
          class="btn-icon"
          icon="uil:angle-left-b"
        />
      </div>
      <div
        class="btn right "
        @click="nextSlide"
      >
        <icon
          class="btn-icon"
          icon="uil:angle-right-b"
        />
      </div>
    </div>
    <div class="pagination">
      <span
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{active : index + 1 === currentSlide }"
        @click="goSlide(index)"
      >
        {{ slide }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  .btn {
    position: absolute;
    padding: 0 16px;
    transition: transform .2s;
    top: 50%;
    cursor: pointer;
    &:nth-of-type(1) {
      transform: translate(0%, -50%);
      left: 10px;
    }
    &:nth-of-type(2) {
      transform: translate(0%, -50%);
      right: 10px;
    }
  }
  .btn-icon {
    color: white;
    height: 40px;
    width: 40px;
    &:hover {
      transform: scale(1.3);
    }
  }
}
.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  span {
    cursor: pointer;
    width: 12px;
    height: 12px;
    background-color: #F0F4F8;
    color: transparent;
    border-radius: 50%;
    box-shadow: 0 0 5px 0 rgba(33, 35, 38, 0.06);
    font-size: 12px;
  }
  .active {
    background-color: #2680C2;
  }
}
</style>