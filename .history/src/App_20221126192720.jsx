import { Home , Services} from "./pages"
import {BrowserRouter as Router,Route,Link , Routes} from "react-router-dom";
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
      </Routes>
    </div>
  )
}

export default App
