import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Tabeldata() {
  const [data, setData] = useState([]);

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
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Data Menu</h2>

      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Nama</th>
            <th className="border border-gray-400 px-4 py-2">Harga</th>
            <th className="border border-gray-400 px-4 py-2">Pesanan</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-400 px-4 py-2">{item.makanan}</td>
              <td className="border border-gray-400 px-4 py-2">{item.harga}</td>
              <td className="border border-gray-400 px-4 py-2">{item.paket}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <Link
          to="/mbud"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Kembali
        </Link>
        <div className="flex justify-end mr-1200 ml-22">

        <Link
          to="/Edit/969"
          className=" inline-block mt-1 bg-blue-500 text-white px-4 py-2 rounded "
          
          >
          Edit Pesanan
        </Link>
          </div>

      </div>
    </div>
  );
}

export default Tabeldata;
