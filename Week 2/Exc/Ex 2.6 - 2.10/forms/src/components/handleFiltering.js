import React from "react"

const handleFiltering = (event, setShowAll, showAll, setFiltered, filtered) => {
    event.preventDefault()
    setShowAll(event.target.value)
    setFiltered(filtered.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase())))
  }

export default handleFiltering