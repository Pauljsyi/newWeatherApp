const request = require('request')
const express = require('express')
require('dotenv').config('./../bin/dev');
var http = require('http')

var api =process.env.API_KEY

const url = `http://api.weatherstack.com/current?access_key=${api}&query=Los%Angeles&units=f`

request({ url: url, json:true }, (error, response) => { 

    if (error) {
        console.log('WeatherStack: You are not connected to the internet')
    } else if (response.body.success === false){
        console.log("Can't find location...")
    } else { 
        const body = response.body
        const current = body.current
        const icon = body.current.weather_icons[0]
        const description = body.current.weather_descriptions[0]
        const city = body.location.name 
        const region = body.location.region
    
            console.log(`${body.location.localtime} \n${description} in ${city}. \nIt is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out`)

    } 
})

//success output
    const geoCode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY29kZXh4cHJlcyIsImEiOiJja2tvaTljaTYwYWEzMm5vNmRpankxa25hIn0.j0BCUl69x1Eu7g1TNHMnjQ&limit=1'
    
// cannot find coordinates error
    // const geoCode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/324567.json?access_token=pk.eyJ1IjoiY29kZXh4cHJlcyIsImEiOiJja2tvaTljaTYwYWEzMm5vNmRpankxa25hIn0.j0BCUl69x1Eu7g1TNHMnjQ&limit=1'


request( {url: geoCode, json:true}, (error, response) => {

    if (error) {
        //when disconnected to internet
        console.log('GeoCode: not connected to internet')
    } else if (response.body.features.length === 0){
        console.log('Cannot find coordinates')
    } else { 
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log('latitude:', latitude, 'longitude:', longitude)
    }
} )