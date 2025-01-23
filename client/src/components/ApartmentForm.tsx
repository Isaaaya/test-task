import React from 'react'
import useApartmentForm from 'hooks/useApartmentForm';
import { ApartmentType } from 'types';
import Button from './Button';

const ApartmentForm = ({ initialApartment, mode, handleExit}: { initialApartment?: ApartmentType | null, mode: 'add' | 'edit', handleExit: () => void}) => {
   const {apartment, handleChange, handleSubmit} = useApartmentForm({initialApartment: initialApartment || null, mode});

    const inputFieldStyling = "p-2 border rounded shadow-sm";

    const onClick = () => {
        handleSubmit();
        handleExit();
    }

  return (
    <form className='flex flex-col justify-between w-full h-full gap-5 text-center border rounded shadow p-7'>
        <div className='flex flex-col gap-5'>
            <p className='font-medium capitalize'>
                {mode} apartment
            </p>
            <input 
                value={apartment.title}
                onChange={handleChange}
                name='title'
                placeholder='Title' 
                className={inputFieldStyling}
                maxLength={90}
            />
            <textarea 
                value={apartment.description}
                onChange={handleChange}
                name='description'
                placeholder='Description'
                className={'min-h-[120px] resize-none ' + inputFieldStyling}
                maxLength={355}
            />
            <div className='grid grid-cols-2 gap-5'>
                <input 
                    value={apartment.price}
                    onChange={handleChange}
                    name='price'
                    type='number' 
                    placeholder='Price' 
                    min={0}
                    className={inputFieldStyling}
                />
                <select 
                    onChange={handleChange} 
                    name='rooms' 
                    className={inputFieldStyling}
                    value={apartment.rooms}
                >
                    {[1, 2, 3].map((roomsNum) => <option 
                        key={roomsNum} value={roomsNum}
                    >
                        {roomsNum}
                    </option>)}
                </select>
            </div>
        </div>
        <div className='flex justify-center gap-5'>
            <Button
                onClick={onClick}
                className='self-center w-40 h-10 capitalize'
            >
                {mode}
                
            </Button> 
            <Button
                onClick={handleExit}
                className='self-center w-40 h-10 capitalize'
            >
                Cancel
            </Button> 
        </div>
    </form>
  )
}

export default ApartmentForm