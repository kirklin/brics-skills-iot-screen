import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// reset css
import "@kirklin/reset-css/kirklin.css";
import "~/assets/css/main.scss";
import "uno.css";

// 不使用mock 请注释掉
import { registerEcharts } from "~/plugins/echarts";
import { mockXHR } from "~/mock/index";

mockXHR();

const app = createApp(App);
registerEcharts(app);
app.use(createPinia());
app.use(router);

app.mount("#app");
