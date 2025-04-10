import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import ApplyJob from "./pages/ApplyJob";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apply-job/:id" element={<Applications/>} />
        <Route path="/applications" element={<ApplyJob/>} />
      </Routes>
    </div>
  );
}  

export default App;