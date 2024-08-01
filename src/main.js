import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


const app = createApp(App)

app.use(router)


createApp(App)
.use(
    Vue3Toasity,
    {
      autoClose: 3000,
     
    }
  ).use(router)
  .mount('#app');


  // app.mount('#app')
