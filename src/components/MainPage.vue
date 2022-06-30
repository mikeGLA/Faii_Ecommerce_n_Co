<template>
  <div class="Main-Index">
    <div class="Main-TopBar">
      <div class="TopBar-Greet">
        <p>Good Morning</p>
        <p>Customer!</p>
      </div>
      <div class="TopBar-Cart">
        <button @click="debugButton"> 
          <img :src="require('../assets/ShoppingCart.png')" :width="30" :height="30"/>
        </button>
      </div>
    </div>
    <div class="Main-SearchBox">
      <img class="SearchBox-Icon" :src="require('../assets/magnifier.png')" :width="30" :height="30"/>
      <input class="SearchBox-Index" placeholder="Search"/>
    </div>
    <div class="Catagory-Zone">
      <button :class="activeButton1" @click="setButtonActive1">All Product</button>
      <button :class="activeButton2" @click="setButtonActive2">Hot Glue</button>
      <button :class="activeButton3" @click="setButtonActive3">Latex Glue</button>
    </div>
    <div class="Card-Body">
      <productCard1/>
    </div>
  </div>
</template>

<script>
// import ShoppingCart from "../assets/ShoppingCart.png"

import productCard1 from "./ProductCard/productCard1.vue"


export default {
  name: 'MainPage',
  components: {
    productCard1
  },
  data(){
    return{
      debug:[1,2],
      activeButton1: "SelectedButtonCss",
      activeButton2: "NonSelectedButton",
      activeButton3: "NonSelectedButton"
    }
  },
  methods:{
    debugButton(){
      console.log("YakYedHee")
    },
    setButtonActive1(){
      this.activeButton1 = "SelectedButtonCss";
      this.activeButton2 = "NonSelectedButton";
      this.activeButton3 = "NonSelectedButton";
    },
    setButtonActive2(){
      this.activeButton1 = "NonSelectedButton";
      this.activeButton2 = "SelectedButtonCss";
      this.activeButton3 = "NonSelectedButton";
    },
    setButtonActive3(){
      this.activeButton1 = "NonSelectedButton";
      this.activeButton2 = "NonSelectedButton";
      this.activeButton3 = "SelectedButtonCss";
    }
  }
}
</script>

<style>
  .Main-Index{
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

  .Main-SearchBox{
    display:flex;
    height: 50px;
    width: 320px;
    background: rgb(245, 245, 245);
    justify-content: center;
    border: 1px solid rgb(245, 245, 245);
    margin-left: 15px;
    border-radius: 10px;
  }

  .SearchBox-Icon{
    padding-left: 30px;
    margin-top: 10px;
  }

  .SearchBox-Index{
    width: 260px;
    height: 35px;
    border: 1px solid rgb(245, 245, 245);
    background: rgb(245, 245, 245);
    border-radius: 10px;
    margin: auto;
    margin-right: 30px;
  }

  .Catagory-Zone{
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
    text-align: center;
  }

  .SelectedButtonCss{
    background: rgb(135, 169, 255);
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: white;
  }

  .NonSelectedButton{
    background: none;
    border: none;
    font-size: 14px;
  }

  .Card-Body{
    background: rgb(242, 242, 242);
    margin-left: 10px;
    margin-right: 10px;
    /* border: 1px solid red; */
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .Card-Body > div{
    margin: 5px;
  }
</style>
