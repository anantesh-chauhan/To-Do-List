import React, { useState } from 'react'
import axios from 'axios'

export default function Create() {
  const [task,setTask]=useState()
  const handleAdd = ()=>{
    axios.post('http://localhost:3001/add',{ task : task})
    .then(result =>console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <form action="">
          <input type='text' placeholder='Enter text to add' onChange={(e) => setTask(e.target.value)} /> 
          <button type='button' onClick={handleAdd}>Add</button>
        </form>
    </div>
  )
}
