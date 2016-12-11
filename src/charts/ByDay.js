import React, { Component } from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip, VictoryStack } from 'victory'
import carriers from '../helpers/carriers'
import getDayOfWeek from '../helpers/getDayOfWeek'
const carrierList = Object.keys(carriers).map(key => Object.assign(carriers[key], {
  carrier: key
}))

class Chart extends Component {
  render () {
    const { data } = this.props
    const dataAndLabels = data.map(item => {
      const total = carrierList.reduce((sum, carrier) => (item[carrier.carrier] || 0) + sum, 0)
      return Object.assign({}, item, {
        label: `${item.date} (${getDayOfWeek(new Date(item.date))})\n${total} shipments`
      }
    )}
  )
    return (
      <div>
        <h3>By day - Last 3 weeks</h3>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis
            tickFormat={tick => ``}
          />
          <VictoryAxis
            dependentAxis
            tickCount={10}
          />
          <VictoryStack>
            {carrierList.map(item => (
              <VictoryBar
                key={item.carrier}
                data={dataAndLabels}
                x="date"
                y={datum => datum[item.carrier] || 0}
                labelComponent={<VictoryTooltip/>}
                style={{
                  data: {
                    fill: item.color
                  }
                }}
                />
            ))}
          </VictoryStack>
        </VictoryChart>
      </div>
    )
  }
}

export default Chart
