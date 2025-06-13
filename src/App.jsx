/* eslint-disable react/prop-types */
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
    {JSON.stringify(todo)}
    </>
  )
}

export default App