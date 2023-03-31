<script setup>
import image1 from "../assets/img1.jpg"
import carousel1 from "../assets/carousel1.jpg"
import {ref} from "vue";

const state = ref([{
    first_name: "John",
    last_name: "Doe",
    img: image1,
},{
    first_name: "Aura",
    last_name: "Doe",
    img: carousel1,
}])
</script>
<template>
<div class="component" v-for="imgs in state">
    <img class="img" :src="imgs.img" />
    <h2 class="title">Tipova Monastery</h2>
    <p>{{imgs.first_name}}</p>
</div>

</template>
<style scoped lang="scss">
.component{
    width: 25vw;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .img{
        width: 25vw;


    }
    .title{
color: #486581;
        margin: 0;
        padding-bottom: 16px;
        border-bottom:  solid #D9E2EC;
        font-weight: 600;
    }
}
</style>