<template>
    <div class="ordering" >
        <div class="heading">设计平台数据库</div>
        <div>
            <el-button type="primary" @click="gettest">Primary</el-button>
        </div>
        <div>
            {{ res }}
        </div>

    </div>

</template>

<script>
import {getCurrentInstance,reactive,toRefs} from 'vue';
export default{
    setup(){
        const {proxy}=getCurrentInstance()
        const operdata = reactive({
            res:'',
        })

        async function gettest(){
            try{
                const res = await new proxy.$request(proxy.$urls.m().test).modeget()
                console.log(res)
                operdata.res = res.data.data
                

            }catch(e){
                new proxy.$tips('服务器发生错误','error').mess_age()
            }
        }

        return {...toRefs(operdata),gettest}

    }
}

</script>

<style>


</style>