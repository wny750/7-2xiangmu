<template>
<div id="frame">
  <div id="con">
	  <router-link v-for="(item) of $store.state.onsale_2" :key="item._id" tag="div" class="tm_div" to="#ILOVEYOUDINGKE">
			<div class="tm_pro">
				<a href="#ILOVEYOUDINGKE"><img :src="`${baseUrl+item.img}`" width="100%"></a>
				<div class="tm_type">
					<a href="#ILOVEYOUDINGKE"></a>
				</div>
				<div class="tm_title">
					<div class="tm_title_bg"></div>
					<div class="tm_title_con">
						<div class="tm_title_con_1"><a href="##">{{item.title}}</a></div>
						<div class="tm_title_con_2"><a href="##">{{item.smtitle}}</a></div>
					</div>
				</div>
			</div>
			<div class="tm_price">
				<div class="tm_price_1">&nbsp;￥{{item.price}}起<font style="font-size:20px;"></font></div>
				<div class="tm_price_2">剩余时间：<span class="servertime">{{item.time}}</span></div>
			</div>
	  </router-link>
		<div class="more" id="more" @click="show">点击查看更多</div>
  </div>
</div>
</template>
<style scoped>
#frame{width:100%;height:auto;position:relative;min-height:100%;top:0px;left:0px;padding-bottom: 45px;}
#con{width:100%;height:auto;position:relative;left:0px;top:-10px;background-color:none;z-index:4}
.tm_div{margin:0 auto;width:93%;max-width:500px;height:auto;margin-top:20px;overflow:hidden;position:relative;cursor:pointer;text-align:center;}
.tm_ul{float:left;width:100%;background-color:#ffffff;height:30px;line-height:30px;text-align:center;}
.tm_ul a{text-decoration:none;color:#666666;display:block;float:left;height:auto;width:100%;}
.tm_pro{float:left;width:100%;max-width:500px;max-height:270px;background-color:#000000;position:relative;overflow:hidden;text-align:left;}
.tm_type{float:left;height:25px;line-height:25px;opacity:0.5;filter:alpha(opacity=50);background-color:#000000;position:absolute;top:5px;left:0px;z-index:1;color:#ffffff;}
.tm_type a{color:#ffffff;text-decoration:none;}
.tm_title{float:left;width:100%;height:auto;position:absolute;padding-bottom:5px;bottom:3px;left:0px;color:#ffffff;}
.tm_title_bg{float:left;width:100%;height:100%;opacity:0.5;filter:alpha(opacity=50);background-color:#000000;position:absolute;bottom:0px;left:0px;z-index:1;}
.tm_title_con{float:left;width:100%;height:100%;position:relative;bottom:0px;left:0px;z-index:2;}
.tm_title_con_1{float:left;width:96%;height:20px;text-align:left;margin-left:2%;line-height:20px;}
.tm_title_con_1 a{color:#FF5400;text-decoration:none;}
.tm_title_con_2{float:left;width:96%;height:auto;text-align:left;overflow:hidden;margin-left:2%;line-height:16px;font-size:12px;}
.tm_title_con_2 a{color:#ffffff;text-decoration:none;}
.tm_price{float:left;width:100%;height:40px;line-height:40px;background-color:#D76B56;position:relative;top:-3px;color:#ffffff;text-align:left;}
.tm_price_1{float:left;width:32%;}
.tm_price_2{float:left;width:67%;text-align:right;}
.more{margin:0 auto;width:93%;max-width:500px;height:30px;line-height:30px;margin-top:0px;margin-bottom:20px;overflow:hidden;position:relative;cursor:pointer;text-align:center;}
</style>
<script>
    import {UPDATE_ONSALE_2} from '../store/types';
    let _page = 1;
    let _limit = 5;
    export default {
        methods:{
            show(){
                _page +=1;
                this.$store.dispatch(UPDATE_ONSALE_2,{_page,_limit})
            }
        },
        activated(){
            this.$store.dispatch(UPDATE_ONSALE_2,{_page:1,_limit:5})
        }
    }
</script>
  