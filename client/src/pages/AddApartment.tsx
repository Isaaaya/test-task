import React from 'react'
import { ApartmentForm } from 'components'
import { useNavigate } from 'react-router-dom'

const AddApartment = () => {
  const navigate = useNavigate();

  return (
    <section className='flex justify-center'>
      <div className='max-w-[700px]'>
        <ApartmentForm 
          mode='add'
          handleExit={() => navigate('/')}
         />
      </div>
    </section>
  )
}

export default AddApartment