<template>
	<view class="main">
		<!-- 输入框区域 -->
		<!-- <input type="text" class="lee-border-bottom lee-bgc-gray" @blur="ocKeyboard(false)" @focus="ocKeyboard(true)" :placeholder="placeholderVal" v-model="inputVal" /> -->

		<button type="primary" @tap="keyboardStatus = !keyboardStatus">点击打开软键盘</button>
		<!-- 软键盘组件 -->
		<!-- 键盘背景与位置 -->
		<view class="mainKeyboard" v-show="keyboardStatus">
			
			<view class="uni-flex uni-row" style="-webkit-flex-wrap: wrap;flex-wrap: wrap;">
				<!-- 数字键盘区域 -->
				<view class="keyItem text" v-for="(item,index) in contentList" v-bind:key="index">
					<text>{{item}}</text>
				</view>
			</view>
			<!-- 功能按钮区域 -->
		</view>
		
	</view>
</template>

<script>
/**
 * 1、设置组件自定义得生命周期
 * 2、每次触发自定义键盘事件时
 * 3、触发指定自定义键盘事件时
 * 4、数字键盘事件，符号键盘事件，完成回车事件，键盘打开事件，键盘关闭事件
 * 5、
 */

export default {
	name: 'keyboard',
	data() {
		return {
			inputVal: '', // 输入框输入值
			placeholderVal: '请输入正确值', // placeholder默认值
			keyboardStatus:false, // 软件盘是否打开
			contentList:['1','2','3','4','5','6','7','8','9','0','.','完成']
		}
	},
	methods:{
		// 打开/关闭 自定义软键盘
		ocKeyboard(status){
			this.keyboardStatus = status
		},
	}
};
</script>

<style scoped>
.mainKeyboard {
	position: absolute;
	width: 100%;
	height: 30%;
	background-color: #858a8d;
	color: #333333;
}
.keyItem{
	width: 40rpx;
	height: 30rpx;
	margin: 5rpx;
	border-radius: 5rpx;
	border: solid #7F7F7F 1rpx;
}

.inputClass{
	height: 30%;
	width: 100%;
	background-color: #09BB07;
	
}

</style>
