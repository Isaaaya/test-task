import React from 'react'
import { createPortal } from 'react-dom'
import { ApartmentForm, LoaderWrapper } from 'components'
import useEditApartment from 'hooks/useEditApartment'

const EditApartmentModal = ({closeEditMode, apartmentId}: {closeEditMode: () => void, apartmentId: string}) => {
    const {apartment, apartmentLoading} = useEditApartment(apartmentId);

  return createPortal(
    <div className='fixed top-0 w-full h-full bg-black/20'>
        <div 
            onClick={(e) => e.stopPropagation()}
            className='absolute w-[90%] max-w-[700px] h-[80vh] -translate-x-1/2 -translate-y-1/2 bg-white rounded left-1/2 top-1/2 my-5'
        >
          <LoaderWrapper isLoading={apartmentLoading}>
            <ApartmentForm 
                mode='edit'
                initialApartment={apartment}
                handleExit={closeEditMode}
              />
            </LoaderWrapper>
        </div>
    </div>, 
    document.body
  )
}

export default EditApartmentModal