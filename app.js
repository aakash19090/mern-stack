const express = require('express');
const app = express();
const port = 5000;

// Sending Responses at various routes through ExpressJS at 5000 port

app.get('/', (req, res)=>{
    res.send("Hello world from Express JS")
})


// To allow GET requests from this server

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    // Pass to the next layer of middleware
    next();
});

app.get('/home', (req, res)=>{
    res.send({
        firstName : "Akash",
        lastName : "Sharma"
    })
})

// app.get('/test', (req, res)=>{
//     res.send("Just a test from Express JS")
// })

// app.get('/basic', (req, res)=>{
//     res.send("These are just basics of Express JS")
// })



app.listen(port, ()=>{
    console.log(`Server is running from port:${port}`);
});