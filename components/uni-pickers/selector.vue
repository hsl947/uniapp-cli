<template>
  <picker
    @change="onPickerChange"
    :value="index"
    :range="dataArray"
    :range-key="name"
  >
    <text>{{ dataArray[index][name] }}</text>
  </picker>
</template>

<script>
export default {
  name: 'PickerSelector',
  props: {
    dataArray: {
      type: Array,
      default: () => []
    },
    value: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: 'name'
    }
  },
  components: {},
  data() {
    return {
      index: this.value
    }
  },
  created() {},
  methods: {
    onPickerChange(e) {
      this.index = +e.detail.value
      this.$emit('onPickerChange', this.index)
    }
  }
}
</script>

<style lang="less" scoped></style>
