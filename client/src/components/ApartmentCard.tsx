import React, { useState } from 'react'
import { ApartmentType } from 'types'
import {ActionsPanel, EditApartmentModal} from 'components'

const ApartmentCard = ({apartment}: {apartment: ApartmentType}) => {
  const [isEditModeOn, setIsEditModeOn] = useState(false);

  const toggleEditMode = () => setIsEditModeOn((prev) => !prev);
  const closeEditMode = () => setIsEditModeOn(false);

  return (
    <>
      <article className='relative p-5 pt-12 space-y-2 bg-white border rounded'>
          <div className='absolute top-5 right-5'>
              <ActionsPanel apartmentId={apartment?._id!} toggleEditMode={toggleEditMode} />
          </div>
          <p className='text-lg font-medium'>{apartment?.title}</p>
          <p>Rooms: {apartment?.rooms}</p>
          <p>{apartment?.description}</p>
          <p>{apartment?.price} UAH</p>
      </article>
      {isEditModeOn && <EditApartmentModal apartmentId={apartment?._id!} closeEditMode={closeEditMode} />}
    </>
  )
}

export default ApartmentCard