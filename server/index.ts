require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/connectToDb');
const ApartmentRouter = require('./routes/apartment');

const app = express();
const PORT = process.env.PORT || 3002;


const start = () => {
  connectToDb().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  });
};

start();

app.use(cors({ origin: "https://test-task-client-seven.vercel.app" }));
app.use(express.json());

app.use("/apartments", ApartmentRouter);


module.exports = app;
