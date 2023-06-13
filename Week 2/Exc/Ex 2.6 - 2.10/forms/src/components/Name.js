import React from 'react'

const Name = ({ nuemes, numero, id }) => {
    return (
      <div>
        <p key={id}>
          {nuemes} {numero}
        </p>
      </div>
    )}
  
  export default Name