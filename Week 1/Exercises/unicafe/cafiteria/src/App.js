import { useState } from 'react'
import React from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}  
  </button>
)


const StatisticLine = ({ text,value,extra }) => {
  return (
      <tr>         
        <td>{text}</td>
        <td>{value}</td>
        <td>{extra}</td>
      </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPostive] = useState(0)

  const handleGoodClick = () => {
    const newGood = good + 1
    setGood(newGood)
    const newAll = all + 1
    setAll(newAll)
    const goodPercentage = (good / newAll)*100
    setPostive(goodPercentage)
    
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    setBad(newBad)
    const newAll = all + 1
    setAll(newAll)
    const goodPercentage = (good / newAll)*100
    setPostive(goodPercentage)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    const newAll = all + 1
    setAll(newAll)
    const goodPercentage = (good / newAll)*100
    setPostive(goodPercentage)
  }

  if (all === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>  
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
    
      <StatisticLine text='good ' value = {good}/>
      <StatisticLine text='neutral ' value = {neutral}/>
      <StatisticLine text='bad ' value = {bad}/>
      <StatisticLine text='all ' value = {all}/>
      <StatisticLine text='average ' value = {(good-bad)/all}/>
      <StatisticLine text='positive ' value = {positive} extra = '%'/>
    </div>
  )
}


export default App;
