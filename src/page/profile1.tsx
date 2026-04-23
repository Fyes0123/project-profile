import { useNavigate } from "react-router-dom";

function Profile1() {
  const navigate = useNavigate();

  return (
     <div className="min-h-screen bg-pink-300 flex items-center justify-center bg-cover bg-center">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl w-full">

        {/* HEADER */}
        <div className="flex items-center gap-4">
          <img
            src="/photos/fotoNaura.jpeg"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-800">Naura</h1>
            <p className="text-gray-500">Mahasiswa</p>
            <p className="text-sm text-gray-400">Teknologi Informasi</p>
          </div>
        </div>

        <hr className="my-6" />

        {/* DESKRIPSI */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Tentang Saya
          </h2>
          <p className="text-gray-600 text-sm">
            Saya adalah seorang mahasiswa program studi teknologi informasi yang sedang mengenyam pendidikan di semester dua. 
        Saya berasal dari Kota Bondowoso Jawa Timur. Saya lahir pada tanggal tujuh bulan September Tahun 2006. 
        Sebelum menjadi anak IT, saya ingin berkuliah di bidang kesehatan tepatnya kedokteran. Karena latar belakang pendidikan saya yang lebih condong terhadap saintek kesehatan maka tidak heran jika saya masih pemula dalam belajar coding. 
        Namun, meskipun saya masih baru beradaptasi di dunia IT tidak membuat saya merasa tertinggal dan putus asa, saya akan terus belajar dan mendalami ilmu di jurusan saya saat ini. 
        Di jurusan teknologi informasi yang cakupan nya luas sekali, saya tertarik dan memiliki minat yang besar untuk mempelajari terkait tentang data-data, sehingga setelah lulus dari sini saya ingin menjadi seorang data scientist atau seorang data analyst
          </p>
        </div>
  
        <div className="mt-6"></div>

        {/* INFO */}
        <div className="mt-6 grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="text-gray-500">Email</p>
            <p className="text-gray-800">alamudinaura@email.com</p>
          </div>

          <div>
            <p className="text-gray-500">No HP</p>
            <p className="text-gray-800">087757779420</p>
          </div>

          <div>
        <p className="text-gray-500">Instagram</p>
        <p className="text-gray-800">_onawgiri</p>
        </div>

        <div>
        <p className="text-gray-500">Hobi</p>
        <p className="text-gray-800">Membaca buku, menonton film, merajut,olahraga</p>
        </div>

        </div>

        <br />
      
        <div>
        <p className="text-gray-500">Alamat</p>
        <p className="text-gray-800">Jl. Imam Bonjol, Kelurahan Kademangan, Kecamatan Bondowoso, Jawa Timur</p>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="animate-pulse mt-6 bg-pink-500 text-white px-4 py-2 rounded"
        >
          Kembali
        </button>

      </div>
    </div>
  );
}

export default Profile1;