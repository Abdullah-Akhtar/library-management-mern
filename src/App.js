import React from "react";

// import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
// import Error from "./components/Error";
// import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<SignIn />} exact />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route element={Error} />
      </Routes>
    </main>
  );
}

export default App;
