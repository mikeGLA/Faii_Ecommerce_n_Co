<template>
    <div class="NavigationBar-Index">
        <div class="NavigationBar-Home">
            <button>
                <img :src="require('../../assets/Home_White.png')" :width="40" :height="40">
            </button>
        </div>
        <div class="NavigationBar-Cart">
            <button>
                <img :src="require('../../assets/ShoppingCart_White.png')" :width="40" :height="40">
            </button>
        </div>
        <div class="NavigationBar-OrderCheck">
            <button>
                <img :src="require('../../assets/OrderTrack_White.png')" :width="40" :height="40">
            </button>
        </div>
        <div class="NavigationBar-AboutUs">
            <button>
                <img :src="require('../../assets/AboutUs_White.png')" :width="40" :height="40">
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'navigationBar'
    
}
</script>

<style>
    .NavigationBar-Index{
        display: flex;
        /* flex-direction: row; */
        /* justify-content: space-between; */
        height: 60px;
        border: 1px solid red;
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

    .NavigationBar-Cart{
        /* border: 1px solid green; */
        /* width: 70px;
        text-align: center; */
        margin: auto;
    }

    .NavigationBar-OrderCheck{
        /* border: 1px solid blue; */
        /* width: 70px;
        text-align: center; */
        margin: auto;
    }

    .NavigationBar-AboutUs{
        /* border: 1px solid purple; */
        /* width: 70px;
        text-align: center; */
        margin: auto;
    }


</style>