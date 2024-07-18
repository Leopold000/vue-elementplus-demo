// pinia
import { defineStore } from 'pinia';

export const goodsData = defineStore('goods_data',{
	// 数据仓库
	state: () => ({
		/* 存储编辑菜品的数据 */
		stoGoods:null
	}),
	// 同步异步传值
	actions: {
		/* 点击编辑菜品传值存储在数据仓库 */
		editItem(value){
			this.stoGoods = value
		},
	}
})