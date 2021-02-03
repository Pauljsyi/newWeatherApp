const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

geocode('tokyo', (error, data) => {
    console.log('Geocode error:', error);
    console.log('Geocode data:', data);
});

forecast(34.0536909,-118.242766, (error, data) => {
    console.log('Forecast error:', error);
    console.log('Forecast data:', data);
});