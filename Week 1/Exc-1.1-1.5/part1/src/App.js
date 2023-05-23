const Header = (course) => {
  console.log(course)
  return <h1>{course.name}</h1>
}

const Content = ({ courses }) => {
  return (
    <div>
      <p>{courses[0].name} {courses[0].amount}</p>
      <p>{courses[1].name} {courses[1].amount}</p>
      <p>{courses[2].name} {courses[2].amount}</p>

    </div>
  )
}


const Total = ({courses}) => {
  console.log(courses)
  return (
    <div>
      <p>Total amount of exercises is {courses[0].amount+courses[1].amount+courses[2].amount}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [ 
      {
        name: 'Fundamentals of React',
        amount: 10
      },
      {
        name: 'Using props to pass data',
        amount: 7
      },
      {
        name: 'State of a component',
        amount: 14
      }
    ]
  };

    return (
      <div>
        <Header name={course.name}/>
        <Content courses={course.parts}/>
        <Total courses={course.parts}/>
      </div>
    )
  
}
    

export default App;