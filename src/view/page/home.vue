<template>
  <div id="lh-auth">
    <q-card class="lh-auth-card wh-100 bg-transparent shadow-10">
      <q-card-section class="lh-auth-card__menu q-gutter-y-md column" />

      <q-card-section class="lh-auth-card__form q-pa-none q-ma-none">
        <auth-form class="wh-100" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import AuthForm from "../components/auth-form.vue";
</script>

<style lang="scss" scoped>
@import "quasar/src/css/variables";

#lh-auth {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 650px;
  width: 36vw;
  height: 60vh;
}

.lh-auth-card {
  display: grid;

  grid-template-rows: 1fr;
  grid-template-columns: minmax(130px, 150px) 1fr;
  grid-template-areas: "menu form";

  &__menu {
    grid-area: menu;
    color: white;
  }

  &__form {
    grid-area: form;
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>
