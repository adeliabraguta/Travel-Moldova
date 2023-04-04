<script>
</script>
<template>
  <div class="slide">
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>
<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
}
</style>