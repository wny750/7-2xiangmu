import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../pages/Home"
import Login from "../pages/Login"
import Reg from "../pages/Reg"
import onsale_0 from "../pages/Onsale_0"
import onsale_2 from "../pages/Onsale_2"
import onsale_5 from "../pages/Onsale_5"
import order from "../pages/Order"
import rank from "../pages/Rank"
import search from "../pages/Search"
import page31 from "../pages/page3-1"
import page32 from "../pages/page3-2"
import page33 from "../pages/page3-3"
import Error from "../components/Error"

let routes = [
    
    {path:'/home',component:Home},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/onsale_0',component:onsale_0},
    {path:'/onsale_2',component:onsale_2},
    {path:'/onsale_5',component:onsale_5},
    {path:'/order',component:order},
    {path:'/rank',component:rank},
    {path:'/search',component:search},
    {path:'/page31',component:page31},
    {path:'/page32',component:page32},
    {path:'/page33',component:page33},
    {path:'/',redirect:'/home'},
    {path:'*',component:Error}
];
let router = new VueRouter({
    mode:'history',
    routes
})

export default router;