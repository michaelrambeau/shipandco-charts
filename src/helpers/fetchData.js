function fetchData () {
  const p = [
    fetchShipmentsByDay(),
    fetchShipmentsByCarrier(),
    fetchShipmentsByCountry(),
    fetchShipmentsByUser()
  ]
  return Promise.all(p)
    .then(arr => {
      const [shipmentsByDay, shipmentsByCarrier, shipmentsByCountry, shipmentsByUser] = arr
      return {
        shipmentsByDay,
        shipmentsByCarrier,
        shipmentsByCountry,
        shipmentsByUser
      }
    })
}

function fetchShipmentsByDay () {
  const url = '/json/byDateAndCarrier.json'
  return fetch(url)
    .then(r => r.json())
    .then(json => {
      const data = json.slice(0, 21).reverse()
      return data
    })
}

function fetchShipmentsByCarrier () {
  const url = '/json/byCarrier.json'
  return fetch(url)
    .then(r => r.json())
    .then(json => {
      return json
    })
}

function fetchShipmentsByCountry () {
  const url = '/json/byCountryAndCarrier.json'
  return fetch(url)
    .then(r => r.json())
    .then(json => {
      return json
        .sort((a, b) => a.total > b.total ? -1 : 1)
        .filter(datum => datum.total > 100)
        .slice(0, 10)
    })
}

function fetchShipmentsByUser () {
  const url = '/json/byUserAndCarrier.json'
  return fetch(url)
    .then(r => r.json())
    .then(json => {
      return json.slice(0, 10)
    })
}

export default fetchData
