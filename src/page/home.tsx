import GhostExplorer from "../components/GhostExplorer";
import { useNavigate } from "react-router-dom";

export default function UseEffectTest() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center bg-cover bg-center p-4">
      
      {/* Card Container */}
      <div className="bg-slate-900 p-8 rounded-2xl shadow-xl max-w-3xl w-full text-slate-100">
        
        <GhostExplorer />

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded transition"
          >
            Kembali
          </button>
        </div>

      </div>
    </div>
  );
}