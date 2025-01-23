import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApartmentType } from 'types';

const APARTMENTS_BASE_URL = 'test-task-server-6mxa5vkug-snizhannas-projects.vercel.app'

export const getApartments = createAsyncThunk(
    'apartments/getApartments',
    async (filters: {rooms: 1 | 2 | 3 | null, price: {min: number | null, max: number | null}}, { rejectWithValue }) => {
      try {
        const {data} =  await axios(APARTMENTS_BASE_URL, {params: filters});
        return data
      } catch (error)  {
        return rejectWithValue('Error fetching apartments. Please, change filters or reload.');
      }
    }
  );
  
  export const getApartmentById = createAsyncThunk(
    'apartments/getApartmentById',
    async (apartmentId: string, { rejectWithValue }) => {
      try {
        const { data } = await axios.get(`${APARTMENTS_BASE_URL}/${apartmentId}`);
        return data;
      } catch (error) {
        return rejectWithValue('Error fetching the apartment. The apartment you are looking for may not exist.');
      }
    }
  );
  
  export const createApartment = createAsyncThunk(
    'apartments/createApartment',
    async (apartment: ApartmentType, { rejectWithValue }) => {
      try {
        const { data } = await axios.post(APARTMENTS_BASE_URL, apartment);
        return data;
      } catch (error) {
        return rejectWithValue('Error creating apartment');
      }
    }
  );
  
  export const editApartment = createAsyncThunk(
    'apartments/editApartment',
    async (editedApartment: ApartmentType, { rejectWithValue }) => {
      try {
        await axios.put(`${APARTMENTS_BASE_URL}/${editedApartment._id}`, editedApartment);
        return editedApartment;
      } catch (error) {
        return rejectWithValue('Error editing apartment');
      }
    }
  );
  
  
  export const deleteApartment = createAsyncThunk(
    'apartments/deleteApartment',
    async (apartmentId: string, { rejectWithValue }) => {
      try {
        await axios.delete(`${APARTMENTS_BASE_URL}/${apartmentId}`);
        return apartmentId;
      } catch (error) {
        return rejectWithValue(error || 'Error deleting apartment');
      }
    }
  );