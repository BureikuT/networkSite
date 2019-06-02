const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const users = require('./controllers/users')
const profile = require('.controllers/profile')
const posts = require('./controllers/posts')

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//DB Config
const db = require('../config/keys').mongoURI;

// Connect to MongoDB
mongoose
.connect(db, {useNewUrlParser: true,
    useCreateIndex: true})
.catch(err => console.log(err))


app.get("/", (req, res) => res.send("Hello!"));

// Use Controllers 
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Nothing like a good ${port} wine!`));