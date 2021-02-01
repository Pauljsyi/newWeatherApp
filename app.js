const request = require('request')
const express = require('express')
require('dotenv').config('./../bin/dev');


// var api = '415b7647c01d36e1c576ca58b514567e'
var api =process.env.API_KEY

const url = `http://api.weatherstack.com/current?access_key=${api}&query=los%angeles&units=f`

request({ url: url, json:true }, (error, response) => {
    // const body = JSON.parse(response.body)
    const body = response.body
    const current = body.current
    const icon = body.current.weather_icons[0]
    const description = body.current.weather_descriptions[0]
    // console.log(description)
    console.log(`${description}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out`)
    // const data = JSON.parse(response.body)
    // console.log(data.current)
})

