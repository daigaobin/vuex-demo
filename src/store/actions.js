/**
 * 异步操作
 **/
import {ADD_COUNT, DELETE_COUNT} from "./mutation-type";

export default {
    async [`${ADD_COUNT}_ACTION`](context) {
        debugger;
        context.commit(ADD_COUNT);
    },
    async DELETE_COUNT_ACTION({commit}) { //{ dispatch, commit }
        //await dispatch('actionA') // wait for `actionA` to finish
        commit(DELETE_COUNT);
    }
}