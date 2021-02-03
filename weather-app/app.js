const request = require('request')
const express = require('express')
require('dotenv').config('./../bin/dev');
var http = require('http')

var api =process.env.API_KEY
var token = process.env.TOKEN

const weather = `http://api.weatherstack.com/current?access_key=${api}&query=Los%Angeles&units=f`

// request({ url: weather, json:true }, (error, response) => { 

//     if (error) {
//         console.log('WeatherStack: You are not connected to the internet')
//     } else if (response.body.success === false){
//         console.log("Can't find location...")
//     } else { 
//         const body = response.body
//         const current = body.current
//         const icon = body.current.weather_icons[0]
//         const description = body.current.weather_descriptions[0]
//         const city = body.location.name 
//         const region = body.location.region
    
//             console.log(`${body.location.localtime} \n${description} in ${city}. \nIt is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out`)

//     } 
// })

//success output
    const geoCode = `https://api.mapbox.com/geocoding/v5/mapbox.places/dubai.json?access_token=${token}`

// cannot find coordinates error
    // const geoCode = `https://api.mapbox.com/geocoding/v5/mapbox.places/324567.json?access_token=${token}`


// request( {url: geoCode, json:true}, (error, response) => {

//     if (error) {
//         //when disconnected to internet
//         console.log('GeoCode: not connected to internet')
//     } else if (response.body.features.length === 0){
//         console.log('Cannot find coordinates')
//     } else { 
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         // console.log('latitude:', latitude, 'longitude:', longitude)
//     }
// } )


// const geocode = (address, callback) => {
//     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/` + encodeURIComponent(address) + `.json?access_token=${token}`

//     request({ url: url, json: true}, (error, response) => {
//         if (error) {
//             callback('Cannot connect', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('cannot find coordinates, try another search', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

// geocode('tokyo', (error, data)=>{
// // console.log('error', error)
// console.log('data', data)
// })


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (long, lat, callback) => {
    const weather = `http://api.weatherstack.com/current?access_key=${api}&query=${lat},${long}&units=f`
    console.log(weather)
    
    request({ url: weather, json: true}, (error, response) => {
        // console.log(response.body)
        if (error) {
            console.log('cannot connect to internet, please check your connection!')
        } else if (response.body.success === false){
            console.log('cannot find results, please try another search')
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
}

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })