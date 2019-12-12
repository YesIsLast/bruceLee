<template>
	<!-- 页头导航 -->
	<view class="lee-nav-margin-top">
		<uni-nav-bar :fixed="true" left-text="微信(2)">
			<block slot="right">
				<uni-icons class="lee-marin-right-40" type="search" color="#333333" size="22" />
				<uni-icons class="" type="plus" color="#333333" size="22" />
			</block>
		</uni-nav-bar>
		<!-- 消息列表 -->
		<view class="" v-for="(msg,index) in messageList" v-bind:key="index">
			<view class="uni-flex uni-row">
				<!-- 头像显示 -->
				<view class="text lee-padding-15" style="width: 100upx;">
					<image src="../../static/icon/weChat.png" mode="aspectFill" style="max-width: 100rpx;max-height: 100rpx;padding: 15rpx;"></image>
				</view>
				<!-- 消息内容展示 -->
				<view class="text  lee-border-bottom lee-paddingLeft-15" style="-webkit-flex: 1;flex: 1;">
					{{msg}}
				</view>
			</view>

		</view>


	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	export default {
		components: {
			uniIcons,
			uniNavBar,
			uniSection
		},
		data() {
			return {
				messageList: [
					'常见问题参考1', '常见问题参考2', '常见问题参考3', '常见问题参考4', '常见问题参考5', '常见问题参考6', '常见问题参考7'
				]
			}
		}
	}
</script>

<style>
	/* 	.text {
		margin: 15upx 10upx;
		padding: 0 20upx;
		background-color: #ebebeb;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		color: #777;
		font-size: 26upx;
	} */
</style>
