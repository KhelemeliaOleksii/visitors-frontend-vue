import App from "./App.vue";
import store from "./vuex/store";
import { createApp } from "vue";
import "./main.css";
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
