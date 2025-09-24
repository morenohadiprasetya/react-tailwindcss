import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditData() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        makanan: "",
        oaket: "",
        harga: "",
    })
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get
                    (`http://localhost:5000/menu/${id}`)
                const data = Array.isArray(res.data) ? res.data[0]
                    : res.data;
                setFormData(data);
            } catch (err) {
                console.eror("Gagal mengambil data:", err);
                alert("Gagal mengambil data!");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/menu/${id}`,
                formData);

            alert("Data berhasil diubah!");
            navigate("/tabeldata");
        } catch (err) {
            console.error("Gagal mengupdate data!", err);
            alert("Gagal mengupdate Data!");
        }
    };

    if (loading) return <p className="text-center mt-10">
        Loading data...
    </p>

    return (
        <div className="container mx-auto p-4 max-w-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Edit Data </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md"
            >
                <div className="mb-4">
                    <label
                        htmlFor="makanan"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Makanan
                    </label>
                    <input
                        id="makanan"
                        name="makanan"
                        value={formData.makanan}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="paket"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Paket
                    </label>
                    <input
                        id="paket"
                        name="paket"
                        value={formData.paket}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="harga"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Harga
                    </label>
                    <input
                        id="harga"
                        name="harga"
                        type="number"
                        value={formData.harga}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Simpan
                </button>
            </form>


        </div>


    )
}