import {createWebHistory, createRouter} from 'vue-router';
import MainPage from "../components/MainPage.vue";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart.vue";
import ContactForm from "../components/OrderCheck/ContactForm.vue";
import AboutUs from "../components/AboutUs/AboutUs.vue";

const routes = [
    {path:'/home', name: 'MainPage', component: MainPage},
    {path:'/ShoppingCart', name: 'ShoppingCart', component: ShoppingCart},
    {path:'/contactform', name: 'ContactForm', component: ContactForm},
    {path:'/aboutus', name: 'AboutUs', component: AboutUs},

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;