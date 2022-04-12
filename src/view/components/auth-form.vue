<template>
  <q-form greedy class="wh-100 q-pa-sm" @submit="data.login(login)">
    <div class="column">
      <b class="font-21em q-pt-sm q-pl-sm text-accent">Bem vindo</b>

      <!--<editor-fold desc="Username">-->
      <q-input
        class="q-pb-md q-px-sm"
        v-model="login.email"
        filled
        label="Usuário"
        dense
        lazy-rules
        clearable
        clear-icon="fa-solid fa-xmark"
        :rules="[rules.required]"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-user-tie" size="xs" />
        </template>
      </q-input>
      <!--</editor-fold>-->

      <!--<editor-fold desc="Password">-->
      <q-input
        class="q-py-md q-px-sm"
        v-model="login.password"
        type="password"
        filled
        label="Senha"
        dense
        lazy-rules
        clearable
        clear-icon="fa-solid fa-xmark"
        :rules="[rules.required]"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-fingerprint" size="xs" />
        </template>
      </q-input>
      <!--</editor-fold>-->

      <div class="q-py-sm q-px-sm flex justify-end">
        <q-btn dense flat>
          <small class="text-accent">Esqueceu a senha?</small>
          <small class="text-info text-bold">
            <i>Clique aqui</i>
          </small>
        </q-btn>
      </div>

      <q-btn class="q-mx-sm q-my-md" color="primary" type="submit">Entrar</q-btn>

      <div class="q-px-sm q-my-md flex justify-center">
        <span class="font-12em text-grey-13">ou</span>
      </div>

      <div class="q-py-md q-px-sm flex justify-center">
        <template v-for="(item, index) in list_types_access" :key="`btn-access-using${index}`">
          <q-btn color="primary" size="md" class="q-mx-xs lh-hover-scale">
            <q-icon :class="item.icon" />

            <q-tooltip v-text="item.tooltip" />
          </q-btn>
        </template>
      </div>
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import Rules from "../../controller/util/rules";
import { ref } from "vue";
import AuthFormData from "../data/auth-form.data";
import LoginInterface from "../../model/helper/login.interface";

const login = ref<LoginInterface>({
  email: "",
  password: "",
});

const rules = Rules;
const data = AuthFormData;

const list_types_access = [
  {
    tooltip: "Continuar com Facebook",
    icon: `fa-brands fa-facebook-f`,
  },
  {
    tooltip: "Continuar com Instagram",
    icon: `fa-brands fa-instagram`,
  },
  {
    tooltip: "Continuar com Google mail",
    icon: `fa-brands fa-google`,
  },
  {
    tooltip: "Continuar com Twitter",
    icon: `fa-brands fa-twitter`,
  },
  {
    tooltip: "Continuar com Linkedin",
    icon: `fa-brands fa-linkedin-in`,
  },
];
</script>

<style lang="scss" scoped>
.lh-hover-scale {
  &:hover {
    transform: scale(1.2);
  }
}
</style>
