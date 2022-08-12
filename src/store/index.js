import Vue from 'vue'
import Vuex from 'vuex'

import links from './links';
import coffee from './coffee';
import goods from './goods';
import best from './best';

Vue.use(Vuex)

const store = new Vuex.Store({

  modules: {
    links,
    coffee,
    goods,
    best
  }
})

export default store