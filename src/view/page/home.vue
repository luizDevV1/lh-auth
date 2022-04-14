<template>
  <div id="lh-auth">
    <q-card class="lh-auth-card wh-100 bg-transparent shadow-10">
      <q-card-section class="lh-auth-card__menu q-gutter-y-md column">
        <q-btn @click="action = 'SING_IN'" dense flat align="left">
          <q-icon class="fa-solid fa-sign-in" left size="xs" />
          <span class="q-ml-sm">Entrar</span>
        </q-btn>

        <q-btn @click="action = 'NEW_USER'" dense flat align="left">
          <q-icon class="fa-solid fa-user-plus" left size="xs" />
          <span class="q-ml-sm">Cadastrar</span>
        </q-btn>
      </q-card-section>

      <q-card-section class="lh-auth-card__form q-pa-none q-ma-none overflow-auto">
        <scrolling>
          <!--          <template #default>-->
          <auth-form v-if="action === 'SING_IN'" class="wh-100" />
          <manager-user v-else class="wh-100" />
          <!--          </template>-->
        </scrolling>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import AuthForm from "../components/auth-form.vue";
import ManagerUser from "../components/manager-user.vue";
import Scrolling from "../components/scrolling.vue";

import { ref } from "vue";

const action = ref<"SING_IN" | "NEW_USER">("SING_IN");
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
  grid-template-columns: minmax(130px, 180px) 1fr;
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
