import React from 'react';
import {Link} from 'react-router-dom';
import Container from './Container';

const Navbar = () => {
  return (
    <nav className='h-20 bg-white border-b'>
        <Container className='flex items-center h-full gap-5 font-medium'>
            <Link to='/'>
                Apartments
            </Link>
            <Link to='/add-apartment'>
                Add Apartment
            </Link>
        </Container>
    </nav>
  )
}

export default Navbar