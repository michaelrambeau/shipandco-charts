import React from 'react'
import { VictoryChart, VictoryBar, VictoryStack, VictoryAxis, VictoryLabel } from 'victory'
import carriers from '../helpers/carriers'
const carrierList = Object.keys(carriers).map(key => Object.assign(carriers[key], {
  carrier: key
}))

const Chart = ({ data }) => {
  const dataAndLabels = data.map(item => {
    return Object.assign({}, item, {
      label: `${item.country}`
    }
  )})
  return (
    <div>
      <h3>By country</h3>
      <VictoryChart
        domainPadding={20}
      >
        <VictoryAxis
          tickFormat={tick => ``}
          axisLabelComponentCC={
            <VictoryLabel angle={90} verticalAnchor="middle" textAnchor="end"/>
          }
        />
        <VictoryAxis
          dependentAxis
          tickCount={5}
        />
        <VictoryStack
          labels={datum => datum.country}
        >
          {carrierList.map(item => (
            <VictoryBar
              key={item.carrier}
              data={data}
              x="country"
              y={datum => datum[item.carrier] || 0}
              labelXX={datum => datum.country}
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

export default Chart
