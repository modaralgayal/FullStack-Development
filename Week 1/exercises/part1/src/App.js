const Header = (course) => {
  console.log(course)
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
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


const Total = (a) => {
  console.log(a)
  return (
    <div>
      <p>Total amount of exercises is {a.one+a.two+a.three}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const courses = [
    {name: part1, amount: exercises1},
    {name: part2, amount: exercises2},
    {name: part3, amount: exercises3},

  ]

  return (
    <div>
      <Header name={course}/>
      <Content courses={courses}/>
      <Total one={exercises1} two={exercises2} three={exercises3}/>

    </div>
  )
}

export default App;
