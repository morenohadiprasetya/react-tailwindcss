import { Routes, Route } from "react-router-dom";
 import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/Register";
import TabelData from "./Component/TabelData";
import TambahData from "./Component/Tambahdata"
import Sidnav from "./Component/sidnav";
import EditData from "./Component/EditData";

function App() {
  return (
    <Routes>
 <Route path="/landingpage" element={<LandingPage />} />
 <Route path="/Register" element={<Register />} />
      <Route path="/mbud" element={<TambahData />} />
      <Route path="/tabeldata" element={<TabelData />} />
<Route path="sidnav" element={<Sidnav />} />
<Route path="/Edit/:969" element={<EditData />} />

    </Routes>
  );
}

export default App;
