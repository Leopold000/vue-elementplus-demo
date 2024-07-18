<template>
    <div class="ordering">
        <el-breadcrumb :separator-icon="icon">
            <el-breadcrumb-item :to="{ name:'dishes' }">菜品管理</el-breadcrumb-item>
            <el-breadcrumb-item >添加菜品</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content-view-ten">
            <!-- 菜品类目 -->
             <div class="image-view-title">
                <div class="image-list">菜品类目</div>
                <div >
                    <el-select v-model="catevalue" placeholder="请选择菜品类目" style="width: 150px">
                    <el-option
                        v-for="item in cate"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                    </el-select>
                </div>
             </div>
             <!-- 菜品名称 -->
             <div class="image-view-title">
                <div class="image-list">菜品名称</div>
                <el-input v-model="name" placeholder="请输入菜品名称" clearable/>
             </div>
             <!-- 菜品价格(元) -->
             <div class="image-view-title">
                <div class="image-list">菜品价格(元)</div>
                <div class="opload-option">
                    <el-input type="number" v-model="unitprice" placeholder="请输入菜品价格" clearable/>
                    <el-select v-model="compvalue" placeholder="请选择单位"  >
                        <el-option
                            v-for="item in company"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            style="width:100%"
                        />
                    </el-select>
                    <el-input v-if="compvalue=='自定义单位'" v-model="unit" placeholder="请输入自定义单位" clearable/>
                    <div v-if="compvalue=='自定义单位'"><el-button type="success" style="width:100%; padding:12px 20px;"
                         @click="Dishunit"
                         :loading="unitload"
                         >添加自定义单位</el-button></div>
                </div>
            </div>
            <!-- 图片上传 -->
            <div class="image-view-title">
                    <div class="image-list">菜品图片</div>
                    <div>
                        <el-upload
                            :action="img_url"
                            list-type="picture-card"
                            accept=".jpg,.png,.webp,.jpeg,.jfif"
                            :on-preview="onpreview"
                            :on-remove="onremove"
                            :on-success="onsuccess"
                            :on-error="onerror"
                            :on-progress="onprogress"
                            :before-upload="project"
                            :file-list="goodsimage"
                            :limit="1"
                        >
                            <el-icon ><Plus /></el-icon>
                        </el-upload>
                        <el-dialog v-model="dialogVisible">
                            <img width="100%" :src="dialogImgeUrl" alt=""/>
                        </el-dialog>
                    </div>
            </div>
            <!-- 提交 -->
            <div class="sub-button">
                <el-button type="success" :loading="subload" @click="Submit">提交</el-button>
            </div>

        </div>
    </div>

</template>
<script>
import { ArrowRight,Plus } from '@element-plus/icons-vue'
import { getCurrentInstance, reactive, shallowRef, toRefs,toRaw, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {goodsData} from '@/store/index'
const store = goodsData()
export default{
    components:{ ArrowRight,Plus },
    
    setup(){
        const {proxy}=getCurrentInstance()
        const img_url = proxy.$urls.m().uploadres
        const jump_router = useRouter()//跳转页面
        const router = useRoute()//接收值
        const icon = shallowRef(ArrowRight)
        const oper_data = reactive({
            catevalue:'',//选中的菜品类目
            name:'',//菜品名称
            unitprice:'',//菜品价格
            compvalue:'',//选中的单位
            unit:'',//选中的自定义单位
            cate:[],//菜品类目列表
            company:[],//菜品单位列表
            goodsimage:[],//上传接收的图片
            dialogVisible:false,//是否展示大图
            dialogImgeUrl:'',//展开大图的链接
            unitload:false,//自定义单位按钮
            subload:false,//提交按钮loading
            id:'',//该条菜品数据唯一标识_id
        })
        //点击文件列表中已上传的文件时的钩子
        const onpreview = (file)=>{
            // console.log(file)
            oper_data.dialogImgeUrl = toRaw(file.url)
            // console.log(file.url)
            oper_data.dialogVisible = true
        }
        //文件列表移除文件时的钩子
        const onremove = (file,fileList)=>{
            // console.log(file,fileList)
            oper_data.goodsimage = []
        }
        //文件上传成功时的钩子
        const onsuccess = (response,file,fileList)=>{
            // console.log(response,file,fileList)
            oper_data.goodsimage.push({url:response.data,uid:file.uid})
        }
        //文件上传失败时的钩子
        const onerror = (err,file,fileList)=>{
            // console.log(err,file,fileList)
        }
        //文件上传时的钩子
        const onprogress = (event,file,fileList)=>{
            // console.log(event,file,fileList)
        }
        //删除文件之前的钩子，参数为上传的文件和文件列表， 
        //若返回 false 或者返回 Promise 且被 reject，则停止删除。
        const project = (file)=>{
            // console.log(file)
        }


        //获取菜品类目和单位
        onMounted(()=>{
            cate_unit()
        })
        async function cate_unit(){
            try{
                const CATE = new proxy.$request(proxy.$urls.m().obtaincate).modeget()
                const UNIT = new proxy.$request(proxy.$urls.m().obtainunit).modeget()
                const res = await Promise.all([CATE,UNIT])
                // console.log(res)
                oper_data.cate = res[0].data.data
                oper_data.company = res[1].data.data
                oper_data.company.push({label:"自定义单位",unit:"980",value:"自定义单位",_id:"232132"})
            }catch(e){
                new proxy.$tips('服务器发生错误','error').mess_age()
            }
        }
        //添加自定义单位
        const Dishunit = async()=>{
            oper_data.unitload = true
            const obj = {unit:oper_data.unit}
            try{
                const res = await new proxy.$request(proxy.$urls.m().dishunit,obj).modepost()
                // console.log(res)
                if(res.status !=200){
					new proxy.$tips(res.data.msg,'warning').mess_age()
				}else{
					new proxy.$tips(res.data.msg,'success').mess_age()
					oper_data.compvalue = ''
					oper_data.unit = ''
					cate_unit()
				}
                oper_data.unitload = false
            }catch(e){
                oper_data.unitload = false
                new proxy.$tips('服务器发生错误','error').mess_age()
            }
        }
        //提交上架菜品             
        const Submit = async()=>{
            oper_data.subload = true
            const {id,catevalue,name,unitprice,compvalue,goodsimage} = oper_data
            const obj = {id,category:catevalue,name,unitprice,
                unit:compvalue,image:goodsimage}
            const URL = id == '' ? proxy.$urls.m().putdishes : proxy.$urls.m().editdishes
            try{
                const res = await new proxy.$request(proxy.$urls.m().putdishes,obj).modepost()
                // console.log(res)
                if(res.status !=200){
                    new proxy.$tips(res.data.msg,'warning').mess_age()
                }else{
                    new proxy.$tips(res.data.msg,'success').mess_age()
                    jump_router.push({name:'dishes'})
                }
                oper_data.subload=false
            }catch(e){
                new proxy.$tips('服务器发生错误','error').mess_age()
                oper_data.subload=false
            }
        }

        //接收编辑菜品传来的数据
        const etid_data = store.stoGoods
		if(etid_data){
			const value = JSON.parse(etid_data)
			const {category,name,unitprice,unit,image,_id} = value
			oper_data.id = _id,
			oper_data.catevalue = category,
			oper_data.name = name,
			oper_data.unitprice = JSON.stringify(unitprice),
			oper_data.compvalue = unit,
			oper_data.goodsimage = image
		}

        return { icon,...toRefs(oper_data),img_url,onpreview,onremove,
            onsuccess,onerror,onprogress,project,Dishunit,Submit
         }
    }
}

</script>

<style>
.opload-option{
    display: flex;
    align-items: center;
    justify-content: left;
}
.opload-option div{
    width: 25% !important;
    margin-left: 5px;
}
.el-button--success{
    width: 150px;
}
.el-select__selection{
    width: 100%;
}

</style>