import React from 'react'
import { VictoryPie } from 'victory'
import carriers from '../helpers/carriers'

const style = {
  data: {
    fill: d => carriers[d.carrier] ? carriers[d.carrier].color : 'grey'
  }
}

const Chart = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.count, 0)
  const label = (datum) => {
    const ratio = datum.count / total
    const percent = ratio > 0.04 ? `${(ratio * 100).toFixed(1)} %` : ''
    return ratio > 0.04 ? `${datum.carrier}` : ''
  }
  return (
    <div>
      <h3>By carrier</h3>
      <table>
        <tbody>
          {data
            .sort((a, b) => a.count > b.count ? -1 : 1)
            .map((datum, index) => (
              <tr key={datum.carrier}>
                <td>#{index + 1}</td>
                <td>{datum.carrier}</td>
                <td>{datum.count}</td>
                <td>{(datum.count / total * 100).toFixed(1)} %</td>
              </tr>
            ))}
        </tbody>
      </table>
      <VictoryPie
        data={data}
        padding={{ top: 50, left: 100, right: 100 }}
        x="carrier"
        y="count"
        labels={label}
        style={style}
      />
    </div>
  )
}

export default Chart
