import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./controller/config/router";
import "./view/scss/global.css";

import "./controller/plugins/quasar";
import { Quasar } from "quasar";
import { options } from "./controller/plugins/quasar/plugin";

const app = createApp(App).use(createPinia()).use(router).use(Quasar, options);

await router.isReady();

app.mount("#app");
