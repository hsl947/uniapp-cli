<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}} - {{num}}</text>
		</view>
		<view class="text-area" @click="toIndex">点击返回主页</view>
		<DemoItem v-for="i in new Array(20).fill(1)" :key="i" />
		<w-picker :visible.sync="visible" mode="region" :current="true"></w-picker>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import wPicker from '@/components/w-picker/w-picker.vue';
	import DemoItem from '@/components/demo/index.vue'
	export default {
		components: {
			wPicker,
			DemoItem
		},
		data() {
			return {
				title: 'Hello',
				visible: true
			}
		},
		computed: {
			...mapState({
				num: state => state.num
			})
		},
		onLoad() {
			// 测试功能
			this.$nextTick(() => {
				this.testGlobal()
				this.testStorage()
				this.testRequest()
				setTimeout(() => {
					this.testStore()
				}, 5000)
			})
		},
		methods: {
			testRequest () {
				this.$request.get('https://randomuser.me/api').then((res)=>{
					console.log(res)
				})
			},
			testStore () {
				this.$store.dispatch('setNum', 2)
			},
			testGlobal () {
				console.log(getApp().globalData.test)
			},
			testStorage () {
				this.$storage.setStorageSync('test', '1234')
			},
			toIndex() {
				uni.switchTab({
				    url: '/pages/index/index'
				});
			},
			setTabbar () {
				uni.setTabBarItem({
				  index: 0,
				  text: '招人才',
				  iconPath: 'static/logo.png',
				  selectedIconPath: 'static/logo.png'
				})
				uni.setTabBarItem({
				  index: 1,
				  text: '职位管理',
				  iconPath: 'static/logo.png',
				  selectedIconPath: 'static/logo.png'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.logo {
			height: 200rpx;
			width: 200rpx;
			margin-top: 200rpx;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
		}

		.text-area {
			display: flex;
			justify-content: center;
		}

		.title {
			font-size: 36rpx;
			color: #8f8f94;
		}
	}
</style>
