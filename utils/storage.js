/**
 * 封装本地存储方法
 * this.$storage.setStorageSync(key, value)
 **/
const storage = {
	setStorageSync(key, val) {
		uni.setStorageSync(key, val);
	},
	getStorageSync(key) {
		return uni.getStorageSync(key)
	},
	removeStorageSync(key) {
		uni.removeStorageSync(key)
	},
	clearStorageSync() {
		uni.clearStorageSync()
	}
}

export default storage