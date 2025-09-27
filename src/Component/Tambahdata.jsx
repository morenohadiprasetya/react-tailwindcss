import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Tambahdata () {
   const [formData, setFormData] = useState({
    makanan: "",
    paket: "",
    harga: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // kirim data ke backend
      const response = await axios.post("http://localhost:5000/menu", formData);

      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
      // Reset form
      setFormData({
        makanan: "",
        paket: "",
        harga: "",
      });

      // opsional: otomatis kembali ke tabel setelah sukses
      navigate("/tabeldata");
    } catch (error) {
      console.error("Error saat menambahkan data:", error);
      alert("Gagal menambahkan data!");
    } finally {
      setLoading(false);
    }
  };
  return (
    
    <div className="flex justify-center items-start min-h-screen">
      <div className="mr-12 bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Pesan barang keinginanmu</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nama">
                    Barang
                </label>
                <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="makanan"
                type="text"
                name="makanan"
                value={formData.makanan}
                onChange={handleChange}
                placeholder=""
                required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Alamat">
                    Pesanan
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="paket"
                    type="text"
                    name="paket"
                    value={formData.paket}
                    onChange={handleChange}
                    placeholder=""
                    required
                    />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 shadow" htmlFor="Alamat">
                    Total harga
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="harga"
                    type="number"
                    name="harga"
                    value={formData.harga}
                    onChange={handleChange}
                    placeholder=""
                    required
                    />
            </div>
            <div className="flex flex-col-2 items-center space-y-3 gap-37">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Pesan
              </button>
            <Link
              to="/sidnav"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
            >
              Kembali
            </Link>
            </div>
        </form>
      </div>
    </div>
  )
}


export default Tambahdata