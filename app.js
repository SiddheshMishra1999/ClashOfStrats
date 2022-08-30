const { spawn } = require('child_process')
const exp = require('constants')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const { render } = require('ejs')

const StrategyRoutes = require('./routes/strategyRoutes')
require('dotenv').config()



// express app
const app = express()

// connect to mongodb
const dbURI = process.env.dbURI
mongoose.connect(dbURI)
    .then((result)=> // listen for req\
    app.listen(4000))
    .catch((err)=>console.log(err))
// Register view engine
app.set('view engine', 'ejs')


// middleware & static files (css files)
app.use(express.static('public'))

// takes all the url encoded data and passes it as an object that we can use
// for accepting form data
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))


app.get('/', (req, res)=>{
    res.render('index', {title: 'Home'})
})


app.get('/about', (req, res)=>{

    res.render('about', {title: 'About'})
})

// Strategy routes

app.use('/strategies', StrategyRoutes)

// 404 page
app.use((req, res)=>{
    //res.status(404).sendFile('./Views/404.html', {root: __dirname})
    res.status(404).render('404', {title: 'Error'})
})