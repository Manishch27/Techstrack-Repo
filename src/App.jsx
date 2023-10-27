import Home from "./Component/Home"
import { Route, Routes } from "react-router-dom"
import Nav from "./Component/Nav";
import Offers from "./Component/Offers";
function App() {
  return (
    <>
    <Offers/>
       <Nav/>

        <Routes>
          <Route path="/" Component={Home} />      
        </Routes>
        </>
  )
}

export default App
