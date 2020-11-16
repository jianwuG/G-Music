import {createRouter,createWebHashHistory} from 'vue-router'
import {routes} from './config'

export default createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

