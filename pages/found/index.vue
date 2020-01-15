<template>
	<view class="">
		<view>游戏状态：<view class="" @click="nextData()">{{gameStatus}}</view></view>
		
		<text style="text-align: center;"></text>
		<view class="thoundes">
			<Thunder v-for="(item,index) in thunderList" :key="index" :data = "item" @clickBox="clickBox(item,index)" :gameStatus="gameStatus"></Thunder>
		</view>
	</view>
</template>

<script>
	import Thunder from '../../components/Thunder/index.vue'
	
	export default{
		name:'found',
		components:{
			Thunder
		},
		computed:{
			list:function(){
				return this.thunderList = this.nextData()
			}
		},
		data(){
			return {
				thunderList:[],
				level:36,
				gameStatus:'开始游戏'
			}
		},
		methods:{
			clickBox(itemV,indexV){
				console.log('点击',indexV,itemV)
				if(itemV == 1){
					this.gameStatus = '重新开始'
				}
			},
			nextData(){
				this.gameStatus = '开始游戏'
				let result = new Array(this.level).fill(0)
				// 设置雷数区间
				let maxNum = parseInt(this.level/3)
				let minNum = parseInt(this.level/5)
				console.log(maxNum,minNum)
				// 获取本局雷数
				let thunders = parseInt(Math.random() * (maxNum - minNum + 1 ) + minNum)
				console.log('查看本局雷数',thunders)
				
				// 雷下标
				let index = 0
				do{
					// 雷下标
					let thunderIndex = parseInt(Math.random() * (this.level) , 10)
					console.log(thunderIndex)
					result[thunderIndex] = 1
					index ++
				}
				while(index < thunders){
					return this.thunderList = result
				}
			}
		},
		mounted() {
			console.log('扫雷数据',this.list)
		}
		
	}
</script>

<style scoped>
	.thoundes{
		width: 506rpx;
		height: 506rpx;
		background-color: #555555;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		text-align: center;
	}
</style>
