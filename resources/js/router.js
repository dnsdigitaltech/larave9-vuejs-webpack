import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components/pages/myFirstPage'
import newPage from './components/pages/newRoutePage'

const routes = [
    {
        path: '/minha-nova-rota',
        component: firstPage
    },
    {
        path: '/nova-rota',
        component: newPage
    }
]

export default new Router ({
    mode: 'history',
    routes
})