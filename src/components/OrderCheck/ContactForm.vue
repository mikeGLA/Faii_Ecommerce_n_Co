<template>
    <div class="ContactForm-Index">
        <div class="Subject-Text">
            <h4>
                Contact Form For Large Quantity Buyer
            </h4>
        </div>
        <div class="ContactForm-Input-Index">
            <input class="Input-Box" type="text" placeholder="First Name" v-model="this.formData.firstName" required>
            <input class="Input-Box" type="text" placeholder="Last Name" v-model="this.formData.lastName" required>
            <input class="Input-Box-Not-Required" type="text" placeholder="Company Name" v-model="this.formData.companyName">
            <input class="Input-Box" type="number" placeholder="Phone Number" v-model="this.formData.phoneNumber" required>
            <input class="Input-Box" placeholder="Email Address" type="email" v-model="this.formData.emailAddress" required>
            <input class="Input-Box-Not-Required" placeholder="Line ID" type="text" v-model="this.formData.lineId">
        </div>
        <div><h5>Select the Product you Interested</h5></div>
        <div class="Product-Group" >
            <!-- Card to select for Niji -->
            <div class="Selected-Niji" v-show="this.formData.box1 === false">
                <img src="../../assets/Niji_L.jpg" :width="150" :height="150">
                <div>NiJi</div>
            </div>
            <div class="Selected-Niji-Active" v-show="this.formData.box1 === true">
                <img src="../../assets/Niji_L.jpg" :width="150" :height="150">
                <div>NiJi</div>
            </div>
            <input @click="this.formData.box1 = !this.formData.box1" v-model="this.formData.box1" type="checkbox">
            <!-- Card to select for ebond -->
            <div class="Selected-Ebond" v-show="this.formData.box2 === false">
                <img src="../../assets/E_L.jpg" :width="150" :height="150">
                <div>NiJi</div>
            </div>
            <div class="Selected-Ebond-Active" v-show="this.formData.box2 === true">
                <img src="../../assets/E_L.jpg" :width="150" :height="150">
                <div>NiJi</div>
            </div>
            <input @click="this.formData.box2 = !this.formData.box2" v-model="this.formData.box2" type="checkbox">
            <!-- Card to select for 999 -->
            <div class="Selected-NineNineNine" v-show="this.formData.box3 === false">
                <img src="../../assets/999_L.jpg" :width="150" :height="150">
                <div>999</div>
            </div>
            <div class="Selected-NineNineNine-Active" v-show="this.formData.box3 === true">
                <img src="../../assets/999_L.jpg" :width="150" :height="150">
                <div>999</div>
            </div>
            <input @click="this.formData.box3 = !this.formData.box3" v-model="this.formData.box3" type="checkbox">
            <!-- Card to select for super b -->
            <div class="Selected-SuperB" v-show="this.formData.box4 === false">
                <img src="../../assets/B_L.jpg" :width="150" :height="150">
                <div>Super B</div>
            </div>
            <div class="Selected-SuperB-Active"  v-show="this.formData.box4 === true">
                <img src="../../assets/B_L.jpg" :width="150" :height="150">
                <div>Super B</div>
            </div>
            <input @click="this.formData.box4 = !this.formData.box4" v-model="this.formData.box4" type="checkbox">
        </div>
        <div class="ContactForm-Submit-Button">
            <button class="Submit-Button" @click="debugSubmit()">Submit</button>
            <button class="Reset-Button" @click="resetButton()">Reset</button>
            <!-- @click="()=>$router.go()" ทำให้ทั้งหน้ารีเฟรชเคลียร์แรมแต่ต้องมี cookie ก่อนถึงจะใช้
            ได้ไม่งั้น select ของ Navbar จะเด้งกลับไปตรง MainPage -->
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
            formData: {
                firstName:"",
                lastName:"",
                companyName:"",
                phoneNumber:"",
                emailAddress:"",
                lineId:"",
                box1:false,
                box2:false,
                box3:false,
                box4:false,
                // box5:false,
            }
        }
    },
    methods:{
        resetButton(){
            this.formData.firstName="";
            this.formData.lastName="";
            this.formData.companyName="";
            this.formData.phoneNumber="";
            this.formData.emailAddress="";
            this.formData.lineId="";
            this.formData.box1=false;
            this.formData.box2=false;
            this.formData.box3=false;
            this.formData.box4=false;
            // this.formData.box5=false;
        },
        debugSubmit(){
            if(this.formData.firstName != "" && 
            this.formData.lastName != "" &&
            this.formData.phoneNumber != "" &&
            this.formData.emailAddress != ""){
                console.log(this.formData) 
            }else{alert("Please Fill All Fill Form")}

        },
    },
    mounted(){
        console.log(this.formData)
    }
}

</script>

<style>
    .ContactForm-Index{
        text-align: center;
        height: 1300px;
    }

    .Subject-Text{
        margin-top: 30px;
    }

    .ContactForm-Input-Index{
        margin: 20px 10px 0 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .Input-Box{
        height: 30px;
        border-radius: 10px;
    }
    .Input-Box-Not-Required{
        height: 30px;
        border-radius: 10px;
    }
    .Input-Box::placeholder{
        color: red;
        font-weight: bold;
    }

    .ContactForm-Submit-Button{
        margin-top: 30px;
    }

    .Submit-Button{
        background: rgb(137, 203, 255);
        border: solid 2px grey;
        padding: 10px 30px;
        border-radius: 30px;
        margin-right: 20px;
    }

    .Reset-Button{
        background: red;
        border: solid 2px grey;
        padding: 10px 30px;
        border-radius: 30px;
        margin-left: 20px;
    }

    .Product-Group{
        display: flex;
        /* width: 100px; */
        flex-wrap: wrap;
        /* line-height: 40px; */
        justify-content: center;
        justify-items: center;
        gap: 10px;
    }
    .Selected-Niji{
        margin: 5px;
    }
    .Selected-Ebond{
        margin: 5px;
    }
    .Selected-SuperB{
        margin: 5px;
    }
    .Selected-NineNineNine{
        margin: 5px;
    }
    .Selected-Niji-Active{
        border: 5px solid rgb(137, 203, 255);
        background: rgb(137, 203, 255);
    }
    .Selected-Ebond-Active{
        border: 5px solid rgb(137, 203, 255);
        background: rgb(137, 203, 255);
    }
    .Selected-SuperB-Active{
        border: 5px solid rgb(137, 203, 255);
        background: rgb(137, 203, 255);
    }
    .Selected-NineNineNine-Active{
        border: 5px solid rgb(137, 203, 255);
        background: rgb(137, 203, 255);
    }
</style>