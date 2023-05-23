import { useState } from 'react'
import React from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}  
  </button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => (
    setGood(good + 1)
  )

  const handleBadClick = () => (
    setBad(bad + 1)
  )

  const handleNeutralClick = () => (
    setNeutral(neutral + 1)
  )

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>

    </div>
  )
}


export default App;
