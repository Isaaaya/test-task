import React from 'react'
import {Button} from 'components'

const DeleteApartmentButton = ({onClick}: {onClick: () => void}) => {

  return (
    <Button onClick={onClick}>
        <img 
            src={require('../assets/icons/delete.png')}
            alt='Bin; Delete Apartment'
            className='w-6 h-6'
        />
    </Button>
  )
}

export default DeleteApartmentButton