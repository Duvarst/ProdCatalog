import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";
const app = createApp(App);
app.use(store);

store.dispatch("mainstore/load").then(() => {
  app.mount("#app");
});
store.dispatch("mainstore/extractData");
