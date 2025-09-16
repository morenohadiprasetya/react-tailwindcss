import { Routes, Route } from "react-router-dom"
import Tabeltailwind from "./pages/tabeltailwind"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Register"
import Register from "./pages/logi"

const App = () => {
  return (
<Routes>
  <Route path="/R" element={<Register/>}/>
  <Route path="/" element={<LandingPage/>}/>
</Routes>

  )
}
export default App