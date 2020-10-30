const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WishListSchema = Schema({
    wishlist_item:String
})

mongoose.model('wishes', WishListSchema)