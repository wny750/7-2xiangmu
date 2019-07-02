<template>
	<div id="frame">	
		<div id="con">
			<div class="search_div">
				<!-- <input name="jumpPage" id="jumpPage" type="hidden" value="1"> -->
				<table border="1px" bordercolor="#D8D8D6">
					<tr bgcolor="#4fc4f6">
						<td height=30 style="padding:0px;">
							<div style="float:left;width:85%;background-color:#ffffff;text-align:center;">
								<input type="text" name="keys" id="keys" value="" placeholder=" 请输入关键字"/>
							</div>
							<div id="search_b" style="float:left;width:15%;text-align:center;">
								<input type="submit" value="" style="float:left;width:100%;height:100%;background:url(../assets/images/search4.png) center no-repeat">
							</div>
						</td>
					</tr>
				</table>
				<table border="1px" bordercolor="#D8D8D6" style="margin-top:10px;width:100%;">
					<tr>
						<td><img src="../assets/images/hot.png" align="absmiddle" height=20>境内热门点击</td>
					</tr>
					<tr>
						<td width="100%" style="padding:0px 0px 5px 5px;position:relative;">
							<ul class="tu">
								<router-link v-for="(item) of $store.state.search.data1" :key="item._id" tag="li" to="/123">
									<a>
										<img :src="`${baseUrl+item.img}`">
										<span ></span>
										<span>{{item.title}}</span>
									</a>
								</router-link>
							</ul>
						</td>
					</tr>					
					<tr>
						<td><img src="../assets/images/hot.png" align="absmiddle" height=20>境外热门点击</td>
					</tr>
					<tr>
						<td width="100%" style="padding:0px 0px 5px 5px;position:relative;">					
							<ul class="tu">
								<router-link v-for="(item) of $store.state.search.data2" :key="item._id" tag="li" to="/123">
									<a>
										<img :src="`${baseUrl+item.img}`">
										<span ></span>
										<span>{{item.title}}</span>
									</a>
								</router-link>
							</ul>
						</td>
					</tr>
					<tr>
						<td><img src="../assets/images/hot.png" align="absmiddle" height=20> 热门搜索词</td>
					</tr>
					<tr>
						<td width="100%" style="padding:0px 0px 5px 5px;position:relative;">										
							<router-link v-for="(item) of $store.state.search.data3" :key="item._id" tag="div" to="/123" class="cont">
								<div>
									<span></span>
									<span>{{item.title}}</span>
								</div>
							</router-link>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>
<style scoped>
#frame{width:100%;height:auto;position:relative;min-height:100%;top:0px;left:0px;padding-bottom: 45px;padding-top:35px;}
#con{width:100%;height:auto;position:relative;left:0px;top:-10px;background-color:none;z-index:4}
.search_div{margin:0 auto;width:93%;max-width:500px;height:auto;margin-top:20px;position:relative;cursor:pointer;}
.search_div input{border:none;background-color:#ffffff;width:98%;font-size:18px;height:30px;line-height:30px;}
.search_div .tu{float:left;width:100%;height:auto;}
.search_div .tu li{float:left;width:33.3%;height:auto;margin-top:8px;}
.search_div .tu li a{display: block;margin-right:5px;position:relative;overflow:hidden;text-decoration:none;color:#ffffff;}
.search_div .tu li a img{float:left;position:relative;width:150%;left:-24%;height: auto;height:66px;}
.search_div .tu li a>span:nth-of-type(1){display:block;position:absolute;width:100%;bottom:0px;left:0px;text-align:center;background-color:#000000;opacity:0.5;filter:alpha(opacity=50);height:20px;}
.search_div .tu li a>span:nth-of-type(2){display:block;position:absolute;width:100%;bottom:0px;left:0px;text-align:center;height:20px;line-height:20px;}
.search_div .cont{float:left;width:25%;height:auto;margin-top:5px;}
.search_div .cont div{position:relative;margin-right:5px;overflow:hidden;text-align:center;width: 100%;}
.search_div .cont div>span:nth-of-type(1){display:block;position:relative;bottom:0px;left:0px;text-align:center;background-color:#f1f1f1;opacity:0.5;filter:alpha(opacity=50);height:30px;border:1px solid #cccccc}
.search_div .cont div>span:nth-of-type(2){display:block;position:absolute;width:100%;bottom:0px;left:0px;text-align:center;height:30px;line-height:30px;color:#000000;font-size:13px;}
</style>
<script>
    import {UPDATE_SEARCH} from '../store/types.js';
    export default {
        activated(){
            this.$store.dispatch(UPDATE_SEARCH)
        }
    }
</script>
  