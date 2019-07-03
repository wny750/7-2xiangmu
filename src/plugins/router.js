import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../pages/Home"
import Login from "../pages/Login"
import Reg from "../pages/Reg"
import Onsale from "../pages/Onsale"
import Onsale_0 from "../pages/Onsale_0"
import Onsale_2 from "../pages/Onsale_2"
import Onsale_5 from "../pages/Onsale_5"
import Hot from "../pages/Hot"
import Order from "../pages/Order"
import Rank from "../pages/Rank"
import Search from "../pages/Search"
import Ask from "../pages/Ask"
import Error from "../components/Error"

let routes = [
    
    {path:'/home',component:Home},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/onsale',component:Onsale},
    {path:'/onsale_0',component:Onsale_0},
    {path:'/onsale_2',component:Onsale_2},
    {path:'/onsale_5',component:Onsale_5},
    {path:'/hot',component:Hot},
    {path:'/order',component:Order},
    {path:'/rank',component:Rank},
    {path:'/search',component:Search},
    {path:'/ask',component:Ask},
    {path:'/',redirect:'/home'},
    {path:'*',component:Error}
];
let router = new VueRouter({
    mode:'history',
    routes
})

export default router;