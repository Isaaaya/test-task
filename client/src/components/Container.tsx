import React from 'react'

const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {

  return (
    <div className={'mx-auto px-8 max-w-6xl xl:max-w-7xl ' + className}>
        {children}
    </div>
  )
}

export default Container