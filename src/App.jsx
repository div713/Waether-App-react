import { useState } from 'react'
import './App.css'
import Weather from './Weather';
import "./Infobox.css"

//material ui - react library for built in components

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather></Weather>
    </>
  )
}

export default App
