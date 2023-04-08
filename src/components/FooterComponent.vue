<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="footer">
    <div class="desc">
      <p class="copy">&#169; Copyright 2023</p>
      <p class="name">BY ADELIA BRAGUTA</p>
    </div>
    <a class="email" href="mailto:adeliabraguta@gmail.com">adeliabraguta@gmail.com</a>
    <div class="icons">
      <a href="#">
        <icon class="icon" icon="teenyicons:instagram-outline"></icon>
      </a>
      <a href="#">
        <icon class="icon" icon="teenyicons:linkedin-outline"></icon>
      </a>
      <a href="#">
        <icon class="icon" icon="teenyicons:facebook-outline"></icon>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  border-top: 2px solid #DCEEFB;
  margin: 0 48px;
  color: #627D98;
  display: grid;
  gap: 18px;
  align-items: center;
  padding: 48px 70vw 96px 32px;
  .desc {
    display: flex;
    gap: 18px;
    .copy {
      margin: 0;
    }
    .name {
      margin: 0;
      letter-spacing: 1.1px;
    }
  }
  .email {
    color: #627D98;
    text-decoration: none;
    &:hover {
      color: #003E6B;
    }
  }
  .icons {
    display: flex;
    gap: 24px;
    align-items: center;
    text-decoration: none;

    .icon {
      color: #186FAF;
      height: 20px;
      width: 20px;

      &:hover {
        color: #003E6B;
      }
    }
  }
}
</style>