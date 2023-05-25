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
  
export default Course  