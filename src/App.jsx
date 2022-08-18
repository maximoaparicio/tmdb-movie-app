import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<h1>Detail page</h1>}></Route>
          <Route path="movies/:type" element={<h1>List page</h1>}></Route>
          <Route path="/*" element={<h1>Error, not page found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
