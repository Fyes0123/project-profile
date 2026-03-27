import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center text-center p-6">

      <h1 className="text-3xl font-bold text-white mb-4">
        HAI KAMI DARI KELOMPOK 1
      </h1>

      <h4 className="text-3xl font-bold text-white mb-4">
        Selamat datang pada wesite profil kelompok kami.
      </h4> 

      <p className="text-white font-bold mb-6 max-w-md"> klik button dibawah untuk menuju halam profil masing-masing anggota</p>

      {/* BUTTON */}
      <div className="flex gap-4 font-bold">
        <button
          onClick={() => navigate("/profile1")}
          className="bg-white text-blue-500 px-4 py-2 rounded"
        >
          NAURA
        </button>

        <button
          onClick={() => navigate("/profile2")}
          className="bg-white text-blue-500 px-4 py-2 rounded"
        >
          FAWWAS
        </button>

        <button
          onClick={() => navigate("/profile3")}
          className="bg-white text-blue-500 px-4 py-2 rounded"
        >
          FADIL
        </button>
      </div>

    </div>
  );
}

export default Dashboard;