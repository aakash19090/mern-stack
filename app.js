const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Importing Routes
require('./routes')(app);

// Serving Static Files from Serverside. Useful to link external CSS or JS files to index.html file
app.use(express.static('public'))

// Setting View Engine
app.set('view engine', 'ejs')

// To allow GET requests from this server
// app.use(function(req,res,next){
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET');
    
//     // Pass to the next layer of middleware
//     next();
// });


app.listen(port, ()=>{
    console.log(`Server is running from port:${port}`);
});