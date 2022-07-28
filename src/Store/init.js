import { createStore } from "vuex";

const store = createStore({
    state: {
        itemInCart: 0,
        debugGB: "YakYedHeeGB",
        ProductData:[
            {
                ProductName:"Hot Glue1",
                ProductPrice: 40,
                Ref: 1
            },
            {
                ProductName:"Hot Glue2",
                ProductPrice: 35,
                Ref: 2
            },
            {
                ProductName:"Hot Glue3",
                ProductPrice: 30,
                Ref: 3
            },
            {
                ProductName:"Hot Glue4",
                ProductPrice: 25,
                Ref: 4
            },
            {
                ProductName:"Hot Glue5",
                ProductPrice: 20,
                Ref: 5
            }
        ],
    },
    mutations:{
        increment(state){
            state.itemInCart++
        },
        decrement(state){
            state.itemInCart--
            if (this.state.itemInCart < 0){
                this.state.itemInCart = 0
            }
            console.log(this.state.debugGB)
        },
    }
})

export default store;