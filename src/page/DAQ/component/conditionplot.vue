<template>
    <!-- 折线图 -->
     <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <div class="grid-content">
                    <div class="grid_title">工况数据监测</div>
                    <div id="broken-line"></div>
                </div>
            </el-col>
        </el-row>
        
     </div>
</template>

<script>
import { Line } from '@antv/g2plot';
import { onMounted, reactive, toRefs, watch,getCurrentInstance } from 'vue';
export default{
    props:{lineChart:Array},
    setup(props){
        const {proxy}=getCurrentInstance()
        const res_data = reactive({
            lineChart:[],//接受折线图数据
            line_update:null

        })
        function brokenLine(data){
            const line = new Line('broken-line', {
                data:data,
                xField: 'year',
                yField: 'gdp',
                seriesField: 'name',
                yAxis: {
                    label: {
                    formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
                    },
                },
                legend: {
                    position: 'top',
                },
                smooth: true,
                // @TODO 后续会换一种动画方式
                animation: {
                    appear: {
                    animation: 'path-in',
                    duration: 5000,
                    },
                },
                });

                line.render();
                res_data.line_update = line
            }

            //监听父组件传来的数据
            watch(props,(newVal,oldVal)=>{
                // console.log(newVal)
                res_data.line_chart=newVal.lineChart
                brokenLine(newVal.lineChart)
                
            })

            
        return{...toRefs(res_data) }
    }
}
</script>

<style scoped>
.el-row{
    margin-bottom: 20px;
}
.grid-content{
    background-color: #FFFFFF;
}
.grid_title{
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px solid #eee;
    margin-top: 20px;
}
.query-time{
    display: flex;
    align-items: center;
	justify-content: center;
	margin-top: 20px;
	padding-bottom: 20px;
}

</style>
