import "@/assets/main.scss";

import { createApp } from "vue";
import App from "./App.vue";

import components from "@lob/ui-components";
import VueBlocksTree from "vue3-blocks-tree";

import "vue3-blocks-tree/dist/vue3-blocks-tree.css";
import "@lob/ui-components/dist/ui-components.css";

const app = createApp(App);

const defaultoptions = { treeName: "family-tree" };

app
  .use(components)
  .use(VueBlocksTree, defaultoptions)
  .mount("#app");
