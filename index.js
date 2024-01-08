const express = require('express');
const promBundle = require("express-prom-bundle");


const app = express();

// Add the options to the prometheus middleware most option are for http_request_duration_seconds histogram metric
// const metricsMiddleware = promBundle({
//     includeMethod: true, 
//     includePath: true, 
//     includeStatusCode: true, 
//     includeUp: true,
//     customLabels: {project_name: 'hello_world', project_type: 'test_metrics_labels'},
//     promClient: {
//         collectDefaultMetrics: {
//         }
//       }
// });

// // add the prometheus middleware to all routes
// app.use(metricsMiddleware)

// // default endpoint 
// app.get("/",(req,res) => res.json({
//     "GET /": "All Routes", 
//     "GET /hello": "{hello:world}", 
//     "GET /metrics": "Metrics data",
//     "POST /bye": "POST Request: + post data"
// }));
// // hello world rest endpoint 
// app.get("/hello", (req,res) => res.json({hello:"world"}));
// app.post("/bye", (req,res) => res.send("POST Request : "+ req));

// app.listen(8081, function () {    
//     console.log('Listening at http://localhost:8081');  
//   });


  function addNumbers(number1, number2) {
    // Check if the inputs are valid numbers
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
      throw new Error('Both inputs must be numbers');
    }
  
    // Perform the addition
    const sum = number1 + number2;
  
    // Return the result
    return sum;
  }

  module.exports = {
    addNumbers
  }