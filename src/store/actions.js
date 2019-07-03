import axios from 'axios';
import {
    VIEW_NAV1,
    VIEW_NAV2,
    VIEW_LOADING,
    UPDATE_BANNER,
    UPDATE_HOME,
    UPDATE_HOT,
    UPDATE_ASK,
    UPDATE_SEARCH,
    UPDATE_ORDER,
    UPDATE_ONSALE,
    UPDATE_ONSALE_0,
    UPDATE_ONSALE_2,
    UPDATE_ONSALE_5,
    UPDATE_RANK,
    UPDATE_USER,
} from './types';

export default{
    [VIEW_NAV1] : ({state,commit},payload) =>commit(VIEW_NAV1,payload),
    [VIEW_NAV2]: ({state,commit},payload) =>commit(VIEW_NAV2,payload),
    [VIEW_LOADING]: ({state,commit},payload) =>commit(VIEW_LOADING,payload),
    [UPDATE_BANNER]: async ({state,commit},payload) =>{
        let res = await axios({url:'/api/banner',params : {_limit:3}});  
       commit(UPDATE_BANNER,res.data.data)
    },
    [UPDATE_HOME]:async ({state,commit},payload) =>{
        let res = await axios({url:'/api/home',params : {_page:1,_limit:10}});
       commit(UPDATE_HOME,res.data.data)
       console.log(res.data)
    },
    [UPDATE_HOT]:async ({state,commit},payload) =>{
        let res = await axios({url:'/api/hot',params : {_page:1,_limit:3}});
        console.log(res.data)
       commit(UPDATE_HOT,res.data.data);
       
    },
    [UPDATE_ASK]: async ({state,commit},payload) =>{
        let res = await axios({url:'/api/ask',params : {_page:1,_limit:3}});
       commit(UPDATE_ASK,res.data.data)
       console.log(res.data)
    },
    [UPDATE_SEARCH]: async ({state,commit},payload) =>{
        let res = await axios({url:'/api/search',params : {_page:1,_limit:3}});
       commit(UPDATE_SEARCH,res.data.data[0])
       console.log(res.data)
    },
    [UPDATE_ORDER]: async ({state,commit},payload) =>{
        let res = await axios({url:'/api/order',params : {_page:1,_limit:3}});
       commit(UPDATE_ORDER,res.data.data)
       console.log(res.data)
    },
    [UPDATE_ONSALE]: async ({state,commit},payload) =>{
        let res = await axios({url:'/api/onsale',params : {_page:1,_limit:3}});
       commit(UPDATE_ONSALE,res.data.data)
       console.log(res.data)
    },
    [UPDATE_ONSALE_0]:async ({state,commit},payload) =>{
        let res = await axios({url:'/api/onsale_0',params : {_page:1,_limit:3}});
       commit(UPDATE_ONSALE_0,res.data.data)
       console.log(res.data)
    },
    [UPDATE_ONSALE_2]: async ({state,commit},{_page,_limit}) =>{
        let res = await axios({url:'/api/onsale_2',params : {_page,_limit}});//?????
       commit(UPDATE_ONSALE_2,res.data.data)
    },
    [UPDATE_ONSALE_5]: async ({state,commit},payload) =>{
        let res = await axios({url:'/api/onsale_5',params : {_page:1,_limit:3}});
       commit(UPDATE_ONSALE_5,res.data.data)
    },
    [UPDATE_RANK]: async ({state,commit},payload) =>{
        let res = await axios({url:'/api/rank',params : {_page:1,_limit:3}});
       commit(UPDATE_RANK,res.data.data)
    },
    [UPDATE_USER]: async ({state,commit},payload) =>{
        let res = await axios({url:'/api/user',params : {_page:1,_limit:3}});
       commit(UPDATE_USER,res.data.data)
    },
}