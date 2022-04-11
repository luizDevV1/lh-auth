<template>
  <router-view />
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
</style>
