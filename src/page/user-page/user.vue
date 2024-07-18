<template>
    <div class="ordering" v-loading.fullscreen.lock="Loading">
        <div class="heading">用户列表</div>
        <div>
            <el-table :data="user_array" style="width: 100%" >
                <el-table-column prop="time" label="注册时间" align="center" min-width="100" />
                <el-table-column prop="name" label="姓名" align="center" min-width="100" />
                <el-table-column prop="head" label="头像" align="center" min-width="100" >
                    <!-- 头像 -->
                     <template #default="scope">
                        <el-image
                            style="width: 40px;height: 40px;"
                            :src="scope.row.head"
                            :preview-src-list="[scope.row.head]"
                            fit="cover"
                            :hide-on-click-modal="true"
							lazy
                        ></el-image>
                     </template>
                </el-table-column>
                <el-table-column prop="sex" label="性别" align="center" min-width="100" />
                <el-table-column prop="position" label="职位" align="center" min-width="100" />
            </el-table>
            <!-- 分页 -->
			<el-pagination background layout="prev, pager, next"
			 :total="total"
			 :hide-on-single-page="true"
			 @current-change="currentchange"
			 >
			</el-pagination>
        </div>
    </div>
    

</template>

<script>
import { reactive ,onMounted,getCurrentInstance, toRefs, ref } from 'vue';

export default{
    setup(){
        const {proxy} = getCurrentInstance()
        const Loading = ref(true)
        //请求数据
        onMounted(()=>{
            userlist()
        })
        const oper_data = reactive({
            user_array:[],//表格数据
            total: 0,//数据总数据
            page:0
        })
        async function userlist(){
            try{
                const res = await new proxy.$request(proxy.$urls.m().pulluserlist + '?page=' + oper_data.page).modeget()
                // console.log(res)
                oper_data.user_array = res.data.data.result
                oper_data.total = res.data.data.total
                Loading.value =false
            }catch(e){
                new proxy.$tips('服务器发生错误','error').mess_age()
            }
        }
        //分页触发事件
        function currentchange(e){
            // console.log(e-1)
            oper_data.page = e-1
            userlist()
        }
        return { ...toRefs(oper_data),currentchange,Loading }
    }
}
</script>

<style scoped="scoped">
::v-deep (.el-pagination.is-background .el-pager li:not(.disabled).active) {
	background-color: #00be06;
	color: #fff;
}
</style>

