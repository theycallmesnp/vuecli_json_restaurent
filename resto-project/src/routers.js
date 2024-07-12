import HomePage from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/Login.vue";
import AddPage from "./components/Add.vue";
import UpdatePage from "./components/Update.vue" ;
import AddCategory from "./components/AddCategory.vue";
import GetCategory from "./components/GetCategory.vue";
import UpdateCategory from "./components/UpdateCategory.vue"
import { createRouter,createWebHistory } from "vue-router";

const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
            name:"SignUp",
            component:SignUp,
            path:'/Sign-up'
    },{
        name:"LoginPage",
        component:LoginPage,
        path:'/login-page'
    },
    {
        name:"AddPage",
        component:AddPage,
        path:'/AddPage'
    },
    {
        name:'UpdatePage',
        component:UpdatePage,
        path:'/UpdatePage/:id'
    },
    {
        name:'AddCategory',
        component:AddCategory,
        path:'/AddCategory'
    },
    {
        name:'GetCategory',
        component:GetCategory,
        path:'/GetCategory'
    },
    {
        name:'UpdateCategory',
        component:UpdateCategory,
        path:'/UpdateCategory/:id'
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router