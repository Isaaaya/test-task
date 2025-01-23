import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'context/store'
import { useNavigate } from 'react-router-dom';

const usePriceFilter = () => {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);

    const {initialApartmentsPriceRange} = useSelector((state: RootState) => state.apartments);
    const [userPriceRange, setUserPriceRange] = useState<{min: number | null, max: number | null}>()

    useEffect(() => {
      setUserPriceRange(initialApartmentsPriceRange)
    }, [initialApartmentsPriceRange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setUserPriceRange((prev) => ({
          min: prev?.min ?? null,
          max: prev?.max ?? null,
          [e.target.name]: Number(e.target.value)
      }));
  };

    const handleClick = () => {
      params.set('min', String(userPriceRange?.min));
      params.set('max', String(userPriceRange?.max));
  
      navigate(`?${params.toString()}`);
    };

    const handleClear = () => {
      params.delete('min');
      params.delete('max');
      
      const newQueryString = params.toString();
      navigate(newQueryString ? `?${newQueryString}` : '', { replace: true });
    }

    return {userPriceRange, handleChange, handleClear, handleClick, initialApartmentsPriceRange}
}

export default usePriceFilter