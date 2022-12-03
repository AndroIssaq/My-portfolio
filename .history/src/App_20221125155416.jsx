import { Home } from "./pages"
import {BrowserRouter as Router,Route,Link , Routes} from "react-router-dom";
function App() {


  return (
    <div className="App">
      <Routes></Routes>
      <Route>
        <Home/>
      </Route>
    </div>
  )
}

export default App
