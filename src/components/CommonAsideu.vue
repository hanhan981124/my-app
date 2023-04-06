<template>
  <div class="aside" style="width: 299px;">
    <el-card  style="padding: 0;">
      <div slot="header" class="clearfix">
        智能问答
      </div>
      <div >
        <el-row type="flex" class="row-bg">
          <el-col :span="12">
            <div>
              <img src="../assets/images/2.webp" alt="" style="height: 20px;width: 20px;border-radius: 80%;">
              <el-button>你好！</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="12">
            <div>
              <img src="../assets/images/2.webp" alt="" style="height: 20px;width: 20px;border-radius: 80%;">
              <el-button>请问你有什么问题吗？</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end" >
          <el-col :span="12">
            <div>
              <el-button>你好！</el-button>
              <img src="../assets/images/1.webp" alt="" style="height: 20px;width: 20px;border-radius: 80%;">

            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="12">
            <div>
              <el-button>你好！</el-button>
              <img src="../assets/images/1.webp" alt="" style="height: 20px;width: 20px;border-radius: 80%;">

            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="12">
            <div>
              <el-button>你好！</el-button>
              <img src="../assets/images/1.webp" alt="" style="height: 20px;width: 20px;border-radius: 80%;">

            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card>
      <span>
        <el-input v-model="input" placeholder="请输入内容" style="width: 130px;padding: 0;">
        </el-input>
      </span>
      <span>
        <el-button type="primary" icon="el-icon-check" circle style="width: 40px;"></el-button>
      </span>
    </el-card>
    <el-card>
      <div class="clearfix">资源地图</div>
      <div ref="chart" style="height: 500px;"></div>

    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  input: '',
  name: 'RelationChart',
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const chartDom = this.$refs.chart
      const myChart = echarts.init(chartDom)
      const option = {
        series: [
          {
            type: 'graph',
            layout: 'force',
            symbolSize: 60,
            roam: true,
            label: {
              show: true,
              position: 'top',
              fontSize: 12
            },
            edgeSymbol: ['none', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 6
            },
            data: [
              {
                name: '慢性病',
                category: 0,
                symbolSize: 70,
                draggable: true,
                itemStyle: {
                  color: '#FF9E9D'
                }
              },
              {
                name: '生活',
                category: 1,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  color: '#FFDCA2'
                }
              },
              {
                name: '食谱',
                category: 1,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  color: '#B5EAD7'
                }
              },
              {
                name: '医疗',
                category: 1,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  color: '#C7CEEA'
                }
              },
              {
                name: '保健',
                category: 1,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  color: '#F4A261'
                }
              }
            ],
            links: [
              {
                source: '慢性病',
                target: '生活',
                label: {
                  show: true,
                  formatter: '影响'
                },
                lineStyle: {
                  width: 2,
                  color: '#FF9E9D'
                }
              },
              {
                source: '慢性病',
                target: '食谱',
                label: {
                  show: true,
                  formatter: '影响'
                },
                lineStyle: {
                  width: 2,
                  color: '#FF9E9D'
                }
              },
              {
                source: '慢性病',
                target: '医疗',
                label: {
                  show: true,
                  formatter: '治疗'
                },
                lineStyle: {
                  width: 2,
                  color: '#FF9E9D'
                }
              },
              {
                source: '慢性病',
                target: '保健',
                label: {
                  show: true,
                  formatter: '预防'
                },
                lineStyle: {
                  width: 2,
                  color: '#FF9E9D'
                }
              }
            ],
            categories: [
              {
                name: '慢性病'
              },
              {
                name: '关联'
              }
            ],
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 3
              }
            },
            force: {
              repulsion: 200,
              edgeLength: 80
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>
<sttyle lang="less" scoped>
.aside {
  margin-left: 0;
  width: 300px;
  height: 100%;
  // border-right: 1px solid #7e7979;
}

.clearfix {
  align-items: center;
  color: #ed3535;
  font-size: 24px;
}

.box-card {
  padding: none;
 }
</sttyle>
