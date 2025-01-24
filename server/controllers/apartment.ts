const Apartment = require('../models/apartment');
const asyncHandler = require('express-async-handler');
import { Request, Response } from 'express';


interface ApartmentQuery {
    rooms?: string;
    price?: {
      max?: string;
      min?: string;
    };
  }

exports.getApartments = asyncHandler(async (req: Request<{}, {}, {}, ApartmentQuery>, res: Response) => {
  const { rooms, price } = req.query;
  const filter: any = {};

  if (rooms) {
    filter["rooms"] = Number(rooms);
  }

  if (price?.max || price?.min) {
    filter["price"] = {
      ...(price.max && { $lte: Number(price.max) }),
      ...(price.min && { $gte: Number(price.min) }),
    };
  }

  const apartments = await Apartment.find(filter);
  res.status(200).json(apartments);
});

exports.getApartment = asyncHandler(async(req: Request, res: Response) => {
    const {apartmentId} = req.params;

    if (apartmentId) {
        const apartment = await Apartment.findById(apartmentId).sort('title');

        res.status(200).json(apartment);
    } else {
        res.status(404).json({msg: 'Apartment not found'});
    }
    
});


exports.createApartment = asyncHandler(async(req: Request, res: Response) => {
    const {title, description, price, rooms} = req.body;
    try {
        const data = await Apartment.create({title, description, price, rooms, images: []});
    } catch (error) {
        console.log(error)
    }
});

exports.editApartment = asyncHandler(async(req: Request, res: Response) => {
    const {apartmentId} = req.params;
    const {title, description, price, rooms} = req.body;

    if (apartmentId) {
        const editedApartment = await Apartment.findByIdAndUpdate(apartmentId, {
            $set: { title, description, price, rooms }
        }, { new: true });

        res.status(200).json(editedApartment);
    } else {
        res.status(404).json({msg: 'Apartment not found'});
    }

});


exports.deleteApartment = asyncHandler(async(req: Request, res: Response) => {
    const {apartmentId} = req.params;
    if (apartmentId) {
        await Apartment.findByIdAndDelete(apartmentId);
        res.status(200).json({msg: 'Apartment deleted'});
    } else {
        res.status(404).json({msg: 'Apartment not found'});
    }

});