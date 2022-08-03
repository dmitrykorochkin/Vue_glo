import Vue from 'vue';
import VueRouter from 'vue-router';

import HeroView from '../views/HeroView';
import OurCoffeeView from '../views/OurCoffeeView';
import FourYourView from '../views/FourYourView';


Vue.use(VueRouter);

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/four-your', component: FourYourView },

    
  ]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router