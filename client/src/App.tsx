import React from 'react'
import { Apartments, FiltersPanel } from 'components'

const App = () => {
  
  return (
    <main className='space-y-5'>
      <FiltersPanel />
      <Apartments />
    </main>
  )
}

export default App