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
            <input class="Input-Box" type="text" placeholder="Company Name" v-model="this.formData.companyName">
            <input class="Input-Box" type="number" placeholder="Phone Number" v-model="this.formData.phoneNumber" required>
            <input class="Input-Box" type="text" placeholder="Email" v-model="this.formData.emailAddress" required>
        </div>
        <div><h5>Select the Product you Interested</h5></div>
        <div class="Product-Group" >
            <div :class="NijiCC" @click="NijiSelect">
                <img src="../../assets/Niji_L.jpg" :width="150" :height="150">
                <input class="NijiInput" type="checkbox" v-model="this.formData.box1">
                <div>NiJi</div>
            </div>
            <div class="Selected-Ebond" >
                <img src="../../assets/E_L.jpg" :width="150" :height="150">
                <!-- <input type="checkbox" v-model="this.formData.box2"> -->
                <div>E-Bond</div>
            </div>
            <div class="Selected-SuperB" >
                <img src="../../assets/B_L.jpg" :width="150" :height="150">
                <!-- <input type="checkbox" v-model="this.formData.box4"> -->
                <div>Super B</div>
            </div>
            <div class="Selected-NineNineNine" >
                <img src="../../assets/999_L.jpg" :width="150" :height="150">
                <!-- <input type="checkbox" v-model="this.formData.box3"> -->
                <div>999</div>
            </div>
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
                box1:false,
                box2:false,
                box3:false,
                box4:false,
                box5:false,
            },
            NijiCC: "",
            EbondCC: "",
            SuperBCC: "",
            NineNineNineCC: "",
        }
    },
    methods:{
        resetButton(){
            this.formData.firstName="";
            this.formData.lastName="";
            this.formData.companyName="";
            this.formData.phoneNumber="";
            this.formData.emailAddress="";
            this.formData.box1=false;
            this.formData.box2=false;
            this.formData.box3=false;
            this.formData.box4=false;
            this.formData.box5=false;
            this.formData.NijiCC= "";
            this.formData.EbondCC= "";
            this.formData.SuperBCC= "";
            this.formData.NineNineNineCC= "";

        },
        debugSubmit(){
            console.log(this.formData)
        },
        NijiSelect(){
            this.NijiCC= "Selected-Niji-Active",
            // this.formData.box1=true,
            console.log("TestNiji")
            console.log(this.formData.box1)
        },
        EbondSelect(){
            this.EbondCC= "Selected-Ebond-Active";
            // this.formData.box2=true;
        },
        SuperBSelect(){
            this.SuperBCC= "Selected-SuperB-Active";
            // this.formData.box2=true;
        },
        NineNineNineSelect(){
            this.NineNineNineCC= "Selected-NineNineNine-Active";
            // this.formData.box2=true;
        }
    }
}

</script>

<style>
    .ContactForm-Index{
        text-align: center;
        height: 900px;
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

    .NijiInput{
        display: none;
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