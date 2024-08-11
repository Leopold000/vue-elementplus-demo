<template>
    <div id="backcont">
        <div class="meituan-content">
            <div class="login-cont ">
                  <div class="meituan-title">燃机寿命管理平台</div>
                  <div class="meituan-user">
                    <p>账号</p>
                    <el-input clearable v-model="account" class="inptflex" placeholder="请输入账号" />
                  </div>
                  <div class="meituan-user">
                    <p>密码</p>
                    <el-input type="password" show-password v-model="password" class="inptflex" placeholder="请输入密码" />
                  </div>
                  <div class="meituan-user">
                    <p>验证码</p>
                    <el-input v-model="code"  style="width: 172px; float: left" maxlength="5"></el-input>
					          <el-image :src="captchaImg" class="captchaImg" @click="getCaptcha"></el-image>
                  </div>
                  <!-- 登陆和注册按钮的切换 -->
                   <div class="reg-view" @click="regi=regi == '登录'? '注册':'登录'"><p>{{ regi }}</p></div>
                   <!-- 登陆或注册按钮提交 -->
                   <el-button v-if="regi=='注册'" @click="signin" type="success" :loading="load" class="meituan-btn">登录</el-button>
                   <el-button v-else type="success" @click="register" :loading="load" class="meituan-btn">注册</el-button>
            </div>
        </div>
        
    </div>


</template>

<script>

import { reactive, toRefs,getCurrentInstance,onMounted } from 'vue';
import { useRouter} from 'vue-router'
import qs from 'qs';

export default{
    setup(){
 
       const {proxy} = getCurrentInstance()
       const router = useRouter()
       const user = reactive({
        account:'',
        password:'',
        token:'',
        code:'',
        regi:'注册',
        load:false,
        captchaImg: null
       })
       //登录
       const signin = async()=>{
        user.load = true
          const obj = qs.stringify({
            username : user.account,
            password: user.password,
            code: user.code,
            token: user.token
          })
          console.log(obj)
          try{
            const res = await new proxy.$request(proxy.$urls.m().login+'?'+obj).modepost()
            console.log(res)
            console.log(res.status)
           
            if(res.status == 200){
              //跳转到内容页面
              let ids = '1'
              const jwt = res.headers['authorization']
              localStorage.setItem('token',jwt)//保存token
              localStorage.setItem('menuid',ids)//页面默认选中第一页
              router.push({name:'index'})
              
              
            }else{
              new proxy.$tips(res.data.msg,'warning').mess_age()
            }
            user.load = false
          }catch(e){
            
            new proxy.$tips('服务器发生错误','error').mess_age()
            user.load = false
          }
          
       }
       //注册
       const register = async()=>{
          // console.log(proxy.$urls.m().register)  //查看urls
          user.load = true
          const obj = {account:user.account,password:user.password}
          try{
              const res = await new proxy.$request(proxy.$urls.m().register,obj).modepost()
              console.log(res)
              
              if(res.status != 200){
                  new proxy.$tips(res.data.msg,'warning').mess_age()
              }else{
                  user.regi = '注册'
              }
              user.load = false
          }catch(e){
            new proxy.$tips('服务器发生错误','error').mess_age()
            user.load = false
          }
          
       }

       //获取验证码
       const getCaptcha = async()=>{
        try{
          const res = await new proxy.$request(proxy.$urls.m().getCaptcha).modeget()
          console.log(res)
          user.captchaImg = res.data.data.captchaImg
          user.token = res.data.data.token
          user.code = ''
        }
        catch(e){
            new proxy.$tips('服务器发生错误111','error').mess_age()
          }
       }
       
      
        getCaptcha()
  


       return { ...toRefs(user),signin,register,getCaptcha}
    },
}

</script>

<style scoped>
.captchaImg {
		float: left;
		margin-left: 8px;
		border-radius: 4px;
	}
</style>