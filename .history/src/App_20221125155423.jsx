import { Home } from "./pages"
import {BrowserRouter as Router,Route,Link , Routes} from "react-router-dom";
function App() {


  return (
    <div className="App">
      <Routes>
      <Route>
        <Home/>
      </Route>
      </Routes>
    </div>
  )
}

export default App
