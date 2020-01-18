<template>
	<view class="lee-page-padding">
		<!-- 列表组件循环 -->
		<LeeList v-for="(item,index) in componentsList" :key="index"></LeeList>
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
				componentsList:5
			}
		}
	}
</script>

<style scoped>
</style>
