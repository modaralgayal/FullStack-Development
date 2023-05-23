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
  const course = 'Half Stack application development'
  const part1 = 
  {
    name: 'Fundamentals of React',
    amount: 10
  }
  const part2 = 
  {
    name: 'Using props to pass data',
    amount: 7
  }
  const part3 = 
  {
    name: 'State of a component',
    amount: 14
  }
  const courses = [part1,part2,part3]
  return (
    <div>
      <Header name={course}/>
      <Content courses={courses}/>
      <Total courses={courses}/>
    </div>
  )
}

export default App;
