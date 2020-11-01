const mongoose = require('mongoose');
const { mongourl } = require('./config/keys')

// Importing Schema from Model 
const Wishlist = mongoose.model('wishes')
// To connect connect to MongoDB database
mongoose.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology: true })


// Sending Responses at various routes through ExpressJS at 5000 port

module.exports = (app) => {

    // Handle Get Routes

    app.get('/getlist', (req, res)=>{

        // Get From MongoDB
        Wishlist.find({}).then(data => {
            res.send({wishlist:data})
        })
    })
    
    app.get('/about', (req, res)=>{
        res.render('about')
    })

    app.get('/profile/:id', (req,res)=>{
        res.send(`Requested User Profile is ${req.params.id}`)

    })

    // Handle Post Request from Client Side
    app.get('/form-data/:item', (req,res)=>{
        // Posting On MongoDb
        const Item = new Wishlist({
            wishlist_item:req.params.item
        });

        Item.save().then(data => {
            res.send(data)
        })

    })

    // Handle Delete Request from Client Side
    app.delete('/remove/:id', (req,res)=>{
        
        // Delete from MongoDB

        Wishlist.findOneAndRemove({_id:req.params.id}).then(data=>{
            res.send(data);

        });

    })


    // Sending Files as Responses to CLient side (index.html File)

    // Sending whole file to Client Side
    // app.get('/file', (req, res) =>{
    //     res.sendFile(__dirname +'/index.html')
    // })

}
