import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import insideAlbum from "./components/insideAlbum";
import Home from "./Home";


Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'home', component:  Home},
        { path: '/all', name: 'all', component:  App},
        { path: '/insideAlbum/:id', name: 'insideAlbum', component:  insideAlbum},
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})
