import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

import actions from '../store/actions.js'
import getters from '../store/getters.js'
import mutations from '../store/mutations.js'
import state from '../store/state.js'

let store = new vuex.Store({
    actions,getters,mutations,state
})

export default store