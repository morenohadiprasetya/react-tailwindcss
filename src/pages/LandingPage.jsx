import React from 'react';
import sekolah from "../assets/sekolah.jpg"
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-[#000000] min-h-screen flex flex-col justify-between font-sans">
      {/* fr5tf */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center font-bold text-white text-3xl md:text-5xl uppercase mb-10 leading-tight tracking-wider">
          <h1 className="drop-shadow-lg">FORMULIR PENDAFTARAN</h1>
        </div>
        {/* pppppp */}
        <div className="bg-[#000000] rounded-ful p-4 md:p-5 shadow-xl w-full max-w-sm mb-10 transform -rotate-0">
          <div className="text-center text-[#FFFFFF] font-extrabold text-xl md:text-1xl">
            Pendaftaran SMK Bina Nusantara
              <div className="text-center text-[#FFFFFF] font-extrabold text-xl md:text-3xl">
          <p className="text-center text-[#FFFFFF] font-extrabold text-xl md:text-3xl">Registration Info:</p>
          <div className="text-center text-[#FFFFFF] font-extrabold text-xl md:text-3xl">
           
          </div>
          </div>
          </div>
        </div>

        <div className="text-center text-white text-base md:text-xl font-medium tracking-wide m-">
        </div> 
        <div className='2x1 '>

          <img src={sekolah} alt="" />
         <Link to="/Register">
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
           Daftar
          </button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default LandingPage;
