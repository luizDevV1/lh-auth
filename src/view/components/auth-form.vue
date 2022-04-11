<template>
  <q-form greedy class="wh-100 q-pa-sm" @submit="login">
    <div class="column">
      <b class="font-21em q-pt-sm q-pl-sm text-accent">Bem vindo</b>

      <!--<editor-fold desc="Username">-->
      <q-input
        class="q-pb-md q-px-sm"
        v-model="email"
        filled
        label="Usuário"
        dense
        lazy-rules
        :rules="[rules.required]"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-user-tie" />
        </template>
      </q-input>
      <!--</editor-fold>-->

      <q-input
        class="q-py-md q-px-sm"
        v-model="password"
        type="password"
        filled
        label="Senha"
        dense
        lazy-rules
        :rules="[rules.required]"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-fingerprint" />
        </template>
      </q-input>

      <div class="q-py-md q-px-sm flex justify-end">
        <q-btn dense flat>
          <small class="text-accent">Esqueceu a senha?</small>
          <small class="text-info text-bold">
            <i>Clique aqui</i>
          </small>
        </q-btn>
      </div>

      <q-btn class="q-mx-sm q-mt-lg" color="primary" type="submit">Entrar</q-btn>

      <div class="q-py-md q-px-sm q-my-lg flex justify-center">
        <span class="font-12em text-grey-13">ou</span>
      </div>

      <div class="q-py-md q-px-sm flex justify-center">
        <q-btn color="primary" size="md" class="q-mx-xs">
          <q-icon class="fa-brands fa-facebook-f" />
        </q-btn>
        <q-btn color="primary" size="md" class="q-mx-xs">
          <q-icon class="fa-brands fa-instagram" />
        </q-btn>
        <q-btn color="primary" size="md" class="q-mx-xs">
          <q-icon class="fa-brands fa-google" />
        </q-btn>
        <q-btn color="primary" size="md" class="q-mx-xs">
          <q-icon class="fa-brands fa-twitter" />
        </q-btn>
        <q-btn color="primary" size="md" class="q-mx-xs">
          <q-icon class="fa-brands fa-linkedin-in" />
        </q-btn>
      </div>
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import Rules from "../../controller/util/rules";
import { ref } from "vue";

const email = ref("");
const password = ref("");

const rules = Rules;

function login() {
  console.log(email.value, password.value);
}
</script>

<style lang="scss" scoped></style>
