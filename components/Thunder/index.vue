<template>
	<view class="thunder" @click="clickBox" :class="failClass">
		<text class="color-red" v-if="failClass == 'display'">{{data==1?'炸弹':''}}</text>
	</view>
</template>

<script>
	export default{
		name:'thunder',
		props:['data','gameStatus'],
		data(){
			return {
				failClass:'nodisplay'
			}
		},
		watch:{
			"gameStatus":function(newVal){
				if(newVal == '重新开始' && this.data == 1){
					this.failClass = 'display'
				}else{
					this.failClass = 'nodisplay'
				}
			}
		},
		methods:{
			clickBox(){
				this.$emit('clickBox')
			}
		}
	}
</script>

<style scoped>
	.thunder{
		width: 80rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
	}
	.color-red{
		color: red;
	}
	.nodisplay{
		border-left: solid 4rpx #FFFFFF;
		border-top: solid 4rpx #FFFFFF;
		border-bottom: solid 4rpx #9a9a9a;
		border-right: solid 4rpx #9a9a9a;
	}
	.display{
		border: solid 4rpx #7f7f7f;
		background-color: #bdbdbd;
	}
</style>
