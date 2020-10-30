const mongoose = require('mongoose');
const { mongourl } = require('./config/keys')

// Importing Schema from Model 
const Wishlist = mongoose.model('wishes')
// To connect connect to MongoDB database
mongoose.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology: true })


// Sending Responses at various routes through ExpressJS at 5000 port

module.exports = (app) => {

    // Handle Get Routes

    app.get('/', (req, res)=>{

        // Get From MongoDB
        Wishlist.find({}).then(data => {
            res.render('home',{wishlist:data})
        })
    })
    
    app.get('/about', (req, res)=>{
        res.render('about')
    })

    app.get('/profile/:id', (req,res)=>{
        res.send(`Requested User Profile is ${req.params.id}`)

    })

    // Handle Post Request from Client Side
    app.post('/form-data', (req,res)=>{
        // Posting On MongoDb
        const Item = new Wishlist({
            wishlist_item:req.body.item
        });

        Item.save().then(data => {
            res.send(data)
        })

        // wishlist_items.push(req.body.item)
        // res.send(wishlist_items)
    })

    // Handle Delete Request from Client Side
    app.delete('/remove/:id', (req,res)=>{
        
        // Delete from MongoDB

        Wishlist.findOneAndRemove({wishlist_item:req.params.id}).then(data=>{
            console.log(req.params.id);
            res.send(data);

        });


        // let itemToDelete = req.params.id;

        // let itemIndex = wishlist_items.findIndex( item => {
        //     if( item === itemToDelete ){
        //         return item
        //     }
        // })

        // wishlist_items.splice(itemIndex, 1);
        // res.send(wishlist_items)
    })


    // Sending Files as Responses to CLient side (index.html File)

    // Sending whole file to Client Side
    // app.get('/file', (req, res) =>{
    //     res.sendFile(__dirname +'/index.html')
    // })

}
