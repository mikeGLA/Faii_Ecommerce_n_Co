<template>
    <div class="Card-Index" v-for="(NamePro) in ProductData" :key="NamePro">
        <div class="Product-Picture">
            <img :src="require('../../assets/TestCard.jpg')" :width="120" :height="120">
        </div>
        <div class="Product-Name">{{NamePro.ProductName}}</div>
        <div class="Product-Price-Sold">{{NamePro.ProductPrice}} Baht</div>
        <button @click="addCart()" class="Product-Add">Add</button>
        <button @click="RemoveCart()" class="Product-Rem">Remove</button>
    </div>
</template>

<script>


export default {
    name: 'productCard1',
    data(){
      return{
        inCartCounting: 0,
        ProductData:[
            {
                ProductName:"Hot Glue1",
                ProductPrice: 40,
            },
            {
                ProductName:"Hot Glue2",
                ProductPrice: 35,
            },
            {
                ProductName:"Hot Glue3",
                ProductPrice: 30,
            },
            {
                ProductName:"Hot Glue4",
                ProductPrice: 25,
            },
            {
                ProductName:"Hot Glue5",
                ProductPrice: 20,
            }
        ],
      }
    },
    methods:{
        addCart(){
            this.$emit('inCartCounting', 0)
        },
        RemoveCart(){
            this.$emit('inCartCounting', 0)
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