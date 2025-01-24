require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/connectToDb');
const ApartmentRouter = require('./routes/apartment');

const app = express();
const PORT = process.env.PORT || 3002;


// Start the server
const start = () => {
  connectToDb().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  });
};

start();

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Routes
app.use("/apartments", ApartmentRouter);

// Export the app for Vercel
module.exports = app;  // This is the correct export when using `require`
