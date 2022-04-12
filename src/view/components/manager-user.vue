<template>
  <q-form greedy class="wh-100 q-pa-sm" @submit="logNewUser">
    <div class="column">
      <b class="font-21em q-pt-sm q-pl-sm text-accent">Novo de usuário</b>
      <q-input
        class="q-pb-md q-pt-xs q-px-sm"
        filled
        label="Nome"
        dense
        lazy-rules
        clearable
        clear-icon="fa-solid fa-xmark"
        v-model="auth_entity.fist_name"
        :rules="[rules.required]"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-signature" size="xs" />
        </template>
      </q-input>

      <q-input
        class="q-pb-md q-pt-xs q-px-sm"
        filled
        label="Sobrenome"
        dense
        lazy-rules
        clearable
        clear-icon="fa-solid fa-xmark"
        v-model="auth_entity.last_name"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-signature" size="xs" />
        </template>
      </q-input>

      <q-input
        class="q-pb-md q-pt-xs q-px-sm"
        filled
        label="E-mail"
        dense
        lazy-rules
        clearable
        clear-icon="fa-solid fa-xmark"
        v-model="auth_entity.email"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-mail-bulk" size="xs" />
        </template>
      </q-input>

      <q-input
        class="q-pb-md q-pt-xs q-px-sm"
        filled
        label="Senha"
        dense
        lazy-rules
        clearable
        clear-icon="fa-solid fa-xmark"
        type="password"
        v-model="auth_entity.password"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-fingerprint" size="xs" />
        </template>
      </q-input>

      <q-input
        class="q-pb-md q-pt-xs q-px-sm"
        filled
        label="Confirmar senha"
        dense
        lazy-rules
        clearable
        clear-icon="fa-solid fa-xmark"
        type="password"
        v-model="confirm_password"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-lock" size="xs" />
        </template>
      </q-input>

      <q-input
        class="q-pb-md q-pt-xs q-px-sm"
        filled
        label="CPF"
        dense
        lazy-rules
        clearable
        clear-icon="fa-solid fa-xmark"
        v-model="auth_entity.identifier_1"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-address-card" size="xs" />
        </template>
      </q-input>

      <q-input
        class="q-pb-md q-pt-xs q-px-sm"
        filled
        label="RG"
        dense
        lazy-rules
        clearable
        clear-icon="fa-solid fa-xmark"
        v-model="auth_entity.identifier_2"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-address-card" size="xs" />
        </template>
      </q-input>

      <q-input
        class="q-pb-md q-pt-xs q-px-sm"
        filled
        label="Data Nascimento"
        dense
        lazy-rules
        clearable
        clear-icon="fa-solid fa-xmark"
        v-model="auth_entity.age"
        mask="date"
      >
        <template #prepend>
          <q-icon class="fa-solid fa-calendar-days" color="primary" size="xs">
            <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
              <q-date v-model="auth_entity.age">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Cancelar" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-btn class="q-mx-sm q-my-md" color="primary" type="submit">Cadastrar</q-btn>
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import AuthEntity, { AuthEntity as AuthModel } from "../../model/entity/auth.entity";
import { ref } from "vue";
import Rules from "../../controller/util/rules";

const auth_entity = ref<AuthModel>(AuthEntity);
const confirm_password = ref<String | null>(null);

const rules = Rules;

const logNewUser = () => {
  console.log(auth_entity.value);
};
</script>

<style scoped></style>
