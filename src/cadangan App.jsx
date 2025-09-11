import React from 'react'

const App = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://i.pinimg.com/1200x/c5/00/c4/c500c48baef687af679ce94f4c64366d.jpg"alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">STORY OF THE NAMIKAZE MINATO</div>
          <p className="text-gray-700 text-base">
            Minato Namikaze, Hokage Keempat Konoha dan ayah Naruto, adalah ninja jenius yang dikenal sebagai "Si Kilat Kuning Konoha". Dia adalah murid Jiraiya dan guru Kakashi, Obito, serta Rin. Setelah menyelamatkan Kushina Uzumaki, ia jatuh cinta padanya dan mereka akhirnya menikah.
             Minato meninggal saat menyegel Kurama (Rubah Ekor Sembilan) ke dalam putranya, Naruto, untuk menyelamatkan desa. 
          </p> -
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HOKAGE4</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MINATONAMIKAZE</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RASENGAN</span>
        </div>
      </div>   

    </div>
  )
}
export default App