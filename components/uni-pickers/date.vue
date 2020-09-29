<template>
  <picker
    mode="date"
    :value="date"
    :start="start"
    :end="end"
    @change="onDateChange"
    :fields="mode"
  >
    <text>{{ date }}</text>
  </picker>
</template>

<script>
export default {
  name: 'PickerDate',
  props: {
    mode: {
      type: String,
      default: 'day',
    },
    value: {
      type: String,
      default: '',
    },
    start: {
      type: String,
      default: '1970-01-01',
    },
    end: {
      type: String,
      default: '2099-12-30',
    },
    seperator: {
      type: String,
      default: '-',
    },
  },
  components: {},
  data() {
    return {
      date: this.value || this.getDate(),
    }
  },
  created() {},
  methods: {
    getDate(type) {
      const date = new Date()

      const year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()

      month = month > 9 ? month : `0${month}`
      day = day > 9 ? day : `0${day}`

      const viewText = {
        year: `${year}`,
        month: `${year}${this.seperator}${month}`,
        day: `${year}${this.seperator}${month}${this.seperator}${day}`,
      }

      return viewText[this.mode]
    },
    onDateChange(e) {
      this.date = e.detail.value
      this.$emit('onDateChange', this.date)
    },
  },
}
</script>

<style lang="less" scoped></style>
