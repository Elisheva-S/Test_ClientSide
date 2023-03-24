import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Tbl1 from "./Tbl1/Tbl1";
import Tbl2 from "./Tbl2/Tbl2";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-iten m-1">
            <NavLink
              className="btn btn-dark btn-outline-primary"
              to="Tbl1/Tbl1"
            >
              Tbl1
            </NavLink>
            <NavLink
              className="btn btn-dark btn-outline-primary"
              to="Tbl2/Tbl2"
            >
              Tbl2
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Tbl1/Tbl1" element={<Tbl1 />} />
        <Route path="/Tbl2/Tbl2" element={<Tbl2 />} />
      </Routes>
    </div>
  );
}

export default App;
