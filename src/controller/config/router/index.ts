import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { AUTH_HOOKS } from "./hooks/auth.hooks";

export declare type BaseMetaRouter = {
  title: string;
  subtitle?: string;
};

const routes: Array<RouteRecordRaw> = [...AUTH_HOOKS];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
