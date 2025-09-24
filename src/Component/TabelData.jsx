import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";   // pastikan axios sudah diinstall

function TabelData() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/menu");
        setData(res.data);
      } catch (err) {
        console.error("Gagal ambil data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Menu</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.nama}</td>
              <td>{item.harga}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => navigate("/")}>Kembali</button>
    </div>
  );
}

export default TabelData;
