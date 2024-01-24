import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/'
import { createVuestic } from "vuestic-ui";
import "material-design-icons-iconfont/dist/material-design-icons.min.css";
import "vuestic-ui/css";
import './index.css'
const app = createApp(App)

const pinia = createPinia();
app.use(pinia).use(router).use(createVuestic())



app.mount('#app')
