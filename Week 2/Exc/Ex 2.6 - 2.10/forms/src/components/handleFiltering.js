import React from 'react';

const handleFiltering = (event, setShowAll, showAll, setFiltered, allNames) => {
  event.preventDefault();
  const inputValue = event.target.value;
  setShowAll(inputValue);
  setFiltered(
    allNames.filter((person) =>
      person.name.toLowerCase().includes(inputValue.toLowerCase())
    )
  );
};

export default handleFiltering;
