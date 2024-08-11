<template>
    <div class="ordering" >
        <div class="heading">系统实时监测</div>
        <div>
            <Cards></Cards>
            <Charts></Charts>
        </div>
    </div>

</template>

<script>
import Cards from './component/cards.vue'
import Charts from './component/charts.vue'
export default{
    components:{ Cards,Charts},
    setup(){



    }
}
</script>

<style>


</style>
