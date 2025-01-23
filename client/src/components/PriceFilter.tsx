import React from 'react'
import {Button, ClearFilterButton} from 'components';
import usePriceFilter from 'hooks/usePriceFilter';

const PriceFilter = () => {
  const {handleChange, handleClick, handleClear, userPriceRange, initialApartmentsPriceRange} = usePriceFilter();

  const inputFields = [
    {
      name: 'min',
      value: userPriceRange?.min || 0
    },
    {
      name: 'max',
      value: userPriceRange?.max || 0
    },
  ];

  const inputFieldStyling = 'border h-fit py-1 px-3 w-[100px] rounded';

  return (
    <div className='space-y-2'>
      <p className='font-medium'>Price:</p>
      <div className='flex flex-col gap-3 md:items-center md:flex-row'>
          <div className='flex gap-3'>
            {inputFields.map((inputField) => <input
                  name={inputField.name}
                  type='number'
                  placeholder={`${inputField.name} Price`}
                  value={inputField.value}
                  onChange={handleChange}
                  min={initialApartmentsPriceRange?.min || 0}
                  max={initialApartmentsPriceRange?.max || 0}
                  className={inputFieldStyling}
              />)}
            </div>
            <div className='space-x-5'>
              <Button onClick={handleClick} className='px-5 bg-blue-100 hover:bg-blue-200'>
                  Search
              </Button>
              <ClearFilterButton onClick={handleClear} />
          </div>
      </div>
    </div>
  )
}

export default PriceFilter