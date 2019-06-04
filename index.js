const express = require('express')
const connectDB = require('./config/db')


const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}))

 app.get("/", (req, res) => res.send("Hello!"));

 // Use Controllers 
app.use('/api/users', require('./server/controllers/users'))
app.use('/api/profile', require('./server/controllers/profile'))
app.use('/api/posts', require('./server/controllers/posts'))
app.use('/api/auth', require('./server/controllers/auth'))

 const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Nothing like a good ${port} wine!`));








