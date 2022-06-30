<template>
    <div class="NavigationBar-Index">
        <div class="NavigationBar-Home">
            <button class="HomeButton">
                <img :src="require('../../assets/Home_Black.png')" :width="40" :height="40">
            </button>
        </div>
        <div class="NavigationBar-Cart">
            <button class="CartButton">
                <img :src="require('../../assets/ShoppingCart_White.png')" :width="40" :height="40">
            </button>
        </div>
        <div class="NavigationBar-OrderCheck">
            <button class="OrderCheckButton">
                <img :src="require('../../assets/OrderTrack_White.png')" :width="40" :height="40">
            </button>
        </div>
        <div class="NavigationBar-AboutUs">
            <button class="AboutUsButton">
                <img :src="require('../../assets/AboutUs_White.png')" :width="40" :height="40">
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'navigationBar',
    data(){
        return{

        }
    },
    methods:{
        debugButton(){
            console.log("YakYedHee")
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

    .NavigationBar-Cart{
        /* border: 1px solid green; */
        /* width: 70px;
        text-align: center; */
        margin: auto;
    }

    .CartButton{
        border: none;
        background: none;
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


</style>