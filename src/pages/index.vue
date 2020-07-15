<template>
  <div>
    <div class="jumbo">
      <el-carousel height="100%">
        <el-carousel-item v-for="cover in covers" :key="cover.id">
          <img
            :src="'https://api.mcstereo.com' + cover.cover.formats.medium.url"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
      <div class="title">
        <h2>Últimas Noticias de Baños</h2>
        <el-button type="info" plain size="mini" round>Ver todas</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $http }) {
    const covers = await $http.$get('/covers');
    return { covers };
  },
};
</script>

<style>
.container {
  width: 100%;
  padding: 0 1em;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
}
.title h2 {
  font-size: 23px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
}
.jumbo {
  animation: 1s appear;
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  margin-bottom: 1em;
}
.jumbo .el-carousel {
  height: 100%;
}
.jumbo .el-carousel__item::after {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.jumbo .el-carousel__item img {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

@media only screen and (min-width: 768px) {
  .container {
    width: 1260px;
    margin: auto;
  }
  .jumbo {
    height: 550px;
  }
  .jumbo .el-carousel__item img {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
}
</style>
