const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=&query=Los%Angeles#'

request({ url: url }, (error, response) => {
    console.log(response.body.current)


    // const data = JSON.parse(response.body)
    // console.log(data.current)
})