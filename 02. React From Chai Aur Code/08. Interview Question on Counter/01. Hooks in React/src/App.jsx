import { useState } from "react"
import Form from "./Snapshot"

const App = () => {

  const [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
     setCounter( (prevValue) => prevValue + 1)
     setCounter( (prevValue) => prevValue + 1)
     setCounter( (prevValue) => prevValue + 1)
     setCounter( (prevValue) => prevValue + 1)
  }

  const removeValue = () => {
     setCounter(counter - 1)
  }
  return (
   // <div className="container">
   //   <h1>chai aur react</h1>
   //  <h2>counter value : {counter}</h2>

   //  <button 
   //  onClick={addValue}
   //  >add value {counter}</button>
   //  <button 
   //  onClick={removeValue}
   //  >remove value {counter}</button>

   //  <p>Footer : {counter}</p>
   // </div>

   <Form />
  )
}

export default App