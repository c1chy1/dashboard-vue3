import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/'
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import './index.css'
const app = createApp(App)


console.log(router)
app.use(createPinia()).use(router).use(createVuestic())



app.mount('#app')
