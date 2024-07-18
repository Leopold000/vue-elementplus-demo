<template>
    <!-- 折线图 -->
     <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <div class="grid-content">
                    <div class="grid_title">菜品分类销量趋势</div>
                    <div id="broken-line"></div>
                </div>
                <!-- 切换图表 -->
                <div class="query-time">
                    <el-radio-group v-model="sort_value" size="small">
                        <el-radio-button v-for="(item,index) in el_radil" :key="index" :label="item"/>
                    </el-radio-group>
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
            line_chart:[],//接受折线图数据
            sort_value:'素菜类',
            el_radil:['素菜类','荤菜类','酒水类','龙虾'],
            line_update:null

        })
        function brokenLine(data){
            const line = new Line('broken-line', {
                data:data,
                xField: 'month',
                yField: 'sales-volume',
                label: {},
                point: {
                    size: 5,
                    shape: 'diamond',
                    style: {
                    fill: 'white',
                    stroke: '#5B8FF9',
                    lineWidth: 2,
                    },
                },
                tooltip: { showMarkers: false },
                state: {
                    active: {
                    style: {
                        shadowBlur: 4,
                        stroke: '#fff',
                        fill: 'yellow',
                    },
                    },
                },
                meta:{
                    'month':{alias:'月份'},
                    'sales-volume':{alias:'销售额'}
                },
                interactions: [{ type: 'marker-active' }],
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

            //监听选中哪个菜品
            watch(()=>res_data.sort_value,(newVal,oldVal)=>{
                // console.log(newVal)
                Switch(newVal)
            })

            //请求分类菜品切换的数据
            async function Switch(val){
                try{
                    const res = await new proxy.$request(proxy.$urls.m().switchcate+'?cateid='+val).modeget()
                    // console.log(res)
                    res_data.line_update.changeData(res.data.data)
                }catch(e){

                }
            }
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
