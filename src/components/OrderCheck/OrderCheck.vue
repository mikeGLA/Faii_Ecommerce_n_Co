<template>
    <div class="OrderCheck-Index">
        <div class="Main-TopBar">
            <div class="TopBar-Greet">
                <p>Good Morning</p>
                <p>Customer!</p>
            </div>
            <div class="TopBar-Cart">
                <button @click="debugButton"> 
                <img :src="require('@/assets/ShoppingCart.png')" :width="30" :height="30"/>
                </button>
            </div>
        </div>
        <form @submit.prevent="NumberChecker">
            <h3>Please enter your order number below.</h3>
            <input id="OrderNumber" v-model.lazy="EnteredNum" type="string" placeholder="Order Number"><br>
        </form>
        <label for="OrderNumber">
            <h3>Your Order Number is</h3>
            <h3 :style="{'color': 'red'}">{{EnteredNum}}</h3>
            <P>Order Status: {{StatusReport()}}</P>
        </label>
    </div>
</template>

<script>

export default{
    name: 'OrderCheck',
    data(){
        return{
            EnteredNum: "",
            OrderStatus: "",
        }
    },
    methods:{
        NumberChecker(){
            if (this.EnteredNum !== ""){
                console.log("Your Parcel is on the way!")
            }
            else{
                console.log("Error Can not find your Order Number please check again")
            }
        },
        StatusReport(){
            if (this.EnteredNum === 12345){
                this.OrderStatus = "Shipping"
            }
            else{
                this.OrderStatus = "Not Ship Yet"
            }
        }
    }
}

</script>

<style>
    .OrderCheck-Index{
        text-align: center;
        height: 900px;
        /* border: 1px solid red; */
    }

    .Main-TopBar{
    display: flex;
    flex-direction: row;
    height: 50px;
    justify-content: space-evenly;
    gap: 60px;
    }

    .TopBar-Greet{
    /* border: 1px solid blue; */
    width: 110px;
    line-height: 2px;
    font-weight: bold;
    }

    .TopBar-Cart{
    /* border: 1px solid yellow; */
    width: 100px;
    text-align: right;
    margin-top: 12.5px;
    }

    .TopBar-Cart > button{
    border: none;
    background: none;
    }

</style>