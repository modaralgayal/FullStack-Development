import React from 'react'
import Course from './components/Course'
import Total from './components/Total'

  const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course course={courses[0]}/>
      <Total parts={courses[0].parts}/>
      <Course course={courses[1]}/>
      <Total parts={courses[1].parts}/>
    </div>
  )
  
}

export default App