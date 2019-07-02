<template>
<div id="top">
    <router-link to="/home" id="logo"  style="left:-5px;"><img src="../assets/images/y_logomain.jpg" align="top"></router-link>
    <a id="title">旅游圣地</a>
    <span id="list">
        <router-link to="/home"><img src="../assets/images/home.png" align="top"></router-link>		
    </span>
</div>
</template>
<style scoped>
#top{width:100%;height:40px;position:relative;left:0px;top:0px;background-color:#ffffff;text-align:center;line-height:40px;color:#FF5400;font-size:14px;font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;z-index:4;border-bottom:1px solid #cccccc;}
#logo{position:absolute;height:30px;top:5px;left:8px;z-index:3;text-decoration:none;color:#ffffff;}
#logo img{height:30px;margin:0px;padding:0px;cursor:pointer;}
#title{position:absolute;width:100%;height:30px;line-height:30px;top:5px;left:0px;text-align:center;z-index:2;}
#search{position:absolute;height:24px;top:8px;right:35px;z-index:3;}
#search img{height:24px;margin:0px;padding:0px;cursor:pointer;}
#list{position:absolute;height:24px;top:8px;right:10px;z-index:3;color:#FF5400;text-decoration:none;line-height:24px;}
#list img{height:24px;margin:0px;padding:0px;cursor:pointer;}
#list a{text-decoration:none;color:#FF5400;}
#list a:first-child{margin-right:5px;}
</style>