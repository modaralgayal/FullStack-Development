import React from "react"


const handleNameChange = (event, setNewName) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  
export default handleNameChange