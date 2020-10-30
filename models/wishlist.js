const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WishListSchema = Schema({
    wishlist_item:String
})

module.exports = mongoose.model('wishes', WishListSchema)