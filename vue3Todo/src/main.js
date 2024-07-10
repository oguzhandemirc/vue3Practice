// import { createApp } from "vue";
// import App from "./App.vue";
// import { createPinia } from "pinia";

// import "./index.css";

// app.use(createPinia());
// createApp(App).mount("#app");

// import './assets/main.css'

import "./index.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
