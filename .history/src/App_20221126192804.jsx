import { Home , Services} from "./pages"
import {BrowserRouter as Router,Route,Link , Routes} from "react-router-dom";
import { Navbar } from "./components";
function App() {


  return (
    <div className="App">
      <Navbar
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </div>
  )
}

export default App
