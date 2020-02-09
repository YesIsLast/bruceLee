<template>
	<view class="">
		<view class="uni-flex uni-row lee-uni-between listStyle lee-border-bottom" @tap="comStatus = !comStatus">
			<view class="text uni-flex lee-uni-center">
				<text>{{componentObj.name}}</text>
			</view>
			<view class="text uni-flex lee-uni-center">
				<text class="iconfont iconshangsanjiaoxing" v-if="!comStatus"></text>
				<text class="iconfont iconxiasanjiaoxing" v-else></text>
			</view>
		</view>
		<MainThunder v-if="comStatus && componentObj.componentName == 'MainThunder'"></MainThunder>
		<Shopping v-if="comStatus && componentObj.componentName == 'Shopping'"></Shopping>
	</view>
</template>

<script>
	import MainThunder from '../Thunder/main.vue'
	import Shopping from '../shopping/index.vue'
	export default{
		name:"leeList",
		components:{
			MainThunder,
			Shopping
		},
		props:{
			componentObj:{
				type:Object,
				default:{
					name:'',
					type: false,
					componentName:''
				}
			}
		},
		mounted() {
			console.log(this.component)
		},
		data(){
			return {
				comStatus:this.componentObj.type
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
