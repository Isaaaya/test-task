import React from 'react'

const LoaderWrapper = ({children, isLoading}: {children: React.ReactNode, isLoading: boolean}) => {

  return !isLoading ? (<>
        {children}
    </>
  ) : <p className='text-center'>Loading...</p>
}

export default LoaderWrapper