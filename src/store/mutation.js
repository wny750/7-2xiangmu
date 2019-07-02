import * as types from './types';
export default {
    [types.VIEW_NAV1] :(state,payload) => state.bNav1 = payload ,
    [types.VIEW_NAV2] :(state,payload) => state.bNav2 = payload ,
    [types.VIEW_LOADING] :(state,payload) => state.bLoading = payload ,
    [types.UPDATE_BANNER] :(state,payload) => state.banner = payload ,
    [types.UPDATE_HOME] :(state,payload) => state.home = payload ,
    [types.UPDATE_HOT] :(state,payload) => state.hot = payload ,
    [types.UPDATE_ASK] :(state,payload) => state.ask = payload ,
    [types.UPDATE_USER] :(state,payload) => state.user = payload ,
    [types.UPDATE_SEARCH] :(state,payload) => state.search = payload ,
    [types.UPDATE_ORDER] :(state,payload) => state.order = payload ,
    [types.UPDATE_ONSALE] :(state,payload) => state.onsale = payload ,
    [types.UPDATE_ONSALE_0] :(state,payload) => state.onsale_0 = payload ,
    [types.UPDATE_ONSALE_2] :(state,payload) => state.onsale_2 = payload ,
    [types.UPDATE_ONSALE_5] :(state,payload) => state.onsale_5 = payload ,
    [types.UPDATE_RANK] :(state,payload) => state.rank = payload 
}