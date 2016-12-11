const days = 'Sun Mon Tue Wed Thu Fri Sat'.split(' ')

function getDayOfWeek (d) {
  const day = d.getDay()
  return days[day]
}

export default getDayOfWeek
