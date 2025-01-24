"use strict";
const mongoose = require('mongoose');
const ApartmentSchema = mongoose.Schema({
    title: {
        type: String,
        max: 90,
        required: true,
    },
    description: {
        type: String,
        max: 355,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rooms: {
        type: Number,
        enum: [1, 2, 3],
        required: true,
    },
    images: [String],
}, { timestamps: true });
module.exports = mongoose.model('Apartment', ApartmentSchema);
