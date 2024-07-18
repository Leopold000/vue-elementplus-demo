<template>
    <!-- 饼图，柱状图 -->
     <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content">
                    <div class="grid_title">菜品销量排行榜</div>
                    <div id="Piechart"></div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content">
                    <div class="grid_title">客户年龄分布</div>
                    <div id="Colchart"></div>
                </div>
            </el-col>
        </el-row>
     </div>
</template>

<script>
import { Pie ,Column } from '@antv/g2plot'
import { watch } from 'vue';
export default{
    props:{pieChart:Array,hisTogram:Array},
    setup(props){
       
        //饼图
        function pieChart(data){
            const piePlot = new Pie('Piechart', {
                appendPadding: 10,
                data:data,
                angleField: 'value',
                colorField: 'name',
                radius: 0.8,
                label: {
                    type: 'outer',
                    content:'{name} {value}\n{percentage}'

                },
                interactions: [{ type: 'element-active' }],
            });
            //在div视图上渲染
            piePlot.render();
        }

        //柱状图
        function columnChart(data){
            const columnPlot = new Column('Colchart', {
            data:data,
            xField: 'age',
            yField: 'sales-volume',
            label: {
                // 可手动配置 label 数据标签位置
                position: 'middle', // 'top', 'bottom', 'middle',
                // 配置样式
                style: {
                fill: '#FFFFFF',
                opacity: 0.6,
                },
            },
            xAxis: {
                label: {
                autoHide: true,
                autoRotate: false,
                },
            },
            meta: {
                'age': {
                alias: '年龄',
                },
                'sales-volume': {
                alias: '年龄段',
                },
            },
            });

            columnPlot.render();

        }

        //监听父组间传来的数据
        watch(props,(newVal,oldVal)=>{
            pieChart(newVal.pieChart)
            columnChart(newVal.hisTogram)
        })

        return {  }


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

</style>
