
import { Routes, Route } from "react-router-dom";
import Dashboard from "./page/dashboard";
import Profile1 from "./page/profile1";
import Profile2 from "./page/profile2";
import Profile3 from "./page/profile3";
import UseEffectTest from "./page/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/naura" element={<Profile1 />} />
      <Route path="/fawwaz-dzaki-rahman" element={<Profile2 />} />
      <Route path="/fadil-mohammad" element={<Profile3 />} />
      <Route path="/tracker-test" element={<UseEffectTest />}/>
    </Routes>
  );
}

export default App
