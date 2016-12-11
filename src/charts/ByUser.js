import React from 'react'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryStack } from 'victory'
import carriers from '../helpers/carriers'
const carrierList = Object.keys(carriers).map(key => Object.assign(carriers[key], {
  carrier: key
}))


const Chart = ({ data }) => {
  return (
    <div>
      <h3>Top users</h3>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickFormat={tick => ``}
        />
        <VictoryAxis
          dependentAxis
          tickCount={5}
        />
        <VictoryStack>
          {carrierList.map(item => (
            <VictoryBar
              key={item.carrier}
              data={data}
              x="user"
              y={datum => datum[item.carrier] || 0}
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
