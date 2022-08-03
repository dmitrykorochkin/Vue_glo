import Vue from 'vue';
import VueRouter from 'vue-router';

import HeroView from '../views/HeroView';
import OurCoffeeView from '../views/OurCoffeeView';
import FourYourView from '../views/FourYourView';
import ContactUsView from '../views/ContactUsView';
//import ThanksView from '../views/ThanksView';


Vue.use(VueRouter);

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/four-your', component: FourYourView },
    { path: '/contact-us', component: ContactUsView },
    // { path: '/tanks', component: ThanksView },

    

    
  ]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router