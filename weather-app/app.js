const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');
// const coordinates = require('./utils/coordinates');
const fs = require('fs');

// fs.writeFileSync('./utils/coordinates.js', 'const city = "Los Angeles" \n module.exports = coordinates')

console.log(process.argv)
const address = process.argv[2]

geocode(address, (error, data) => {
    if (error) {
        return console.log('Geocode error:', error);
    }
    
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        console.log('latitude:',  data.latitude, 'longitude:', data.longitude)
        if (error) {
            return console.log('Forecast error:', error);
        }
        
        // console.log('Forecast data:', forecastData);
        console.log('data location:', data.location)
        console.log('forecast data:',  forecastData)
    });
});

