import { Routes, Route } from "react-router-dom"
import Tabeltailwind from "./pages/tabeltailwind"


import TabelData from "./Component/TabelData"


import Tambahdata from "./Component/Tambahdata"
const App = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Tambahdata/>}/>
    </Routes>

  )
}
export default App