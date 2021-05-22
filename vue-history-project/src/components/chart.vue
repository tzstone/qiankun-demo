<template>
  <div>
    my chart:
    <div id="chartbox" style="width: 300px;height:300px;"/>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: '',
  data() {
    return {
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var myChart = echarts.init(document.getElementById('chartbox'))
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style lang='less' scoped>

</style>
