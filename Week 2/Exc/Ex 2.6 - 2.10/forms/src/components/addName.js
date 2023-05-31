import React from "react"


const addName = (event, newName, newNumber, allNames, addNewName, showAll, setShowAll, setFiltered, setNewName, setNewNumber) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: allNames.length + 1
    }
  
    const nameExists = allNames.some((name) => name.name.toLowerCase() === newName.toLowerCase())
    if (nameExists) {
      alert(`${newName} already exists`)
      return
    }
  
    const numberExists =  allNames.some((name) => name.number === newNumber)
    if (numberExists) {
      alert(`${newNumber} already exists`)
      return
    }
  
    const updateNames = [...allNames, nameObject]
    addNewName(updateNames);
    setFiltered(updateNames.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase())));
    setNewName('')
    setNewNumber('')
    setShowAll('')
    }

export default addName