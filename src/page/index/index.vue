<template>
    <div>
        <!-- 顶部 -->
         <div class="sidebar-top">
            <div>
                <el-icon :size="30">
                    <Platform />
                </el-icon>
                <span>燃机关重部件管理平台</span>
            </div>
            <!-- <div @click="Logout">退出</div> -->
            <div class="header-avatar">

                <el-avatar size="medium" >A</el-avatar>

                <el-dropdown>
                    <span class="el-dropdown-link">
						Admin<el-icon class="el-icon--right"><arrow-down /></el-icon>
					</span>
                <template #dropdown>
                    <el-dropdown-menu>
                    <el-dropdown-item>
                        <el-icon ><UserFilled /></el-icon>
                        <router-link :to="{name:'daq'}">个人中心</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item @click="Logout">
                        <el-icon ><SwitchButton /></el-icon>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
                </el-dropdown>
                </div>
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
import { Histogram,DataLine,Tools,Monitor,Platform,ArrowDown,Memo,Share,SwitchButton,UserFilled  } from '@element-plus/icons-vue';
import { reactive, ref,onMounted } from 'vue';
import { useRouter  } from 'vue-router';

export default{
    components:{
        Histogram,DataLine,Tools,Monitor,Platform,ArrowDown,Memo,Share,SwitchButton,UserFilled
    },
    setup(){
        const router = useRouter()
       
        const Array = [
            {
                id:'1',
                icon:'DataLine',
                title:'工况数据采集',
                router:'daq',
                Subclass:[]//是否有二级三级菜单
                
            },
            {
                id:'2',
                icon:'Monitor',
                title:'系统实时监测',
                router:'system',
                Subclass:[]//是否有二级三级菜单
            },
            {
                id:'3',
                icon:'Tools',
                title:'重要部件监测',
                router:'',
                Subclass:[
                    {
                        id:'3-1',
                        title:'燃烧室',
                        router:'combustion',
                    },
                    {
                        id:'3-2',
                        title:'涡轮盘',
                        router:'disk',
                    },
                ]//是否有二级三级菜单
            },
            {
                id:'4',
                icon:'Histogram',
                title:'寿命与损伤分析',
                router:'data',
                Subclass:[]//是否有二级三级菜单
            },
            {
                id:'5',
                icon:'Memo',
                title:'运维数据库',
                router:'omdatabase',
                Subclass:[]//是否有二级三级菜单
            },
            {
                id:'6',
                icon:'Share',
                title:'设计平台',
                router:'designdb',
                Subclass:[]//是否有二级三级菜单
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