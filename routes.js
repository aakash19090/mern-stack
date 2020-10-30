const mongoose = require('mongoose');
const { mongourl } = require('./config/keys')

// Importing Schema from Model 
const Wishlist = require('./models/wishlist')
// To connect connect to MongoDB database
mongoose.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology: true })


// Sending Responses at various routes through ExpressJS at 5000 port

let wishlist_items = [];

module.exports = (app) => {

    // Handle Get Routes

    app.get('/', (req, res)=>{
        res.render('home', {wishlist:wishlist_items})
    })
    
    app.get('/about', (req, res)=>{
        res.render('about')
    })

    app.get('/profile/:id', (req,res)=>{
        res.send(`Requested User Profile is ${req.params.id}`)

    })

    // Handle Post Request from Client Side
    app.post('/form-data', (req,res)=>{

        const Item = new Wishlist({
            wishlist_item:req.body.item
        });

        Item.save().then(data => {
            console.log("Saved!!!!")
        })

        // wishlist_items.push(req.body.item)
        // res.send(wishlist_items)
    })

    // Handle Delete Request from Client Side
    app.delete('/remove/:id', (req,res)=>{
        let itemToDelete = req.params.id;

        let itemIndex = wishlist_items.findIndex( item => {
            if( item === itemToDelete ){
                return item
            }
        })

        wishlist_items.splice(itemIndex, 1);
        res.send(wishlist_items)
    })


    // Sending Files as Responses to CLient side (index.html File)

    // Sending whole file to Client Side
    // app.get('/file', (req, res) =>{
    //     res.sendFile(__dirname +'/index.html')
    // })

}
