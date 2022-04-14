<template>
  <q-scroll-area
    class="wh-100"
    :thumb-style="thumbStyle"
    :content-style="contentStyle"
    :content-active-style="contentActiveStyle"
  >
    <slot />
  </q-scroll-area>
</template>

<script lang="ts" setup>
const contentStyle = {
  backgroundColor: "rgba(0,0,0,0.02)",
  color: "#555",
};

const contentActiveStyle = {
  backgroundColor: "#FFF",
  color: "black",
};

const thumbStyle = {
  right: "0",
  borderRadius: "2px",
  backgroundColor: "#483D8B",
  width: "3px",
  opacity: "0.75",
};
</script>

<style scoped></style>
