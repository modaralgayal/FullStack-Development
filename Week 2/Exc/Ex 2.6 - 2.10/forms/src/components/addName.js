import React from "react"
import axios from 'axios'


const addName = (event, newName, newNumber, allNames, addNewName, showAll, setShowAll, setFiltered, setNewName, setNewNumber, nameService) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
  
    const nameExists = allNames.some((name) => name.name.toLowerCase() === newName.toLowerCase())
    if (nameExists) {
      console.log(`${newName} already exists`)
      return
    }
  
    const numberExists =  allNames.some((name) => name.number === newNumber)
    if (numberExists) {
      alert(`${newNumber} already exists`)
      return
    }

    axios
      .post('http://localhost:3001/persons', nameObject)
      .then(response => {
        console.log(response)
      })
  
    nameService
      .create(nameObject)
      .then(response => {
        addNewName(allNames.concat(response.data))
        setNewName('')
        setNewNumber('')
        setShowAll('')
      })
    
    const updateNames = [...allNames, nameObject]
    addNewName(updateNames);
    setFiltered(updateNames.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase())));
    
    }

export default addName