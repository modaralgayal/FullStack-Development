import React from "react"


const handleNumberChange = (event, setNewNumber) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

export default handleNumberChange