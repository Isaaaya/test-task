"use strict";
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/connectToDb');
const ApartmentRouter = require('./routes/apartment');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/apartments", ApartmentRouter);

const start = () => {
    connectToDb().then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    });
};
start();

module.exports = app;
