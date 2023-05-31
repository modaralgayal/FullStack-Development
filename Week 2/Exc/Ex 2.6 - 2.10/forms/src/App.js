import React from 'react'
import { useState } from 'react'
import Name from './components/Name'
import handleFiltering from './components/handleFiltering'
import handleNameChange from './components/handleNameChange'
import handleNumberChange from './components/handleNumberChange'
import addName from './components/addName'


const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [allNames, addNewName] = useState([
    {name: 'Arto Hellas', number: '040-1234567', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [showAll, setShowAll] = useState('')
  const [filtered, setFiltered] = useState([...allNames])

  return (
    <div>
      <h2>Phonebook</h2>

      <form>
      filter shown with <input
      value = {showAll}
      onChange={(event) => handleFiltering( event, setShowAll, showAll, setFiltered, filtered)}
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