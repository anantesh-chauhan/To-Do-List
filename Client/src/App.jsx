import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {
  

  return (
    <div style={{"justifyContent":"center","alignItems":"center","textAlign":"center"}}>
      <h1>To-Do-List</h1>
      <div>
        <Home />
      </div>
    </div>
  )
}

export default App
