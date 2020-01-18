<template>
	<view class="">
		<view class="uni-flex uni-row lee-uni-between listStyle lee-border-bottom" @tap="comStatus = !comStatus">
			<view class="text uni-flex lee-uni-center">
				<text>扫雷组件</text>
			</view>
			<view class="text uni-flex lee-uni-center">
				<text class="iconfont iconshangsanjiaoxing"></text>
			</view>
		</view>
		<MainThunder v-if="comStatus"></MainThunder>
	</view>
</template>

<script>
	import MainThunder from '../Thunder/main.vue'
	export default{
		name:"leeList",
		components:{
			MainThunder
		},
		props:['componentName'],
		data(){
			return {
				comStatus:false
			}
		}
	}
</script>

<style scoped>
	.listStyle{
		height: 10vh;
		width: 100%;
		
	}
</style>
