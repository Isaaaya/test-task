import React from 'react'

const SectionHeading = ({tag, children}: {tag: 'h1' | 'h2' | 'h3', children: React.ReactNode}) => {
    const Tag = tag;

  return (
    <Tag className='text-lg font-medium'>
        {children}
    </Tag>
  )
}

export default SectionHeading