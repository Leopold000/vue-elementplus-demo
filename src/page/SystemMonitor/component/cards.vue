<template>
    <!-- cards展示运行次数等 -->
    <div>
        <el-row :gutter="20">
            <el-col :span="6" v-for="data in list_data" :key="data">
                <el-card style="max-width: 480px" shadow="always">
                    <template #header>
                        <div class="card-header">
                            <span>{{ data.title }}</span>
                        </div>
                    </template>
                    <p class="text-item">{{ data.value + data.unit }}</p>
                </el-card>
            </el-col>
        </el-row>
    </div>
    
</template>

<script>
import {toRefs,reactive} from 'vue';
export default{
    setup(){
        const res_data = reactive({
            list_data:[
            {
                title:"启停机次数",
                value:50,
                unit:"次",
            },
            {
                title:"此次运行时长",
                value:50,
                unit:"小时",
            },
            {
                title:"累计运行时长",
                value:500,
                unit:"小时",
            },
            {
                title:"累计停机时长",
                value:50,
                unit:"小时",
            },
        ]
        })
        
        return {...toRefs(res_data)}
    }
}


</script>


<style scoped>
.text-item{
    font-weight: bold;
    font-size: 30px;
    text-align: center;
}

</style>


  