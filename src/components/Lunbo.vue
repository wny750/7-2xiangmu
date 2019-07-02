<template>
    <div class="swiper-wrapper">
        <ul style="list-style: none;margin:0;padding:0;">
            <li><a href="#"><img alt="" id="pc_0" src="../assets/uploadpic/AD/20140717093424.jpg" width=100%/></a></li>
            <li><a href="#"><img alt="" id="pc_1" src="../assets/uploadpic/AD/20140603033523.jpg" width=100%/></a></li>					
            <li><a href="#"><img alt="" id="pc_2" src="../assets/uploadpic/AD/20140520114225.jpg" width=100% /></a></li>						
        </ul>			
    </div>
</template>
<style>
.swiper-wrapper {
  margin-top: 0.6rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.swiper-wrapper ul{
    overflow: hidden;
}
.swiper-wrapper ul li {
  float: left;
  position: relative;
}
.swiper-wrapper ul li img {
  width: 100%;
  display: block;
}
</style>
<script>
    import $ from 'jquery';
    import Swipe from '../assets/js/swipe.js';
    export default{
        mounted(){
            new Swipe($(".swiper-wrapper")[0],{
                auto: 2000,
                continuous: true,
                stopPropation: true,
                callback: function(index, element) {
                    $(".swiper-wrapper ul li").removeClass("active");
                    $(".swiper-wrapper ul li")
                    .eq(index)
                    .addClass("active");
                }
            })
        }
    }
</script>