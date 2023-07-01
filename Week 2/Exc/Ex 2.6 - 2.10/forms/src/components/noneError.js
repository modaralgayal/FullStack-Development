import React from "react"

const NotAvailable = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='noInfo'>
        {message}
      </div>
    )
  }

export default NotAvailable