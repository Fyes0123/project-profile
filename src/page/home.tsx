import GhostExplorer from "../components/GhostExplorer.jsx";
import { useNavigate } from "react-router-dom";

function UseEffectTest() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <GhostExplorer />

      {/* BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-yellow-400 text-white px-4 py-2 rounded"
      >
        Kembali
      </button>
    </div>
  );
}
export default UseEffectTest;