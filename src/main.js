import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
