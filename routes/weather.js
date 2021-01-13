const { response } = require('express');
var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");

  

router.get('/now', function(req, res, next) {
    let key = 'ab6e8c01e4475d5fb322c5e5e2a68cd8';
let lon = -97.060992;
let lat = 32.708018;
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}`;
fetch(url)
    .then(response => response.json())
    .then(data=>{
        
        res.render('weather', { title: 'Weather Now',
        forecast:data.daily,
        temp: KtoF(data.daily[0].temp.day),
        windSpeed: data.daily[0].wind_speed,
        description: data.daily[0].weather[0].description.replace('"','').replace('"',''),
        pressure: data.daily[0].pressure,
        humidity:data.daily[0].humidity,
        dewPoint:data.daily[0].dew_point,
        feelsLike:KtoF(data.daily[0].feels_like.day),
        date:new Date()
      });
        
    })
    
  });
  function KtoF (temp) {
    let f = (temp - 273) * 9 / 5 + 32;
    return Math.floor(f);
}
  module.exports = router;