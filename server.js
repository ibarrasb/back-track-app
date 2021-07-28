require("dotenv").config();
const  yeahp = require("http");
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/postRoutes'))

// Connect to mongodb
mongoose.connect("mongodb+srv://ibarrasb:QBc35KaVjGliWMMN@cluster0.9yudd.mongodb.net/shower-thoughts?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})

//required for deployment to heroku 
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

//prevents heroku app from sleeping
setInterval(function() {
    yeahp.get("http://shower-thoughts-v2.herokuapp.com");
}, 300000); // every 5 minutes (300000)

//starts server
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})