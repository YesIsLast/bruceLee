<template>
	<!-- 页头导航 -->
	<view>
		<uni-nav-bar :fixed="true" left-text="微信(2)" shadow="true" background-color="#FFFEFA" status-bar="true">
			<block slot="right">
				<uni-icons class="lee-marin-right-40" type="search" color="#333333" size="22" />
				<uni-icons class="" type="plus" color="#333333" size="22" />
			</block>
		</uni-nav-bar>
		<!-- 消息列表 -->
		<view>
			<scroll-view scroll-top="0" scroll-y="true" class="scroll-Y">
				<view v-for="(msg, index) in messageList" v-bind:key="index">
					<view class="uni-flex uni-row scroll-view-item">
						<!-- 头像显示 -->
						<view class="text lee-padding-10" style="width: 100upx;">
							<image src="../../static/icon/weChat.png" mode="aspectFill" style="max-width: 100rpx;max-height: 100rpx;padding: 15rpx;"></image>
						</view>
						<!-- 消息内容展示 -->
						<view class="text">
							<view class="lee-title">消息标题</view>
							<view class="lee-text-sm">在干嘛，上号啊！</view>
							<view class="lee-color-gray lee-align-right">2019-12-13</view>
						</view>
						<!-- <view class="text uni-flex lee-border-bottom lee-paddingLeft-15" style="-webkit-flex: 1;flex: 1;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
							<text>{{msg}}</text>
						</view> -->
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uniSection from '@/components/uni-section/uni-section.vue';
export default {
	components: {
		uniIcons,
		uniNavBar,
		uniSection
	},
	data() {
		return {
			messageList: [
				'常见问题参考1',
				'常见问题参考2',
				'常见问题参考3',
				'常见问题参考4',
				'常见问题参考5',
				'常见问题参考6',
				'常见问题参考7',
				'常见问题参考8',
				'常见问题参考9',
				'常见问题参考10',
				'常见问题参考11',
				'常见问题参考12',
				'常见问题参考13'
			]
		};
	},
	onPullDownRefresh() {
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 500);
	}
};
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
