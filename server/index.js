"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express = require("express");
var app = express();
var cors = require("cors");
var connectToDb = require("./db/connectToDb");
var ApartmentRouter = require("./routes/apartment");
var PORT = process.env.PORT || 3002;
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/apartments", ApartmentRouter);
var start = function () {
    connectToDb().then(function () {
        return app.listen(PORT, function () {
            console.log("Server is running on http://localhost:".concat(PORT));
        });
    });
};
start();
// app.use(cors(corsOptions));
// app.use(express.json());
// app.use("/apartments", ApartmentRouter);
module.exports = app;
exports.default = app;
