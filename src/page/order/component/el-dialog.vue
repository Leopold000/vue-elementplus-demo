<template>
    <el-dialog
    v-model="res.dialogVisible"
    title="详细菜单"
    width="500px"
    center
    class="hei_dialog"
    :close-on-click-modal="false"
  >
    <div class="menu-padd" v-for="(item,index) in res.menu_data" :key="index">
        <div class=" Menu-details menu-span">
            <span>第{{ res.menu_data.length-index}}次下单</span>
        </div>
        <div v-for="(item_menu,index_menu) in item.goods_list" :key="index_menu">
            <div class="Menu-details menu-margin">
                <span>{{ item_menu.name }}</span>
                <span v-if="item_menu.good_specs != ''">{{ item_menu.good_specs }}</span>
                <span>{{ item_menu.quantity }}{{ item_menu.unit }}</span>
            </div>
            
        </div>
    </div>
   
  </el-dialog>



</template>

<script>
import { reactive } from 'vue'


export default{
    setup(){
        const res = reactive({
            dialogVisible:false,
            menu_data:[],

        })

        //被父组件调用的方法，并且携带值
        function popup(val){
            // console.log(val)
            res.dialogVisible = true
            res.menu_data = val
        }


        return {res,popup}
    }
}

</script>


<style>
.hei_dialog{
    height: 600px;
    overflow-y: auto;
}

</style>