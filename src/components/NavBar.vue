<script>

</script>
<template>
    <div class="nav">
        <div class="nav-bar">
            <h1 class="title">Travel</h1>
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
  border-bottom: solid white;

  .nav-bar {
    border-bottom: solid #102A43;
    margin: 0 48px;
    height: 96px;
      display: flex;
      align-items: center;

    .title {
      font-size: 36px;
      margin: 0;
      //padding-top: 16px;
        color: #102A43;
    }
  }
}
</style>