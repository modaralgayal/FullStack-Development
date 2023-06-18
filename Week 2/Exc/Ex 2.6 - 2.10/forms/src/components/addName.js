import React from "react"
import axios from 'axios'


const addName = (event,newName,newNumber,allNames,addNewName,showAll,setShowAll,setFiltered,setNewName,setNewNumber,nameService
) => {
  event.preventDefault();
  const nameObject = {
    name: newName,
    number: newNumber,
  };

  const nameExists = allNames.some(
    (name) => name.name.toLowerCase() === newName.toLowerCase()
  );
  if (nameExists) {
    const existingName = allNames.find(
      (name) => name.name.toLowerCase() === newName.toLowerCase()
    );
    if (
      window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      // Update the number for the existing name
      const updatedName = { ...existingName, number: newNumber };
      axios
        .put(`http://localhost:3001/persons/${existingName.id}`, updatedName)
        .then((response) => {
          const updatedNames = allNames.map((name) =>
            name.id === existingName.id ? { ...name, number: newNumber } : name
          );
          addNewName(updatedNames);
          setFiltered(
            updatedNames.filter((person) =>
              person.name.toLowerCase().includes(showAll.toLowerCase())
            )
          );
          setNewName("");
          setNewNumber("");
          setShowAll("");
        })
        .catch((error) => {
          console.log("Error updating the number:", error);
        });
    } else {
      return;
    }
  } else {
    axios
      .post("http://localhost:3001/persons", nameObject)
      .then((response) => {
        const updatedNames = allNames.concat(response.data);
        addNewName(updatedNames);
        setFiltered(
          updatedNames.filter((person) =>
            person.name.toLowerCase().includes(showAll.toLowerCase())
          )
        );
        setNewName("");
        setNewNumber("");
        setShowAll("");
      })
      .catch((error) => {
        console.log("Error adding a new name:", error);
      });
  }
};

export default addName;
