import React from 'react'
import { ApartmentsList, SectionHeading } from 'components';

const Apartments = () => {
  return (
    <section className='space-y-3'>
        <SectionHeading tag='h1'>
            Apartments
        </SectionHeading>
        <ApartmentsList />
    </section>
  )
}

export default Apartments