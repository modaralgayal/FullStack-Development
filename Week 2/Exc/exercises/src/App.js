import React from 'react'

const Total = ({parts}) => {
  let array = []
  parts.map(part => array = array.concat(part.exercises))
  console.log(array)
  const init = 0
  const sum = array.reduce(
    (acc , current) => acc + current,
    init
  )
  return (
    <div>
      <b>total of {sum} exercises</b>
    </div>
  )
}

const Course = ({course}) => {
  return (
      <div>
        <h2>{course.name}</h2>
        <ul>
          {course.parts.map(course => <li key={course.id}>{course.name} {course.exercises}</li>)}
        </ul>
      </div>
  )
  }


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