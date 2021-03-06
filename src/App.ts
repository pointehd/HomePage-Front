import Vue from "vue";
import { router } from "./router";
import App from "./App.vue";
import "./styles/App.scss";

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});