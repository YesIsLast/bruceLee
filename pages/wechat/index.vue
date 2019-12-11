<template>
	<view  class="lee-nav-margin-top">
		<uni-nav-bar :fixed="true" left-text="微信(2)">
			<block slot="right">
				<uni-icons class="lee-marin-right-40" type="search" color="#333333" size="22" />
				<uni-icons class="" type="plus" color="#333333" size="22" />
			</block>
		</uni-nav-bar>
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
		}
	}
</script>

<style>
</style>
