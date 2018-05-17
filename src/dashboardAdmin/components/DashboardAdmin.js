import React, { Component } from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import '../../css/dashboardAdmin.css'
import DashboardAdminAction from '../actions/DashboardAdminAction'
import DashboardAdminDto from '../dto/DashboardAdminDto'
import Store from '../../store/Store'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class DashboardAdmin extends Component {
  componentWillMount() {
    Store.dispatch(DashboardAdminAction.fetchAverage())
  }

  getOption = () => {
    const arrayAxis = []
    const arrayLegend = []
    const dataAxis = this.props.average.map(o => {
      return arrayAxis.push(o.type)
    })
    const dataLegend = this.props.average.map(o => {
      return arrayLegend.push(o.average)
    })
    return {
      title: {
          text: 'ECharts entry example'
      },
      tooltip: {},
      legend: {
          data:['Sales']
      },
      xAxis: {
          data: arrayAxis
      },
      yAxis: {},
      series: [{
          name: 'temps',
          type: 'bar',
          data: arrayLegend
      }]
    }
  }

  render() {
    console.log(this.props.average)
    return (
      <div>
        <nav>
          <div className='nav-wrapper nav-bar'>
            <a href='#' className='brand-logo center'><img className='responsive-img logo-center' src='images/logoPopol.png'/></a>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li><a className='nav-color-text' href='#'>Déconnexion</a></li>
              </ul>
          </div>
        </nav>
        <h3>Temps jusqu'à validation (en seconde)</h3>
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

DashboardAdmin.propTypes = {
  average: PropTypes.instanceOf(DashboardAdminDto)
}

const mapStateToProps = store => {
  return {
    average: store.DashboardAdminReducer.average
  }
}

export default connect(mapStateToProps)(DashboardAdmin)