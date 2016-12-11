import React, { Component } from 'react'
import ByDay from './charts/ByDay'
import ByCarrier from './charts/ByCarrier'
import ByCountry from './charts/ByCountry'
import ByUser from './charts/ByUser'
// import logo from './logo.svg'
import './App.css'
import fetchData from './helpers/fetchData'

class App extends Component {
  constructor (props) {
    super(props)
    fetchData()
      .then(data => {
        this.setState({ data })
      })
    this.state = {}
  }
  render () {
    const { data } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <h2>Shipandco charts</h2>
        </div>
        <main>
          <Charts data={data} />
        </main>
      </div>
    )
  }
}

const Charts = ({ data }) => {
  if (!data) return (
    <div>Loading...</div>
  )
  return (
    <div>
      <ByDay data={data.shipmentsByDay} />
      <hr />
      <ByCountry data={data.shipmentsByCountry} />
      <hr />
      <ByUser data={data.shipmentsByUser} />
      <hr />
      <ByCarrier data={data.shipmentsByCarrier} />
    </div>
  )
}

export default App
