const request = require('request')
require('dotenv').config('./../bin/dev');
var http = require('http')

var api =process.env.API_KEY

const url = `http://api.weatherstack.com/current?access_key=${api}&query=Seattle&units=f`

request({ url: url, json:true }, (error, response) => { 

    if (error) {
        console.log('You are not connected to the internet')
    } else if (response.body.success === false){
        console.log("Can't find location...")
    } else { 
        const current = response.body.current
        const description = current.weather_descriptions[0]
        const city = response.body.location.name 
    
            console.log(`${response.body.location.localtime} \n${description} in ${city}. \nIt is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out`)

    } 
})


