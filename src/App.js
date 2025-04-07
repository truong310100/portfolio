import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";

function App() {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Các Route khác */}
      </Routes>
    </Router>
  );
}

export default App;
