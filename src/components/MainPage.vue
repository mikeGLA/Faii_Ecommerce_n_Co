<template>
  <div class="Main-Index">
    <h1>Nong Faii "HOT" Glue</h1>
    <div class="Main-TopBar">
      <div class="TopBar-Greet">
        <p>Good Morning</p>
        <p>Customer!</p>
      </div>
      <div class="TopBar-Cart">
        <img :src="require('../assets/ShoppingCart.png')" :width="30" :height="30"/>
      </div>
    </div>
    <input class="Main-SearchBox" placeholder="Search"/>
  </div>
</template>

<script>
// import ShoppingCart from "../assets/ShoppingCart.png"

export default {
  name: 'MainPage',
  // data: function(){
  //   return{
  //     icon: ShoppingCart
  //   }
  // }
}
</script>

<style>
  .Main-Index{
    text-align: center;
    height: 500px;
    border: 1px solid red;
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

  .Main-SearchBox{
    width: 260px;
    height: 35px;
    border: 1px solid grey;
    border-radius: 10px;
    margin: auto;
    
  }
</style>
