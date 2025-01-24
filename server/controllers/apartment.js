"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Apartment = require('../models/apartment');
const asyncHandler = require('express-async-handler');
exports.getApartments = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rooms, price } = req.query;
    const filter = {};
    if (rooms) {
        filter['rooms'] = Number(rooms);
    }
    if (price) {
        filter['price'] = {
            $lte: Number(price.max),
            $gte: Number(price.min)
        };
    }
    ;
    const apartments = yield Apartment.find(filter);
    res.status(200).json(apartments);
}));
exports.getApartment = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { apartmentId } = req.params;
    if (apartmentId) {
        const apartment = yield Apartment.findById(apartmentId).sort('title');
        res.status(200).json(apartment);
    }
    else {
        res.status(404).json({ msg: 'Apartment not found' });
    }
}));
exports.createApartment = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, price, rooms } = req.body;
    try {
        const data = yield Apartment.create({ title, description, price, rooms, images: [] });
    }
    catch (error) {
        console.log(error);
    }
}));
exports.editApartment = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { apartmentId } = req.params;
    const { title, description, price, rooms } = req.body;
    if (apartmentId) {
        const editedApartment = yield Apartment.findByIdAndUpdate(apartmentId, {
            $set: { title, description, price, rooms }
        }, { new: true });
        res.status(200).json(editedApartment);
    }
    else {
        res.status(404).json({ msg: 'Apartment not found' });
    }
}));
exports.deleteApartment = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { apartmentId } = req.params;
    if (apartmentId) {
        yield Apartment.findByIdAndDelete(apartmentId);
        res.status(200).json({ msg: 'Apartment deleted' });
    }
    else {
        res.status(404).json({ msg: 'Apartment not found' });
    }
}));
