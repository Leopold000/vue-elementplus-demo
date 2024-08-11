<template>
    <div class="ordering">
        <div class="heading">工况数据采集</div>
        <div>
            <Conditionplot :lineChart="lineChart"></Conditionplot>
            <piecharts></piecharts>
        </div>
    </div>

</template>

<script>
import {getCurrentInstance,reactive,toRefs,onMounted } from 'vue';
import Conditionplot from './component/conditionplot.vue';
import piecharts from './component/piecharts.vue';

export default{
    components:{Conditionplot,piecharts},
    setup(){
        const {proxy}=getCurrentInstance()
        const ConditionData = reactive({
            lineChart:[],//工况数据折线图
        })

         //请求数据
         onMounted(()=>{
            getConditionData()
        })
        async function getConditionData(){
            try{
                // const res = await new proxy.$request(proxy.$urls.m().getcondition).modeget()
                // // console.log(res)
                // ConditionData.lineChart = res.data.data
                

            }catch(e){
                new proxy.$tips('服务器发生错误','error').mess_age()
            }

        }

        

        return {...toRefs(ConditionData)}
    }
}
</script>

<style>


</style>