

const options = {
  method: 'GET',
  url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  headers: {
    'X-RapidAPI-Key': '43d064b8ffmsh40cdce25ad1f591p192817jsneb6afd2e61b2',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city, options)
    .then(Response => Response.json())
    .then(Response => {

      console.log(Response)

      cloud_pct.innerHTML = Response.cloud_pct
      temp.innerHTML = Response.temp
      feels_like.innerHTML = Response.feels_like
      humidity.innerHTML = Response.humidity
      min_temp.innerHTML = Response.min_temp
      max_temp.innerHTML = Response.max_temp
      wind_speed.innerHTML = Response.wind_speed
      wind_degrees.innerHTML = Response.wind_degrees
      sunrise.innerHTML = Response.sunrise
      sunset.innerHTML = Response.sunset

    })
}

submit.addEventListener("click",(e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Delhi")