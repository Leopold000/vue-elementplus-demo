<template>
    <!-- 饼图，柱状图 -->
     <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content">
                    <div class="grid_title">系统健康度</div>
                    <div id="Health"></div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content">
                    <div class="grid_title">部件维修次数</div>
                    <div id="Colchart"></div>
                </div>
            </el-col>
        </el-row>
     </div>
     <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content">
                    <div class="grid_title">燃烧室健康度</div>
                    <div id="Health_com"></div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">
                    <div class="grid_title">涡轮盘健康度</div>
                    <div id="Health_disk"></div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">
                    <div class="grid_title">轴承健康度</div>
                    <div id="Health_bearing"></div>
                </div>
            </el-col>
        </el-row>
     </div>

</template>

<script>
import { Liquid,Column } from '@antv/g2plot';
import { onMounted } from 'vue';

export default{
    setup(){
        const health = 0.90
        const health_com = 0.85
        const health_disk = 0.70
        const health_bearing = 0.80
        const maintan_data = [
            {
                component:'涡轮盘',
                frequency:2,
            },
            {
                component:'燃烧室火焰筒',
                frequency:6,
            },
            {
                component:'轴承',
                frequency:5,
            },
            {
                component:'轴瓦',
                frequency:9,
            },
            {
                component:'衬套',
                frequency:3,
            },
        ]

        //健康度
        function Health(data,classname){
            const liquidPlot = new Liquid(classname, {
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

        //部件维修次数
        function columnChart(data){
            const columnPlot = new Column('Colchart', {
            data:data,
            xField: 'component',
            yField: 'frequency',
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
                'component': {
                alias: '部件',
                },
                'frequency': {
                alias: '次数',
                },
            },
            });

            columnPlot.render();

        }

        onMounted(()=>{
            Health(health,'Health')
            Health(health_com,'Health_com')
            Health(health_disk,'Health_disk')
            Health(health_bearing,'Health_bearing')
            columnChart(maintan_data)
        })

        return {}
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
