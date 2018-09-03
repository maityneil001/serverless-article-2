'use strict';
const AWS = require('aws-sdk');
const request = require('request');
module.exports.getLocal = (e, ctx, cb) => {
  const options = {
    method: 'GET',
    url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kolkata%2C%20wb%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
  }

  request(options, (err, response, body) => {
    console.log(body);
    if (err) {
      console.log(err);
      ctx.done(null, err)
    }
    ctx.done(null, body)
  });
};
