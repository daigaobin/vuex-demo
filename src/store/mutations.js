import {ADD_COUNT,DELETE_COUNT} from "./mutation-type";

export default {
    [ADD_COUNT](state) {
        state.count++;
    },

    [DELETE_COUNT](state) {
        state.count--;
    }
}