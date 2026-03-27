import { useNavigate } from "react-router-dom";

function Profile3() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl text-center">

        <h1 className="text-xl font-bold">Fadil</h1>
        <p>Mahasiswa TI</p>

        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-pink-400 text-white px-4 py-2 rounded"
        >
          Kembali
        </button>

      </div>
    </div>
  );
}

export default Profile3;