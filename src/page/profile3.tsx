import { useNavigate } from "react-router-dom";

function Profile3() {
  const navigate = useNavigate();

  return (
     <div className="min-h-screen bg-pink-300 flex items-center justify-center bg-cover bg-center">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl w-full">

        {/* HEADER */}
        <div className="flex items-center gap-4">
          <img
            src="fotoFawwaz.jpg"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-800">Fawwaz Dzaki Rahman</h1>
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
            Saya adalah mahasiswa Teknologi Informasi di Fakultas Vokasi, Universitas Brawijaya. Saya lahir di Bandung pada Januari 2007 dan kemudian pindah ke Tangerang Selatan sebelum menyelesaikan pendidikan sekolah dasar.
Pada awalnya, saya bercita-cita untuk berkarier di bidang psikologi, sehingga saya memilih jurusan IPA saat di sekolah menengah atas. Namun, seiring waktu, saya menyadari tingginya tingkat persaingan di bidang tersebut, serta kecenderungan pribadi saya yang lebih menikmati aktivitas yang bersifat mandiri, sehingga mendorong saya untuk mempertimbangkan kembali pilihan tersebut.
Saat ini, saya memiliki minat yang kuat dalam bidang seni. Sebagai mahasiswa, tujuan utama saya adalah mempelajari pemrograman agar dapat menciptakan permainan (game) saya sendiri, dengan menggabungkan minat saya dalam menulis, seni visual, dan pengkodean ke dalam sebuah karya kreatif yang utuh.

          </p>
        </div>

        {/* INFO */}
        <div className="mt-6 grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="text-gray-500">Email</p>
            <p className="text-gray-800">fawwazdzakirahman07@gmail.com</p>
          </div>

          <div>
            <p className="text-gray-500">No HP</p>
            <p className="text-gray-800">082260906037</p>
          </div>

          <div>
        <p className="text-gray-500">Instagram</p>
        <p className="text-gray-800">fawwaz_studentacc</p>
        </div>

        <div>
        <p className="text-gray-500">Hobi</p>
        <p className="text-gray-800">Membaca, menulis, menggambar, olahraga</p>
        </div>

        </div>

        <br />
      
        <div>
        <p className="text-gray-500">Alamat</p>
        <p className="text-gray-800">Jl. Terusan Cikampek, No. 18A, Penanggungan, Klojen, Kota Malang, Jawa Timur</p>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-pink-500 text-white px-4 py-2 rounded"
        >
          Kembali
        </button>

      </div>
    </div>
  );
}

export default Profile3;