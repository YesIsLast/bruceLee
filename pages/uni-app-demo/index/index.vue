<template>
	<view class="" style="background-color: #fff;height: 100vh;">



		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="list" :mid-button="true" @change="projectJump"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				list: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						isDot: true,
						customIcon: false,
					},
					{
						iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
						text: '案例项目',
						midButton: true,
						customIcon: false,
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '统计',
						isDot: false,
						customIcon: false,
					},
				]
			}
		},
		methods: {
			projectJump(current) {
				switch (current) {
					case 0:
						break;
					case 1:
						this.$u.route('pages/huixing-work/pages/login/login')
						break;
					case 2:
						this.$u.route('pages/uni-app-demo/my/index')
						break;
					case 3:
						break;
					case 4:
						break;
					default:
						console.log("没有此菜单项")
						break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.u-node {
		width: 44rpx;
		height: 44rpx;
		border-radius: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #d0d0d0;
	}

	.u-order-title {
		color: #333333;
		font-weight: bold;
		font-size: 32rpx;
	}

	.u-order-desc {
		color: rgb(150, 150, 150);
		font-size: 28rpx;
		margin-bottom: 6rpx;
	}

	.u-order-time {
		color: rgb(200, 200, 200);
		font-size: 26rpx;
	}
</style>
