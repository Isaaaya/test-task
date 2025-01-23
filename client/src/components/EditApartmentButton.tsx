import React from 'react'
import {Button} from 'components'

const EditApartmentButton = ({toggleEditMode}: {toggleEditMode: () => void}) => {
  return (
    <Button onClick={toggleEditMode}>
        <img 
            src={require('../assets/icons/edit.png')}
            alt='Pen; Edit Apartment'
            className='w-6 h-6'
        />
    </Button>
  )
}

export default EditApartmentButton