
import { RouterProvider } from "react-router-dom"
import appRouter from "./routes/router"

const App= () => {
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App