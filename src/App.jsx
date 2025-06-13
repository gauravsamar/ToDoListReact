import { useState } from 'react'
import './App.css'

function App() {

  const [todo, setTodo] = useState([
    {
      title : "Go To Gym",
      description : "At 7 PM",
      isCompleted : false
    },
    {
      title : "Study DSA",
      description : "HashMaps",
      isCompleted : true
    }]);

  return (
    <>
    {todo.map(function(item){
      return (
      <ToDo title={item.title} description={item.description} isCompleted={item.isCompleted} />
      );
    })}
    </>
  )
  function ToDo(props)
  {
    return <>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <input type="checkbox" id="completed" name="completed" checked={props.isCompleted} />
    {/* <label htmlFor="completed">Marked as Completed</label> */}
    </>
  }
}

export default App