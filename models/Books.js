const mongoose = require("mongoose");

const BooksSchema = mongoose.Schema({
    // bookId: {
    //     type: Number, 
    //     auto: true,
    //      unique: true,
    //      required:true,
    //      startAt: 5000,
    //      incrementBy: 1
    //     },
    title:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    genre:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Books",BooksSchema);