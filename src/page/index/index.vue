<template>
    <div>
        <!-- 顶部 -->
         <div class="sidebar-top">
            <div>后台管理</div>
            <div @click="Logout">退出</div>
         </div>
         <!-- 侧边栏 -->
         <div class="sidebar-cont">
            <el-menu :default-active="ac_index" @select="Select">
                <div v-for="(item,index) in menu" :key="index">
                    <router-link :to="{path:item.router}">
                        <el-menu-item v-if="item.Subclass.length == 0" :index="item.id">
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </el-menu-item>
                    </router-link>
                    <!-- 二级，三级 -->
                    <el-sub-menu v-if="item.Subclass.length > 0" :index="item.id">
                        <template #title>
                            <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{ item.title }}</span>
                        </template>

                        <div v-for="(two,index_two) in item.Subclass" :key="index_two">
                            <router-link :to="{path:two.router}">
                                <el-menu-item :index="two.id">{{ two.title }}</el-menu-item>
                            </router-link>    
                        </div>    
                    </el-sub-menu>
                </div>
            </el-menu>
         </div>
         <router-view/>
    </div>
</template>

<script>
import { Histogram,UserFilled,CreditCard,Food,User } from '@element-plus/icons-vue';
import { reactive, ref,onMounted } from 'vue';
import { useRouter  } from 'vue-router';
export default{
    components:{
        Histogram,UserFilled,CreditCard,Food,User
    },
    setup(){
        const router = useRouter()
        const Array = [
            {
                id:'1',
                icon:'Histogram',
                title:'数据分析',
                router:'data',
                Subclass:[]//是否有二级三级菜单
            },
            {
                id:'2',
                icon:'UserFilled',
                title:'用户列表',
                router:'userpage',
                Subclass:[]//是否有二级三级菜单
            },
            {
                id:'3',
                icon:'CreditCard',
                title:'订单管理',
                router:'order',
                Subclass:[]//是否有二级三级菜单
            },
            {
                id:'4',
                icon:'Food',
                title:'菜品管理',
                router:'dishes',
                Subclass:[]//是否有二级三级菜单
            },
            {
                id:'5',
                icon:'User',
                title:'员工管理',
                router:'',
                Subclass:[
                    {
                        id:'5-1',
                        title:'员工详情',
                        router:'role',
                    },
                    {
                        id:'5-2',
                        title:'员工管理',
                        router:'',
                    },
                ]//是否有二级三级菜单
            },
        ]

        const menu = reactive(Array)
        //菜单激活回调
        const ac_index = ref('1')
        function Select(index,path){
            // console.log(index)
            // console.log(path)
            localStorage.setItem('menuid',JSON.stringify(index))
        }
        onMounted(()=>{
            ac_index.value = JSON.parse(localStorage.getItem('menuid'))//刷新之后保留页面id
        })

        //退出登录
       function Logout(){
            localStorage.clear()
            router.push({name:'login'})
       }

        return { menu ,ac_index,Select,Logout}
    }
}

</script>

<style>


</style>