<template>
    <!-- 饼图，大气湿度，燃料气成分， -->
     <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content">
                    <div class="grid_title">大气湿度</div>
                    <div id="Air"></div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">
                    <div class="grid_title">燃料气成分</div>
                    <div id="Gas"></div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">
                    <div class="grid_title">燃料流量(%)</div>
                    <div id="Fuel_flow"></div>
                </div>
            </el-col>
        </el-row>
     </div>
</template>

<script>
import { Pie,Liquid } from '@antv/g2plot';
import { onMounted } from 'vue';

export default {
    setup(){
        const data = [
            { type: '甲烷', value: 80 },
            { type: '乙烷', value: 5 },
            { type: '丙烷', value: 5 },
            { type: '丁烷', value: 5 },
            { type: '硫化氢', value: 2 },
            { type: '其他', value: 3 },
            ];
        const Air = 0.25
        const flow = 0.5
        //燃料气成分
        function pieChart(data){
            const piePlot = new Pie('Gas', {
                appendPadding: 10,
                data,
                angleField: 'value',
                colorField: 'type',
                radius: 1,
                innerRadius: 0.64,
                meta: {
                    value: {
                    formatter: (v) => `% ${v}`,
                    },
                },
                label: {
                    type: 'inner',
                    offset: '-50%',
                    autoRotate: false,
                    style: { textAlign: 'center' },
                    formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
                },
                statistic: {
                    title: {
                    offsetY: -8,
                    },
                    content: {
                    offsetY: -4,
                    },
                },
                // 添加 中心统计文本 交互
                interactions: [
                    { type: 'element-selected' },
                    { type: 'element-active' },
                    {
                    type: 'pie-statistic-active',
                    cfg: {
                        start: [
                        { trigger: 'element:mouseenter', action: 'pie-statistic:change' },
                        { trigger: 'legend-item:mouseenter', action: 'pie-statistic:change' },
                        ],
                        end: [
                        { trigger: 'element:mouseleave', action: 'pie-statistic:reset' },
                        { trigger: 'legend-item:mouseleave', action: 'pie-statistic:reset' },
                        ],
                    },
                    },
                ],
                });

                piePlot.render();
        }

        //大气湿度
        function AirPie(data){
            const liquidPlot = new Liquid('Air', {
            percent: data,
            outline: {
                border: 4,
                distance: 8,
            },
            wave: {
                length: 128,
            },
            });
            liquidPlot.render();

        }
        //燃料流量Fuel
        function FuelPie(data){
            const liquidPlot = new Liquid('Fuel_flow', {
            percent: data,
            outline: {
                border: 4,
                distance: 8,
            },
            wave: {
                length: 128,
            },
            });
            liquidPlot.render();

        }


        //
        onMounted(()=>{
            pieChart(data)
            AirPie(Air)
            FuelPie(flow)
        })

        return { }

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
