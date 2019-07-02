<template>
    <ul id="menudiv">
        <router-link v-for='item of list' :key='item._id' class='tm_div' tag="li" :to='item.router'>
            <img :src='`${baseUrl + item.img}`'>
            <span>{{item.cont}}</span>
        </router-link>
	</ul>
</template>
<style scoped>
    #menudiv{ padding-bottom: 45px;overflow: hidden;margin:0 auto;position:relative;width:100%;max-width:500px;height:auto;margin-top:0px;}
    .tm_div{margin:0 auto;width:93%;max-width:500px;height:auto;margin-top:20px;overflow:hidden;position:relative;cursor:pointer;text-align:center;float:left;width:30.67%;height:auto;margin-left:2%;overflow:hidden;margin-top:10px;}
    .tm_div img{position:relative;width:100%;top:0px;left:0px;}
    .tm_div span{position:absolute;width:100%;height:12px;line-height:12px;text-align:left;top:8px;left:8px;text-decoration:none;color:#fff;}
</style>
<script>
    export default {
        props:["list","dataName"]
    }
</script>