import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    alamatRumah: "",
    orangtua: "",
    asalSekolah: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak sama!");
      return;
    }
    console.log("Data Registrasi:", formData);
    alert("Registrasi berhasil ✅ (simulasi)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Daftar</h1>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email"
              className="mt-1 block w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              className="mt-1 block w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Konfirmasi Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Konfirmasi Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Ulangi password"
              className="mt-1 block w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Alamat Rumah */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Alamat Rumah</label>
            <input
              type="text"
              name="alamatRumah"
              value={formData.alamatRumah}
              onChange={handleChange}
              placeholder="Masukkan alamat rumah"
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>

          {/* Nama Orang Tua */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nama Orang Tua</label>
            <input
              type="text"
              name="orangtua"
              value={formData.orangtua}
              onChange={handleChange}
              placeholder="Masukkan nama orang tua"
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>

          {/* Asal Sekolah */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Asal Sekolah</label>
            <input
              type="text"
              name="asalSekolah"
              value={formData.asalSekolah}
              onChange={handleChange}
              placeholder="Masukkan asal sekolah"
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Daftar
          </button>

          <p className="text-center text-sm mt-4">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
