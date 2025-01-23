import React from 'react'
import { RoomsFilter, PriceFilter} from 'components'

const FiltersPanel = () => {

  return (
    <div className='space-y-7'>
        <RoomsFilter />
        <PriceFilter />
    </div>
  )
}

export default FiltersPanel