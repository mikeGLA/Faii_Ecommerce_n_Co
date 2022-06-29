<template>
    <div class="NavigationBar-Index">
        <div class="NavigationBar-Home"></div>
        <div class="NavigationBar-Cart"></div>
        <div class="NavigationBar-OrderCheck"></div>
        <div class="NavigationBar-AboutUs"></div>
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
        flex-direction: row;
        justify-content: space-evenly;
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
        border: 1px solid yellow;
        width: 70px;
        text-align: center;
    }

    .NavigationBar-Cart{
        border: 1px solid green;
        width: 70px;
        text-align: center;
    }

    .NavigationBar-OrderCheck{
        border: 1px solid blue;
        width: 70px;
        text-align: center;
    }

    .NavigationBar-AboutUs{
        border: 1px solid purple;
        width: 70px;
        text-align: center;
    }


</style>