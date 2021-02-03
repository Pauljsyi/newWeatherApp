const request = require('request');
require('dotenv').config('./../bin/dev');
var api =process.env.API_KEY


const forecast = (lat, long, callback) => {
    const weather = `http://api.weatherstack.com/current?access_key=${api}&query=${lat},${long}&units=f`
    
    request({ url: weather, json: true}, (error, response) => {
        // console.log(response.body)
        if (error) {

            callback('cannot connect to internet, please check your connection!', undefined)

        } else if (response.body.success === false){

            callback('cannot find results, please try another search', undefined)

        } else {

            const body = response.body
            const current = body.current
            const icon = body.current.weather_icons[0]
            const description = body.current.weather_descriptions[0]
            const city = body.location.name 
           
    
                callback(undefined, `${body.location.localtime} \n${description} in ${city}. \nIt is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out`)

        }
    })
}


module.exports = forecast