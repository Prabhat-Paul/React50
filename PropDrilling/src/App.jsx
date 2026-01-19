import React from 'react'
import { createContext } from 'react'
import Component from './Component/ComponentC'
import ComponentA from './Component/ComponentA'

export const DataContext = createContext()
export const DataContext2 = createContext()

const App = () => {
  const name = "Prabhat-Paul"
  const name2 = " Srijani-Paul"
  return (
    <div>
      <DataContext.Provider value={name}>
        <DataContext2.Provider value={name2}>
          <ComponentA />
        </DataContext2.Provider>
      </DataContext.Provider>

    </div>
  )
}

export default App