import { createSlice } from '@reduxjs/toolkit';
import { ApartmentType } from 'types';
import {getApartments, getApartmentById, createApartment, editApartment, deleteApartment} from '../api'

interface ApartmentsSliceState {
  apartments: ApartmentType[];
  apartmentsLoading: boolean,
  apartmentsErrorMessage: string | null,

  selectedApartment: ApartmentType | null;
  selectedApartmentLoading: boolean;
  selectedApartmentErrorMessage: string | null;
  
  createApartmentErrorMessage: string | null;
  editApartmentErrorMessage: string | null;
  deleteApartmentErrorMessage: string | null;

  initialApartmentsPriceRange: {min: number | null, max: number | null};
}

const initialState: ApartmentsSliceState = {
    apartments: [],
    apartmentsLoading: false,
    apartmentsErrorMessage: null,

    selectedApartment: null,
    selectedApartmentLoading: false,
    selectedApartmentErrorMessage: null,

    createApartmentErrorMessage: null,
    editApartmentErrorMessage: null,
    deleteApartmentErrorMessage: null,

    initialApartmentsPriceRange: {min: null, max: null},
};

export const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getApartments.pending, (state) => {
      state.apartmentsLoading = true;
    })
    .addCase(getApartments.fulfilled, (state, {payload}) => {
      state.apartments = payload;

      const { min, max } = state.apartments.reduce(
        (acc, apartment) => {
          return {
            min: apartment.price! < acc.min ? apartment.price! : acc.min,
            max: apartment.price! > acc.max ? apartment.price! : acc.max
          };
        },
        { min: Infinity, max: -Infinity }
      );

      state.initialApartmentsPriceRange = {min, max};
      state.apartmentsLoading = false;

    })
    .addCase(getApartments.rejected, (state, {payload}) => {
      state.apartmentsLoading = false;
      state.apartmentsErrorMessage = payload as string;
    })

    .addCase(getApartmentById.pending, (state) => {
      state.selectedApartmentLoading = true;
    })
    .addCase(getApartmentById.fulfilled, (state, { payload }) => {
      state.selectedApartment = payload;
      state.selectedApartmentLoading = false;
    })
    .addCase(getApartmentById.rejected, (state, {payload}) => {
      state.selectedApartmentErrorMessage = payload as string;
    })

    .addCase(createApartment.fulfilled, (state, { payload }) => {
      state.apartments = [...state.apartments, payload];
    })
    .addCase(createApartment.rejected, (state, {payload}) => {
      state.createApartmentErrorMessage = payload as string;
    })

    .addCase(editApartment.fulfilled, (state, { payload }) => {
        const editedApartment = payload;
        const apartmentIndex = state.apartments.findIndex((apartment) => apartment?._id === editedApartment._id);

        if (apartmentIndex !== -1) {
          state.apartments[apartmentIndex] = editedApartment;
        }
    })
    .addCase(editApartment.rejected, (state, {payload}) => {
      state.editApartmentErrorMessage = payload as string;
    })

    .addCase(deleteApartment.fulfilled, (state, {payload}) => {
      state.apartments = state.apartments.filter(apartment => apartment._id !== payload);
    })
    .addCase(deleteApartment.rejected, (state, {payload}) => {
      state.deleteApartmentErrorMessage = payload as string;
    });
  },
});


export const {  } = apartmentsSlice.actions;

export default apartmentsSlice.reducer;
