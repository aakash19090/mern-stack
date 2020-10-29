const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Importing Routes

require('./routes')(app);

// Serving Static Files from Serverside. Useful to link external CSS or JS files to index.html file

app.use(express.static('public'))


// Sending Responses at various routes through ExpressJS at 5000 port

app.get('/', (req, res)=>{
    res.send("Hello world from Express JS")
})



// To allow GET requests from this server

// app.use(function(req,res,next){
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET');
    
//     // Pass to the next layer of middleware
//     next();
// });


// Sending Responses to CLient side (index.html File)

app.get('/home', (req, res)=>{
    res.send({
        firstName : "Akash",
        lastName : "Sharma"
    })
})

// Sending whole file to Client Side
app.get('/file', (req, res) =>{
    res.sendFile(__dirname +'/index.html')
})


app.listen(port, ()=>{
    console.log(`Server is running from port:${port}`);
});