<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  // 全局数据，通过 getApp().globalData.test 可访问
  globalData: {
    test: 'globalData-test'
  }
}
</script>

<style>
/* #ifndef APP-PLUS-NVUE */
/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
@import './common/uni.css';
@import './wxcomponents/vant/common/index.wxss';

/* 以下样式用于 hello uni-app 演示所需 */
page {
  background-color: #f4f5f6;
  height: 100%;
  font-size: 28rpx;
  line-height: 1.8;
}

/* #endif*/
</style>
