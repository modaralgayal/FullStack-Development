import React from 'react'
import { useState, useEffect } from 'react'
import Name from './components/Name'
import handleFiltering from './components/handleFiltering'
import handleNameChange from './components/handleNameChange'
import handleNumberChange from './components/handleNumberChange'
import addName from './components/addName'
import nameService from './services/name' 


const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [allNames, addNewName] = useState([])
  const [showAll, setShowAll] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    console.log('effect')
    nameService
      .getAll()
      .then(initialNames => {
        addNewName(initialNames)
        setFiltered([...initialNames])
      })

  }, [])
  console.log('render',allNames.length,'persons')

  console.log(filtered)


  return (
    <div>
      <h2>Phonebook</h2>

      <form>
      filter shown with <input
      value = {showAll}
      onChange={(event) => handleFiltering(event, setShowAll, showAll, setFiltered, filtered)}
      />
        
      </form>

      <h2>add a new</h2>

      <form onSubmit={(event) => addName(event, newName, newNumber, allNames, addNewName, showAll, setShowAll, setFiltered, setNewName, setNewNumber)}>
        <div>
          name: <input 
          value = {newName}
          onChange={(event) => handleNameChange(event, setNewName)}    
            />
        </div>
        <div>
          number: <input
          value = {newNumber}
          onChange={(event) => handleNumberChange(event, setNewNumber)}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {filtered.map(person =>
            <Name 
            nuemes={person.name} 
            numero={person.number} 
            id = {person.id}
            />
          )}
        </ul>
      
    </div>
    
  )
}

export default App