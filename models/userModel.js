const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 0
    },
    posts: {
        type: Array,
        default: []
    },
    images:{
        type: Object,
        required: false
    },
    following: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    }
},{
    timestamps: true 

})

module.exports = mongoose.model('Users', userSchema)