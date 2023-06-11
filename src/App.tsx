import Landing from "@/pages/Landing";
import ProjectDigiBookShelf from "@/pages/projectDigiBookShelf";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/projects">
        <Route path="Digibookshelf" element={<ProjectDigiBookShelf />} />
        {/* Other project will be added once there're finialized */}
      </Route>
    </Routes>
  );
}

export default App;
