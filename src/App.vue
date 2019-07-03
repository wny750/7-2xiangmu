<template>
  <div id="app">
    <Header1 v-show='$root.$data.bNav1'></Header1>
    <Header2 v-show='$root.$data.bNav2'></Header2>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
    
  </div>
</template>

<script>

  import Header1 from './components/Header1'
  import Header2 from './components/Header2.vue'
  import Footer from './components/Footer.vue'
  import {mapGetters} from 'vuex'
  import * as types from './store/types.js'

  export default{
    name: 'app',
    components: {
      Header1,Footer,Header2
    },
    watch:{
      $route:{
        handler(to){
          let path = to.path;
          console.log(path);
          if(/home/.test(path)){
            this.$root.$data.bNav1 = true;
            this.$root.$data.bNav2 = false;
          }else{
              this.$root.$data.bNav1 = false;
              this.$root.$data.bNav2 = true;

          }
          // if(/login|page11/.test(path)){
          // }
        },
        immediate:true
      }
    },
    computed:mapGetters(['bNav1','bNav2','bloading'])
  }
</script>
<style>
*{margin:0;padding:0;list-style:none;}
</style>
