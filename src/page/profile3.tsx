import { useNavigate } from "react-router-dom";

function Profile3() {
  const navigate = useNavigate();

  return (
     <div className="min-h-screen bg-yellow-300 flex items-center justify-center bg-cover bg-center">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl w-full">

        {/* HEADER */}
        <div className="flex items-center gap-4">
          <img
            src="fotoFadil.jpg"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-800">Fadil Mohammad</h1>
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
            Saya adalah mahasiswa Teknologi Informasi di Fakultas Vokasi, Universitas Brawijaya. Saya lahir di Kepanjen pada Januari 2006. 
            Pada awalnya saya tidak memiliki rencana untuk masuk kedunia TI, tapi itu berubah saat saya lolos pendaftaran di salah satu SMK TI di kota Malang. Saya rasa bahwa belajar TI cukup cocok di saya terutama sebagai UI/UX Designer.
            Saya tertarik pada dunia UI/UX Designer sejak SMK dan hal tersebut didasari oleh minat saya dibidang design graphic, Mungkin kedepannya saya akan mencoba untuk menjadi frontend karena saya rasa itu cocok dengan saya.

          </p>
        </div>

        {/* INFO */}
        <div className="mt-6 grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="text-gray-500">Email</p>
            <p className="text-gray-800">fadilmohammad160@gmail.com</p>
          </div>

          <div>
            <p className="text-gray-500">No HP</p>
            <p className="text-gray-800">087823052990</p>
          </div>

          <div>
        <p className="text-gray-500">Instagram</p>
        <p className="text-gray-800">fadilm.ygy</p>
        </div>

        <div>
        <p className="text-gray-500">Hobi</p>
        <p className="text-gray-800">Self-Talk, Game, Design</p>
        </div>

        </div>

        <br />
      
        <div>
        <p className="text-gray-500">Alamat</p>
        <p className="text-gray-800">Jl. Bendungan Sengguruh No.21B, Kota Malang, Jawa Timur</p>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="animate-pulse mt-6 bg-yellow-400 text-white px-4 py-2 rounded"
        >
          Kembali
        </button>

      </div>
    </div>
  );
}

export default Profile3;