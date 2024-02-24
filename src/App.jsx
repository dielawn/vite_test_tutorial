import { useState } from 'react'
import RenderName from './RenderName'
import PercentageStat from './Email'
import './App.css'

const App = () => {
  const [heading, setHeading] = useState("Magnificent Monkeys")

  const clickHandler = () => {
    setHeading('Radical Rhinos')
  }

  return (
    <>
      <button type='button' onClick={clickHandler}>Click Me</button>
      <h1>{heading}</h1>    
      <RenderName />
      <PercentageStat label='Test label' score={420} total={69}/>
    </>
  )
};

export default App;