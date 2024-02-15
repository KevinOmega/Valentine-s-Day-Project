import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Road from "./Pages/Road";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/secret" element={<Road/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
