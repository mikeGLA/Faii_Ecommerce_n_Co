<template>
    <div class="NavigationBar-Index">
        <div class="NavigationBar-Home">
            <button :class="HomeCssControl" @click="HomeButtonClicked">
                <router-link to="home">
                    <img :src="require('@/assets/Home_White.png')" :width="40" :height="40">
                </router-link>
            </button>
        </div>
        <div class="NavigationBar-Cart">
            <button :class="CartCssControl" @click="CartButtonClicked">
                <router-link to="/shoppingcart">
                    <img :src="require('@/assets/ShoppingCart_White.png')" :width="40" :height="40">
                </router-link>
            </button>
            <div class="CartCount" v-if="this.$store.state.itemInCart > 0">{{this.$store.state.itemInCart}}</div>
        </div>
        <div class="NavigationBar-OrderCheck">
            <button :class="OrderCssControl" @click="OrderButtonClicked">
                <router-link to="/ordercheck">
                    <img :src="require('../../assets/OrderTrack_White.png')" :width="40" :height="40">
                </router-link>
            </button>
        </div>
        <div class="NavigationBar-AboutUs">
            <button :class="AboutCssControl" @click="AboutButtonClicked">
                <router-link to="/aboutus">
                    <img :src="require('../../assets/AboutUs_White.png')" :width="40" :height="40">
                </router-link>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigationBar',
    data(){
        return{
            HomeCssControl: "HomeSelected",
            CartCssControl: "CartButton",
            OrderCssControl: "OrderCheckButton",
            AboutCssControl: "AboutUsButton",
        }
    },
    methods:{
        debugButton(){
            console.log("YakYedHee")
        },
        HomeButtonClicked(){
            this.HomeCssControl= "HomeSelected",
            this.CartCssControl= "CartButton",
            this.OrderCssControl= "OrderCheckButton",
            this.AboutCssControl= "AboutUsButton"
        },
        CartButtonClicked(){
            this.HomeCssControl= "HomeButton",
            this.CartCssControl= "CartSelected",
            this.OrderCssControl= "OrderCheckButton",
            this.AboutCssControl= "AboutUsButton"
        },
        OrderButtonClicked(){
            this.HomeCssControl= "HomeButton",
            this.CartCssControl= "CartButton",
            this.OrderCssControl= "OrderCheckSelect",
            this.AboutCssControl= "AboutUsButton"
        },
        AboutButtonClicked(){
            this.HomeCssControl= "HomeButton",
            this.CartCssControl= "CartButton",
            this.OrderCssControl= "OrderCheckButton",
            this.AboutCssControl= "AboutUsSelect"
        },
    }
}
</script>

<style>
    .NavigationBar-Index{
        display: flex;
        /* flex-direction: row; */
        /* justify-content: space-between; */
        height: 55px;
        /* border: 1px solid red; */
        background: white;
        box-shadow: 0px 4px 20px rgba(0,0,0,0.08);
        position: fixed;
        bottom: 0;
        width: 100%;
        /* z-index: 1; */
    }

    .NavigationBar-Home{
        /* border: 1px solid yellow; */
        /* width: 70px; */
        /* text-align: center; */
        margin: auto;
    }

    .HomeButton{
        border: none;
        background: none;
    }

    .HomeSelected{
        background: none;
        border: 2px solid black;
    }

    .NavigationBar-Cart{
        /* border: 1px solid green; */
        /* width: 70px;
        text-align: center; */
        margin: auto;
        display: flex;
        justify-content: flex-end;
    }

    .CartCount{
        position: absolute;
        border-radius: 5px;
        background: red;
        width: 20px;
        /* padding: 8px; */
        /* margin: auto; */
        height: auto;
        text-align: center;
        font-weight: bold;
    }

    .CartButton{
        border: none;
        background: none;
    }

    .CartSelected{
        background: none;
        border: 2px solid black;
    }

    .NavigationBar-OrderCheck{
        /* border: 1px solid blue; */
        /* width: 70px;
        text-align: center; */
        margin: auto;
    }

    .OrderCheckButton{
        border: none;
        background: none;
    }

    .OrderCheckSelect{
        background: none;
        border: 2px solid black;
    }

    .NavigationBar-AboutUs{
        /* border: 1px solid purple; */
        /* width: 70px;
        text-align: center; */
        margin: auto;
    }

    .AboutUsButton{
        border: none;
        background: none;
    }

    .AboutUsSelect{
        background: none;
        border: 2px solid black;
    }

    /* .AboutUsButton > img{
        filter: brightness(0) saturate(100%) invert(90%) sepia(28%) saturate(2%) hue-rotate(330deg) brightness(113%) contrast(101%);
    } */


</style>