import React from 'react'
import Button from './Button'

const ClearFilterButton = ({onClick}: {onClick: () => void}) => {
  return (
    <Button onClick={onClick} className='px-5 bg-red-100 hover:bg-red-200'>
        Clear
    </Button>
  )
}

export default ClearFilterButton