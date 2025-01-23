import React from 'react'

const Button = ({children, className, onClick, isLoading}: {children: React.ReactNode, className?: string, onClick?: () => void, isLoading?: boolean}) => {
  return (
   
      <button 
          onClick={onClick}
          className={'border rounded p-1 ' + className}
          type='button'
          disabled={isLoading}
      >
          {isLoading ? '...' : children}
      </button>
  
  )
}

export default Button