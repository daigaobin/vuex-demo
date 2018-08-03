<template>
    <div>
        <h3>{{count}} | {{calculateCount}}</h3>
        <div>
            store.commit('increment', {
            amount: 10
            })
            或者
            store.commit({
            type: 'increment',
            amount: 10
            })
        </div>
        <div>
            <button @click="$store.commit('ADD_COUNT')">add()</button>
            <button @click="$store.commit('DELETE_COUNT')">del()</button>
        </div>

        <div>
            mapActions:
            <button @click="$store.dispatch('ADD_COUNT_ACTION')">addAction()</button>
            <button @click="$store.dispatch('DELETE_COUNT_ACTION')">delAction()</button>
        </div>
    </div>
</template>


<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    import {ADD_COUNT,DELETE_COUNT} from "@/store/mutation-type";

    export default {
        name: "Count",
        /*computed:{
            count(){
                return this.$store.state.count;
            }
        },*/

        /*computed: mapState({
            // arrow functions can make the code very succinct!
            count: state => state.count,

            // passing the string value 'count' is same as `state => state.count`
            countAlias: 'count',

            // to access local state with `this`, a normal function must be used
            /!*countPlusLocalState (state) {
                return state.count + this.localCount
            }*!/
        }),*/

        /*computed: mapState([
            // map this.count to store.state.count
            'count'
        ]),*/

        computed: {
            ...mapState({
                count: state => state.count,
            }),

            ...mapGetters(['calculateCount']),
        },
        methods: {
            /*...mapMutations(['ADD_COUNT','DELETE_COUNT'])*/
            ...mapMutations({
                add: ADD_COUNT, // map `this.add()` to `this.$store.commit('increment')`
                del: DELETE_COUNT
            }),

            /*...mapActions([
                'ADD_COUNT_ACTION', // map `this.increment()` to `this.$store.dispatch('increment')`

                // `mapActions` also supports payloads:
                'DELETE_COUNT_ACTION' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
            ]),*/
            ...mapActions({
                addAction: 'ADD_COUNT_ACTION', // map `this.add()` to `this.$store.dispatch('increment')`
                delAction: 'DELETE_COUNT_ACTION'
            })
        }
    }
</script>

<style scoped>

</style>