<template>
  <div id="lh-app">
    <div id="lh-window-menu" class="shadow-5" />
    <div id="lh-body">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import "./controller/plugins/quasar/plugin";
</script>

<style lang="scss">
@import "quasar/src/css/variables";

#app {
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
    45deg,
    rgba(75, 0, 130, 1) 0%,
    rgba(72, 61, 139, 1) 35%,
    rgba(70, 130, 180, 1) 100%
  );
}

#lh-app {
  display: grid;
  grid-template-rows: 32px calc(100vh - 32px);
  grid-template-columns: 1fr;
  grid-template-areas: "menu" "body";
  width: 100%;
  height: 100%;

  & #lh-window-menu {
    grid-area: menu;
    height: 32px;
    background-color: $primary;
    -webkit-app-region: drag;
    -webkit-app-select: none;
  }

  & #lh-body {
    grid-area: body;
    width: 100%;
    height: 100%;
  }
}
</style>
