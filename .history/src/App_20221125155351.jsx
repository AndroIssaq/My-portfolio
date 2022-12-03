import { Home } from "./pages"
import {BrowserRouter as Router,Route,Link , R} from "react-router-dom";
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
