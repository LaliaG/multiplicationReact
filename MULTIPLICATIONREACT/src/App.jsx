import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiplicationComponent from './components/MultiplicationComponent'

function App() {
 // const [number1, setNumber1] = useState(0);
 // const [number2, setNumber2] = useState(0);
 // const [myValue, setMyValue] = useState(props.initialValue);
  const result = 30
  return (
    <MultiplicationComponent  result = {result}/>
  )
}

export default App
