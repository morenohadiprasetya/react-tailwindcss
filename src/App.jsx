import { Routes, Route } from "react-router-dom";

import TabelData from "./Component/TabelData";
import TambahData from "./Component/Tambahdata"
import Sidnav from "./Component/sidnav";
function App() {
  return (
    <Routes>
    
      <Route path="/mbud" element={<TambahData />} />
      <Route path="/tabeldata" element={<TabelData />} />
<Route path="sidnav" element={<Sidnav />} />
    </Routes>
  );
}

export default App;
