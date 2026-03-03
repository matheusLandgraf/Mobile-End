import { useState } from 'react'
import './App.css'
import FunctionalComponent from './Component/FuncitionalComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Salve Negada</h1>

    <FunctionalComponent />


    </>
  )
}

export default App
