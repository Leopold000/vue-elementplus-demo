<template>
    <div class="ordering" >
        <div class="heading">涡轮盘监测</div>
        <div>
            <Vtk></Vtk>
            <Charts></Charts>
        </div>
    </div>

</template>

<script>
import Vtk from './component/vtk.vue'
import Charts from './component/charts.vue'

export default{
    components:{ Vtk,Charts},
    setup(){

    }
}
</script>

<style>


</style>
