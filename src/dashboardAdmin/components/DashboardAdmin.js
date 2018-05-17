import React, { Component } from 'react'
// import the core library.
import ReactEchartsCore from 'echarts-for-react/lib/core'
// then import echarts modules those you have used manually.
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import '../../css/dashboardAdmin.css'

class DashboardAdmin extends Component {

  getOption = () => {
    return {
      title: {
          text: 'ECharts entry example'
      },
      tooltip: {},
      legend: {
          data:['Sales']
      },
      xAxis: {
          data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
      },
      yAxis: {},
      series: [{
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    }
  }

  render() {
    return (
      <div>
        <h3>Suivi</h3>
        <ReactEchartsCore
          echarts={echarts}
          option={this.getOption()}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
          onChartReady={this.onChartReadyCallback}
          opts={{renderer: 'svg'}}
        />
      </div>
    )
  }
}

export default DashboardAdmin