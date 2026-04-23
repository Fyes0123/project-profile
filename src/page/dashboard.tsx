import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl w-full h-screen bg-gradient-to-br from-blue-500 to-blue-100 flex items-center justify-center">
      
      <div className="p-8 rounded-2xl text-center bg-white/10 backdrop-blur-lg border border-blue-500 shadow-[0_0_25px_rgba(168,85,247,0.7)] hover:scale-105 transition duration-300">

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          HELLO WE ARE FROM GROUP 1 ^.^
        </h1>

        <h4 className="text-xl text-white mb-4">
          Welcome to our group's profile website!
        </h4>

        <p className="text-white mb-6">
          Click the button below to view the member's profile
        </p>

        <div className="flex flex-wrap justify-center gap-4 font-bold">

          <button
            onClick={() => navigate("/naura")}
            className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:scale-110 hover:bg-purple-600 hover:text-white transition duration-300"
          >
            NAURA
          </button>

          <button
            onClick={() => navigate("/fawwaz-dzaki-rahman")}
            className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:scale-110 hover:bg-purple-600 hover:text-white transition duration-300"
          >
            FAWWAS
          </button>

          <button
            onClick={() => navigate("/fadil-mohammad")}
            className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:scale-110 hover:bg-purple-600 hover:text-white transition duration-300"
          >
            FADIL
          </button>

          <button
            onClick={() => navigate("/tracker-test")}
            className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:scale-110 hover:bg-purple-600 hover:text-white transition duration-300"
          >
            TRACKER
          </button>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;