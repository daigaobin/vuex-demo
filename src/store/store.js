import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
Vue.use(Vuex);

const state = {
    count: 1
};

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;