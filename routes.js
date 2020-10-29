// Sending responses to other routes

module.exports = (app) => {

    app.get('/test', (req, res)=>{
        res.send("Just a test from Express JS")
    })
    
    app.get('/about', (req, res)=>{
        res.send("About page from Express JS")
    })
}
