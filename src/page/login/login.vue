<template>
    <div id="backcont">
        <div class="meituan-content">
            <div class="login-cont ">
                  <div class="meituan-title">客户端</div>
                  <div class="meituan-user">
                    <p>账号</p>
                    <el-input clearable v-model="account" class="inptflex" placeholder="请输入账号" />
                  </div>
                  <div class="meituan-user">
                    <p>密码</p>
                    <el-input type="password" show-password v-model="password" class="inptflex" placeholder="请输入密码" />
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

import { reactive, toRefs,getCurrentInstance } from 'vue';
import { useRouter} from 'vue-router'

export default{
    setup(){
       const {proxy} = getCurrentInstance()
       const router = useRouter()
       const user = reactive({
        account:'',
        password:'',
        regi:'注册',
        load:false,
       })
       //登录
       const signin = async()=>{
        user.load = true
          const obj = {account:user.account,password:user.password}
          try{
            const res = await new proxy.$request(proxy.$urls.m().login,obj).modepost()
            console.log(res)
            if(res.status != 200){
              new proxy.$tips(res.data.msg,'warning').mess_age()
            }else{
              //跳转到内容页面
              let ids = '1'
              localStorage.setItem('token',res.data.data.token)//保存token
              localStorage.setItem('menuid',ids)//页面默认选中第一页
              router.push({name:'index'})
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

       return { ...toRefs(user),signin,register}
    }
}

</script>

<style>
</style>