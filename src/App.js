import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";

function App() {


  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert  />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home  />} />
              <Route path="/about" element={<About />} />
              <Route
                exact
                path="/login"
                element={<Login  />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
