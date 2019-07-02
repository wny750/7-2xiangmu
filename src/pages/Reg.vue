<template>
  <div id="frame">
  <div id="con">

		<div id="login_div">


      <input name="t" id="t" value="" type="hidden">

      <div class="userline_info"></div>

      <div class="userline">
        <div class="userline_1">
          用户名&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div class="userline_2">
          <input type="text" name="userId" id="userId" placeholder="请输入用户名/手机/邮箱" v-model="username"/>
        </div>
        <div class="userline_3">
          <img src="../assets/images/login.png">
        </div>
      </div>

      <div class="userline_info" id="username_info"></div>

      <div class="userline">
        <div class="userline_1 c1">
          密码&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div class="userline_2">
          <input name="userPassword" id="userPassword" type="password" placeholder="请输入密码" v-model="password"/>
        </div>
        <div class="userline_3">
          <img src="../assets/images/lock.png">
        </div>
      </div>

          <div class="userline_info" id="pass_info">{{mess}}</div>

          <div class="login_button" >
            <input type="submit" value="注册" style="width:100%;height:100%;background:none;border:none;color:#ffffff;font-size:16px;" @click="reg">
          </div>

          <div class="reg_div">

            <div class="reg_div_1">
              
            </div>

            <div class="reg_div_2">
              <router-link to="/login">
                去登录
              </router-link>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                username:'',
                password:'',
                mess:''
            }
        },
        methods:{
            reg(){
                axios({
                    url:'/api/reg',
                    method:'post',
                    mess:'',
                    data:{
                        username:this.username,
                        password:this.password
                    }
                }).then(
                    res=>{
                        if(res.data.err ===0){
                            this.mess = res.data.mess;
                            setTimeout(function(){
                                location.href = './login'
                            },1000)
                        }else{
                            this.mess =res.data.mess
                        }
                    }
                )
            }
        }
    }
</script>
<style scoped>
#login_div{margin:0 auto;width:93%;max-width:500px;height:auto;margin-top:20px;overflow:hidden;position:relative;cursor:pointer;}

.userline{float:left;width:100%;height:30px;background-color:#ffffff;line-height:30px;}

.userline_1{float:left;width:30%;height:30px;background-color:#5CB4E2;color:#ffffff;text-align:right;}

.userline_2{float:left;width:60%;height:30px;text-align:center;}

.userline_2 input{border:none;background-color:#ffffff;width:90%;font-size:14px;}

.userline_3{float:left;width:8%;height:20px;text-align:center;margin-top:5px;}

.userline_3 img{float:right;height:20px;vertical-align:middle;}

.userline_2_1{float:left;width:50%;height:30px;text-align:center;}

.userline_2_1 input{border:none;background-color:#ffffff;width:90%;font-size:14px;}

.userline_3_1{float:left;width:20%;height:20px;margin-top:5px;}

.userline_3_1 img{height:20px;vertical-align:middle;float:right;}

.userline_info{float:left;width:100%;height:25px;line-height:20px;text-align:center;color:red;}

.c1{background-color:#EBD03B;}

.c2{background-color:#8966FD;}

.c3{background-color:#B4ABFC;}

.c4{background-color:#F18075;}

.asterisk{color:red;}

.login_button{float:left;width:100%;height:30px;margin-top:10px;background-color:#FF5400;line-height:30px;color:#ffffff;font-size:16px;text-align:center;cursor:pointer;}

.reg_div{float:left;width:100%;height:30px;line-height:30px;margin-top:10px;}

.reg_div_1{float:left;width:50%;height:100%;}

.reg_div_2{float:left;width:50%;height:100%;text-align:right;}

</style>

