import React from 'react'
import {DeleteApartmentButton, EditApartmentButton} from 'components'
import useDeleteApartment from 'hooks/useDeleteApartment'

const ActionsPanel = ({apartmentId, toggleEditMode}: {apartmentId: string, toggleEditMode: () => void}) => {
  
const {deleteApartment} = useDeleteApartment(apartmentId);


  return (
    <div className='flex gap-3'>
        <EditApartmentButton toggleEditMode={toggleEditMode} />
        <DeleteApartmentButton onClick={deleteApartment} />
    </div>
  )
}

export default ActionsPanel