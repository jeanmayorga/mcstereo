<template>
  <div>
    <el-drawer
      title="I am the title"
      :visible.sync="drawer"
      :direction="direction"
      modal
    >
      <span>Hi, there!</span>
    </el-drawer>
    <header class="HeaderNav">
      <div class="container">
        <div class="actions">
          <div @click="drawer = true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
        </div>
        <nuxt-link to="/">
          <div class="logo">
            <img src="~/assets/logo-solo.png" alt="Logo" />
          </div>
        </nuxt-link>
        <div class="action-menu">
          <el-button type="danger" round size="medium">Contacto</el-button>
        </div>
      </div>
    </header>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      drawer: false,
      direction: 'ltr',
    };
  },
});
</script>
>
<style>
body {
  margin-top: 50px;
}
header.HeaderNav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: #fff;
  height: 50px;
}
header.HeaderNav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.actions {
  display: flex;
  align-items: center;
  transition: all 0.3s;
}
.actions div {
  stroke: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  margin-right: 1.5em;
}
.actions div:hover {
  stroke: rgba(0, 0, 0, 1);
  transform: scale(0.9);
  transition: all 0.3s;
  cursor: pointer;
}
.logo {
  width: 45px;
}
.logo img {
  width: 100%;
}
.menu {
  display: flex;
}
</style>
