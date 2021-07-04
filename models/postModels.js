const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    post: {
        type: String,
        required: true,
    },
    replies: {
        type: Array,
        required: false,
    },
    likes: {
        type: Number,
        default: 0
    },
    images:{
        type: Object,
        required: false
    }
},{
    timestamps: true 

})

module.exports = mongoose.model('Posts', postSchema)