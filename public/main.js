const main = () => {
  // DONE set up input
  // DONE make button work
}

const searchWeatherFromApi = () => {
  // document.querySelector('.search').disabled = true
  //get city name
  const cityName = document.querySelector('.location-search').value
  console.log(cityName)
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      cityName +
      '&appid=017ef3e4bf1e11d8cf9397e2e73fd25a'
  ).then(response => {
    console.log('the fetch worked')
  })
  // set up fetch
  // then display
  // css stuff for each possible display
}

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.search')
  .addEventListener('click', searchWeatherFromApi)
