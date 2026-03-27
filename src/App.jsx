
import { Routes, Route } from "react-router-dom";
import Dashboard from "./page/dashboard";
import Profile1 from "./page/profile1";
import Profile2 from "./page/profile2";
import Profile3 from "./page/profile3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile1" element={<Profile1 />} />
      <Route path="/profile2" element={<Profile2 />} />
      <Route path="/profile3" element={<Profile3 />} />
    </Routes>
  );
}

export default App
