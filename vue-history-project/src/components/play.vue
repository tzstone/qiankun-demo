<template>
  <div>
    spa-history-new {{ name }}
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      name: 'play'
    }
  },
  mounted() {
    console.error('spa-history play')
  },
  methods: {}
}
</script>

<style lang='less' scoped>

</style>
