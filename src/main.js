import "@/assets/main.scss";

import { createApp } from "vue";
import App from "./App.vue";

import components from "@lob/ui-components";

import "@lob/ui-components/dist/ui-components.css";

const app = createApp(App);

app
  .use(components)
  .mount("#app");
