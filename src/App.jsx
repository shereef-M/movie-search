import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
};

export default App;
