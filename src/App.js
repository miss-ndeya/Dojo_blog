import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Create from "./create";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
