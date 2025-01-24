"use strict";
const router = require('express').Router();
const { getApartments, createApartment, deleteApartment, getApartment, editApartment } = require('../controllers/apartment');
router.route('/')
    .get(getApartments)
    .post(createApartment);
router.route('/:apartmentId')
    .get(getApartment)
    .put(editApartment)
    .delete(deleteApartment);
module.exports = router;
