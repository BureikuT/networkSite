const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Use Controllers
app.use("/api/users", require("./server/controllers/users"));
app.use("/api/profile", require("./server/controllers/profile"));
app.use("/api/posts", require("./server/controllers/posts"));
app.use("/api/auth", require("./server/controllers/auth"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Nothing like a good ${port} wine!`));
