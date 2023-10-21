import Home from "./Component/Home"
import { Route, Routes } from "react-router-dom"
import Nav from "./Component/Nav"
function App() {
  return (
    <>
    
       <Nav/>

        <Routes>
          <Route path="/" Component={Home} />      
        </Routes>
      
    </>
  )
}

export default App
