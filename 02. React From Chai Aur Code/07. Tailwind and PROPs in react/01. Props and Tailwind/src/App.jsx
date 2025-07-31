
import Card from "./Card"
const App = () => {
  let myObj = {
    username : "Sipun",
    age : 21
  }

  let newArr = [1,2,3]

  return (
  <div className="h-screen w-screen bg-black flex justify-center items-center gap-5">
    <Card username="chai aur code" someObj={myObj} newArr={newArr} />
    <Card username="Ankita" someObj={myObj} newArr={newArr} />
  </div>
  )
}

export default App