import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import {Toast} from 'vant'

// @ts-ignore
const app = createApp(App);
app.use(router);
app.use(store);
app.use(Toast);
app.mount('#app');
