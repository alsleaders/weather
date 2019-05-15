const getUnitsForRequest = () => {
  // get the current value of the radios
  if (document.querySelector('.kelvin').checked) {
    return ''
  }
  if (document.querySelector('.celsius').checked) {
    return '&units=metric'
  }
  if (document.querySelector('.fahrenheit').checked) {
    return '&units=imperial'
  }
}

const searchWeatherFromApi = () => {
  const cityName = document.querySelector('.location-search').value
  console.log(cityName)
  // set up fetch
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      cityName +
      '&appid=017ef3e4bf1e11d8cf9397e2e73fd25a' +
      getUnitsForRequest()
  )
    .then(response => {
      console.log(response)
      return response.json()
    })
    // then display
    .then(city => {
      document.querySelector('.city-name').textContent = city.name
      console.log({ city })
      console.log(city.weather)
      console.log(city.weather[0])
      // console.log(city.weather[0].description)
      document.querySelector('.display-text').textContent =
        city.weather[0].main + ' - ' + city.weather[0].description
      document.querySelector('.display-temp').textContent = city.main.temp
      document.querySelector('.display-wind').textContent = city.wind.speed
    })
    .catch(error => {
      alert('Please check your entry and try your search again!')
    })
  // css stuff for each possible display
}

document
  .querySelector('.search')
  .addEventListener('click', searchWeatherFromApi)
document.querySelectorAll('input[type=radio]').forEach(radio => {
  radio.addEventListener('click', searchWeatherFromApi)
})
