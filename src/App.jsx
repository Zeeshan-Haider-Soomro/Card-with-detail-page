import { Route, Routes } from "react-router"
import Card from "./Pages/Card"
import CardDetail from "./Pages/CardDetail"

const App = () => {
  return (
    <div>
      {/* <h1 className="text-3xl">zeeshan</h1> */}
      <Routes>
        <Route path="/" element={<Card/>}/>
        <Route path="/cards" element={<Card/>}/>
        <Route path="/cards/:id" element={<CardDetail/>}/>
        <Route path="*" element="Error"/>
      </Routes>


    </div>
  )
}

export default App