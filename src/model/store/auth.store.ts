import { defineStore } from "pinia";
import AuthEntity from "../entity/auth.entity";

export const AUTH_STORE = defineStore("auth", {
  state: () => {
    return {
      auth: AuthEntity,
    };
  },
  actions: {},
  getters: {},
});
