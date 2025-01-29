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

  createApartmentLoading: boolean;
  editApartmentLoading: boolean;
  deleteApartmentLoading: boolean;
  
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

    createApartmentLoading: false,
    editApartmentLoading: false,
    deleteApartmentLoading: false,

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

    .addCase(createApartment.pending, (state) => {
      state.createApartmentLoading = true;
    })
    .addCase(createApartment.fulfilled, (state, { payload }) => {
      state.apartments = [...state.apartments, payload];
      state.createApartmentLoading = false;
    })
    .addCase(createApartment.rejected, (state, {payload}) => {
      state.createApartmentErrorMessage = payload as string;
      state.createApartmentLoading = false;
    })

    .addCase(editApartment.pending, (state) => {
      state.editApartmentLoading = true;
    })
    .addCase(editApartment.fulfilled, (state, { payload }) => {
        const editedApartment = payload;
        const apartmentIndex = state.apartments.findIndex((apartment) => apartment?._id === editedApartment._id);

        if (apartmentIndex !== -1) {
          state.apartments[apartmentIndex] = editedApartment;
        }
        state.editApartmentLoading = false;
    })
    .addCase(editApartment.rejected, (state, {payload}) => {
      state.editApartmentErrorMessage = payload as string;
      state.editApartmentLoading = false;
    })

    .addCase(deleteApartment.pending, (state) => {
      state.deleteApartmentLoading = true;
    })
    .addCase(deleteApartment.fulfilled, (state, {payload}) => {
      state.apartments = state.apartments.filter(apartment => apartment._id !== payload);
      state.deleteApartmentLoading = false;
    })
    .addCase(deleteApartment.rejected, (state, {payload}) => {
      state.deleteApartmentErrorMessage = payload as string;
      state.deleteApartmentLoading = false;
    });
  },
});


export const {  } = apartmentsSlice.actions;

export default apartmentsSlice.reducer;
