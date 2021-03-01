<template>
  <picker
    mode="time"
    :value="time"
    :start="start"
    :end="end"
    @change="onTimeChange"
  >
    <text>{{ time }}</text>
  </picker>
</template>

<script>
export default {
  name: 'PickerTime',
  props: {
    value: {
      type: String,
      default: ''
    },
    start: {
      type: String,
      default: '00:00'
    },
    end: {
      type: String,
      default: '23:59'
    }
  },
  components: {},
  data() {
    return {
      time: this.value || this.getTime()
    }
  },
  created() {},
  methods: {
    getTime() {
      const date = new Date()

      let hour = date.getHours()
      let minute = date.getMinutes()

      hour = hour > 9 ? hour : `0${hour}`
      minute = minute > 9 ? minute : `0${minute}`

      return `${hour}:${minute}`
    },
    onTimeChange(e) {
      this.time = e.detail.value
      this.$emit('onTimeChange', this.time)
    }
  }
}
</script>

<style lang="less" scoped></style>
