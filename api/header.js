//配置和token

import axios from 'axios'
import { Base64 } from 'js-base64';
import {ElMessageBox} from 'element-plus'

// 创建通用axios配置
let instance = axios.create({
	responseType:"json",
	headers:{'Content-Type':'application/json'}
})

// 对token加密
function baseFun(){
	const token = localStorage.getItem('token')//从本地缓存里取出token
	const base64 = Base64.encode(token + ':')//对token加密
	return 'Basic ' + base64
}

// http拦截：是在axios请求发出之前给每一个接口携带token去后端校验身份
instance.interceptors.request.use(
	config =>{
		let token = localStorage.getItem('token')
		if(token){
			config.headers.Authorization = baseFun()
		}
		return config
	},
	err =>{
		return Promise.reject(err)
	}
)

//  http拦截：是在axios请求发出之后
instance.interceptors.response.use(
	response =>{
		return response
	},
	error =>{
		if(error.response){
			let ERRS =  error.response.status
			let MSG =  error.response.data.msg.msg
			let errdata = ERRS == 401 ? MSG : '服务器发生错误'
			switch (ERRS){
				case 401:
				// 没有访问权限，token过期，没有携带token请求，token错误
				ElMessageBox.alert(errdata, '提示',{
					confirmButtonText: '好的',
					type:"error"
				})
				.then(res=>{
					// 跳转到登录界面
					window.location.href = '/'
				})
				.catch(err=>{
					// 跳转到登录界面
					window.location.href = '/'
				})
				break;
			}
		}
		return Promise.reject(error.response.data)//返回接口的错误信息
	}
)

export default instance
