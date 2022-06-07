import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css"
import App from './App.vue'
import "./assets/css/style.css"
import router from './router'
const app = createApp(App).use(router)
app.use(router);
app.mount('#app');
import "bootstrap/dist/js/bootstrap.js"
