import React, {useState, useEffect} from 'react'
import { ApartmentType } from 'types';
import { AppDispatch } from 'context/store'
import { useDispatch } from 'react-redux';
import { createApartment, editApartment } from 'context/api';

const useApartmentForm = ({mode, initialApartment}: {mode: 'add' | 'edit', initialApartment: ApartmentType | null}) => {
    const dispatch = useDispatch<AppDispatch>();


    const [apartment, setApartment] = useState<ApartmentType>({
        title: '',
        description: '',
        price: 0,
        rooms: 1
    });

    useEffect(() => {
        if (initialApartment?.title) {
            setApartment(initialApartment)
        }
    }, [initialApartment])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setApartment((prev) => ({...prev, 
            [e.target.name]: Number(e.target.value) ? Number(e.target.value) : e.target.value,
        }))
    };

    const handleSubmit = () => {
        if (mode === 'add') dispatch(createApartment(apartment));
        else dispatch(editApartment(apartment));
    };

    return {apartment, handleChange, handleSubmit}
}

export default useApartmentForm