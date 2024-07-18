import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components/pages/myFirstPage'
import newRoutePage from './components/pages/newRoutePage'
import hooks from './components/pages/basic/hooks'
import methods from './components/pages/basic/methods'

const routes = [
    {
        path: '/minha-nova-rota',
        component: firstPage
    },
    {
        path: '/nova-rota',
        component: newRoutePage
    },

    //vue hooks
    {
        path: '/hooks',
        component: hooks
    },

    //vue methods
    {
        path: '/methods',
        component: methods
    }
]

export default new Router ({
    mode: 'history',
    routes
})