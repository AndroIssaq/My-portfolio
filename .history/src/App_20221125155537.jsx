import { Home } from "./pages"
import {BrowserRouter as Router,Route,Link , Routes} from "react-router-dom";
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Home/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
