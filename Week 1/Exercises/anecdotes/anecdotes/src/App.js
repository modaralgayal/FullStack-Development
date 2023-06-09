import React from 'react'
import { useState } from 'react'


const handleNextClick = (min,max,setSelected) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const newSelected = Math.floor(Math.random() * (max - min) + min)
  setSelected(newSelected)

  }

const handleVoteClick = (points,setPoints, voted) => {
  const copy = [...points]
  copy[voted] += 1
  setPoints(copy)
  console.log(copy)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])

  let largest = 0
  let index = 0
  let mostPopular = 0
  points.forEach( (value) => {
    if (value > largest) {
      largest = value
      mostPopular = index
    }
    index += 1

  })
  //  console.log(mostPopular)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick = {() => handleVoteClick(points,setPoints,selected)}>vote</button>
      <button onClick= {() => handleNextClick(0,8,setSelected,points,setPoints)}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostPopular]}</p>
      <p>has {largest} votes</p>

    </div>
  )
}

export default App;
