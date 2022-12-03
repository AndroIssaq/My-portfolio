import { Home } from "./pages"
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
function App() {


  return (
    <div className="App">
        <Route>
      <Home/>
      </Route>
    </div>
  )
}

export default App
