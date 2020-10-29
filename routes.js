// Sending Responses at various routes through ExpressJS at 5000 port

const data = {
    firstName : "Akash",
    lastName : "Sharma",
    occupation : "Software Developer"
}

module.exports = (app) => {

    app.get('/', (req, res)=>{
        res.render('home', {data:data})
    })
    
    app.get('/about', (req, res)=>{
        res.render('about')
    })

    app.get('/profile/:id', (req,res)=>{
        res.send(`Requested User Profile is ${req.params.id}`)

    })

    // Sending Responses to CLient side (index.html File)


    // Sending whole file to Client Side
    // app.get('/file', (req, res) =>{
    //     res.sendFile(__dirname +'/index.html')
    // })

}
