const fetch = (method, url, params = {}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method,
			data: params,
			header: {},
			success(res) {
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}

const request = {
	get: function() {
		return fetch('get', ...arguments)
	},
	post: function() {
		return fetch('post', ...arguments)
	}
}

export default request