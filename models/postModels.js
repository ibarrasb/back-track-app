const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
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