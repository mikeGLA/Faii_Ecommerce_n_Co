<template>
    <div class="Card-Index">
        <div class="Product-Picture">
            <img :src="require('../../assets/TestCard.jpg')" :width="120" :height="120">
        </div>
        <div class="Product-Name">Shiba Doggi</div>
        <div class="Product-Price-Sold">696969 Baht</div>
        <div class="Product-Incart-Count">{{counting}} In Cart</div>
        <button @click="addCart()" class="Product-Add">Add</button>
        <button @click="RemoveCart()" class="Product-Rem">Remove</button>
    </div>
</template>

<script>

export default {
    name: 'productCard1',
    data(){
      return{
        counting: 0,
      }
    },
    methods:{
        addCart(){
            this.counting++
        },
        RemoveCart(){
            this.counting--
        }
    },
}

</script>

<style>
    .Card-Index{
        text-align: center;
        width: 140px;
        height: 220px;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .Product-Incart-Count{
        color: blue;
    }

    .Product-Add{
        border: 1px solid rgb(160, 213, 255);
        background: rgb(137, 203, 255);
        width: 100px;
        margin: auto;
    }

    .Product-Rem{
        border: 1px solid rgb(160, 213, 255);
        background: red;
        width: 100px;
        margin: auto;
    }
</style>