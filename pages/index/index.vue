<template>
  <view class="content">
    <navigator
      url="/pages/demo/index"
      hover-class="navigator-hover"
      style="margin-top: 300rpx"
    >
      <button type="default">跳转到demo页面</button>
    </navigator>
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data() {
    return {
      title: 'Hello',
      visible: true
    }
  },
  computed: {
    ...mapState({
      num: (state) => state.num
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
      }, 2000)
    })
  },
  methods: {
    testRequest() {
      this.$request.post('https://www.hongshaoli.com/list').then((res) => {
        console.log(res)
      })
    },
    testStore() {
      this.$store.dispatch('setNum', 2)
    },
    testGlobal() {
      console.log(getApp().globalData.test)
    },
    testStorage() {
      this.$storage.setStorageSync('test', '1234')
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
