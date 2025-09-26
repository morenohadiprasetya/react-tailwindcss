import { Routes, Route } from "react-router-dom";
 import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/Register";
import TabelData from "./Component/TabelData";
import TambahData from "./Component/Tambahdata"
import Sidnav from "./Component/sidnav";
function App() {
  return (
    <Routes>
 <Route path="/l" element={<LandingPage />} />
 <Route path="/Register" element={<RegisterPage />} />
      <Route path="/mbud" element={<TambahData />} />
      <Route path="/tabeldata" element={<TabelData />} />
<Route path="sidnav" element={<Sidnav />} />
    </Routes>
  );
}

export default App;
