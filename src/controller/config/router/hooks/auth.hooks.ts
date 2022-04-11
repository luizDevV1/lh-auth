import { RouteRecordRaw } from "vue-router";
import { AUTH_ENUM } from "../enum/auth.enum";
import Home from "../../../../view/page/home.vue";
import { BaseMetaRouter } from "../index";

export const AUTH_HOOKS: Array<RouteRecordRaw> = [
  {
    path: AUTH_ENUM.HOME,
    component: Home,
    meta: {
      title: "Home page",
      subtitle: "Hello-world",
    } as BaseMetaRouter,
  },
];
