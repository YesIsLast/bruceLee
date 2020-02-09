<template>
	<view class="lee-page-padding">
		<!-- 列表组件循环 -->
		<LeeList v-for="(item,index) in componentsList" :key="index" :componentObj="item"></LeeList>
	</view>
</template>

<script>
	import LeeList from '../../components/leelist/index.vue'
	
	export default{
		name:'found',
		components:{
			LeeList
		},
		data(){
			return {
				componentsList:[{
						name:'扫雷组件',
						type:false,
						componentName:"MainThunder"
				},{
						name:'购物车组件',
						type:false,
						componentName:"Shopping"
				}]
			}
		}
	}
</script>

<style scoped>
</style>
