const mongoose = require('mongoose')

const replySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    post: {
        type: String,
        required: true,
    },
    images:{
        type: Object,
        required: false
    }
},{
    timestamps: true 

})

module.exports = mongoose.model('Reply', replySchema)