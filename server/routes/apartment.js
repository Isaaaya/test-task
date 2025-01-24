var router = require('express').Router();
var _a = require('../controllers/apartment'), getApartments = _a.getApartments, createApartment = _a.createApartment, deleteApartment = _a.deleteApartment, getApartment = _a.getApartment, editApartment = _a.editApartment;
router.route('/')
    .get(getApartments)
    .post(createApartment);
router.route('/:apartmentId')
    .get(getApartment)
    .put(editApartment)
    .delete(deleteApartment);
module.exports = router;
