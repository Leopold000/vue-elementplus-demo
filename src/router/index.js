import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {//登陆界面
        path:'/',
        name:'login',
        component:()=>import(/*webpackChunkName:'Login'*/ '@/page/login/login.vue')
    },
    {//主界面
        path:'/index',
        name:'index',
        component:()=>import(/*webpackChunkName:'Index'*/ '@/page/index/index.vue'),
        redirect:'/daq',
        //二级路由
        children:[
            {//工况数据采集
                path:'/daq',
                name:'daq',
                component:()=>import(/*webpackChunkName:'DAQ'*/ '@/page/DAQ/daq.vue')
            },
            {//寿命与损伤分析
                path:'/data',
                name:'data',
                component:()=>import(/*webpackChunkName:'Data'*/ '@/page/data-analysis/data.vue')
            },
            {//系统实时监测
                path:'/system',
                name:'system',
                component:()=>import(/*webpackChunkName:'System'*/ '@/page/SystemMonitor/system.vue')
            },
            {//重要部件监测
                path:'/disk',
                name:'disk',
                component:()=>import(/*webpackChunkName:'Disk'*/ '@/page/ImportantCom/disk.vue')
            },
            {//重要部件监测
                path:'/combustion',
                name:'combustion',
                component:()=>import(/*webpackChunkName:'Combustion'*/ '@/page/ImportantCom/combustion.vue')
            },
            {//运维数据库
                path:'/omdatabase',
                name:'omdatabase',
                component:()=>import(/*webpackChunkName:'OMDatabase'*/ '@/page/OMdatabase/omdb.vue')
            },
            {//设计数据库
                path:'/designdb',
                name:'designdb',
                component:()=>import(/*webpackChunkName:'DesignDatabase'*/ '@/page/DesignDB/designdb.vue')
            },
        ]

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router