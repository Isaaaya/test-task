import React from 'react'
import { ApartmentCard, LoaderWrapper } from 'components'
import { ApartmentType } from 'types'
import useApartments from 'hooks/useApartments'

const ApartmentsList = () => {
  const {apartments, apartmentsLoading, apartmentsErrorMessage} = useApartments();

  if (apartmentsErrorMessage) return <p className='text-center'>{apartmentsErrorMessage}</p>

  if (!apartments?.length && !apartmentsLoading) return <p className='text-center'>No apartments found...</p>


  return (
    <LoaderWrapper isLoading={apartmentsLoading}>
      <ul className='space-y-5'>
        {apartments?.map((apartment: ApartmentType) => (
          <li key={apartment?._id}>
            <ApartmentCard apartment={apartment} />
          </li>
        ))}
      </ul>
    </LoaderWrapper>
  )
}

export default ApartmentsList
