<template>
    <div class='home'>
        <Swiper :banners='$store.state.banner'></Swiper>
        <List :list="$store.state.home"  :dataName="'home'"></List>
    </div>
</template>
<style>
    .home{background:url(../assets/images/bg.gif) repeat }
</style>

<script>
    import Swiper from '../components/Lunbo.vue';
    import List from '../components/List.vue';
    import * as types from '../store/types.js';
    export default {
        components:{Swiper,List},
        activated(){
            this.$store.dispatch(types.UPDATE_HOME)
            this.$store.dispatch(types.UPDATE_BANNER)
        }
    }
</script>  