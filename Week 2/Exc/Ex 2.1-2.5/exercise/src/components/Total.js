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

export default Total