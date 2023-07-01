import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Name from './components/Name'
import handleFiltering from './components/handleFiltering'
import handleNameChange from './components/handleNameChange'
import handleNumberChange from './components/handleNumberChange'
import addName from './components/addName'
import nameService from './services/name'
import Notify from './components/notification'
import NotAvailable from './components/noneError'


const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [allNames, addNewName] = useState([])
  const [showAll, setShowAll] = useState('')
  const [filtered, setFiltered] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [infoErrorMessage, setInfoErrorMessage] = useState(null)


  useEffect(() => {
    console.log('effect')
    nameService
      .getAll()
      .then(initialNames => {
        addNewName(initialNames)
        setFiltered([...initialNames])
      })
      .catch(error => {
        console.log('fail')
      })

    }, [])

      


  const handleDelete = ({id, name}) => {
    console.log(`Delete ${name}?`)

    if (window.confirm(`Delete ${name}?`)) {
        axios.delete(`http://localhost:3001/persons/${id}`)
        const updatedNames = allNames.filter(person => person.id !== id);
        addNewName(updatedNames)
        setFiltered(updatedNames)
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notify message={errorMessage}/>
      <NotAvailable message={infoErrorMessage}/>
      <form>
        filter shown with{" "}
        <input
          value={showAll}
          onChange={(event) =>
            handleFiltering(
              event,
              setShowAll,
              showAll,
              setFiltered,
              filtered
            )
          }
        />
      </form>
  
      <h2>add a new</h2>
  
      <form
        onSubmit={(event) =>
          addName(event,newName,newNumber,allNames,addNewName,showAll,setShowAll,setFiltered,setNewName,
            setNewNumber,
            setErrorMessage,
            setInfoErrorMessage
          )
        }
      >
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => handleNameChange(event, setNewName)}
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(event) => handleNumberChange(event, setNewNumber)}
          />
        </div>
  
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filtered.map((person) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Name nuemes={person.name} numero={person.number} id={person.id} />
            <button
              type="submit"
              style={{ marginLeft: "1rem" }}
              onClick={() => handleDelete({ id: person.id, name: person.name })}
            >
              delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  )}

export default App