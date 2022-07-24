import { createStore } from "vuex";

const store = createStore({
    state: {
        counter: 0
    },
    mutations:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
            if (this.state.counter < 0){
                this.state.counter = 0
            }
        }
    }
})

export default store;