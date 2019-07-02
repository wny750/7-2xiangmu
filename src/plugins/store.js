import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

import action from '../store/action.js'
import getters from '../store/getters.js'
import mutation from '../store/mutation.js'
import state from '../store/state.js'

let store = new vuex.Store({
    action,getters,mutation,state
})

export default store