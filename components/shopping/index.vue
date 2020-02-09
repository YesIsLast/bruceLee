<template>
	<view class="">
		<!-- 购物车列表 -->
		<view class="" v-for="(item,index) in shoppingList" :key="index">
			购物车
		</view>
	</view>
</template>

<script>
	// 购物车组件
	export default{
		name:"shopping",
		data(){
			return {
				shoppingList:[{
					img:'', // 图片地址
					title:"", // 标题
					content:"", // 简介
					num:3, // 商品库存
					price:199, // 商品价格
				}]
			}
		}
	}
</script>

<style scoped>
</style>
