import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Items from "./pages/Items";
import Delayed from "./pages/Delayed";
import IframePage from "./pages/IframePage";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Automation Test App</h1>
        <nav>
          <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
          <Link to="/items" style={{ marginRight: 10 }}>Items</Link>
          <Link to="/delayed" style={{ marginRight: 10 }}>Delayed</Link>
          <Link to="/iframe">Iframe</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/items" element={<Items />} />
          <Route path="/delayed" element={<Delayed />} />
          <Route path="/iframe" element={<IframePage />} />
          <Route path="/" element={<p>Welcome! Choose a page above.</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
