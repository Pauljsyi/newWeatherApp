const request = require('request');
require('dotenv').config('./../bin/dev');

var token = process.env.TOKEN

//success output
const geoCode = `https://api.mapbox.com/geocoding/v5/mapbox.places/dubai.json?access_token=${token}`

// cannot find coordinates error
    // const geoCode = `https://api.mapbox.com/geocoding/v5/mapbox.places/324567.json?access_token=${token}`

const geocode = (address, callback) => {

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/` + encodeURIComponent(address) + `.json?access_token=${token}`

    request({ url: url, json: true}, (error, response) => {
        
        if (error) {

            callback('Cannot connect', undefined);

        } else if (response.body.features.length === 0) {

            callback('cannot find coordinates, try another search', undefined);

        } else {

            callback(undefined, {

                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name

            });
        };
    });
};


module.exports = geocode