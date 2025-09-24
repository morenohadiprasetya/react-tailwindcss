import { BrowserRouter, Routes, Route } from "react-router-dom";

import TabelData from "./Component/TabelData";
import TambahData from "./Component/Tambahdata"
import EditData from "./Component/EditData";
function App() {
  return (
    <Routes>

      <Route path="/" element={<TambahData />} />
      <Route path="/tabeldata" element={<TabelData />} />
    </Routes>
  );
}

export default App;
