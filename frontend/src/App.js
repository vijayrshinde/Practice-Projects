import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingIn from "./components/forms/SingIn";
import SignUp from "./components/forms/SignUp";
import Table from "./components/Table";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/table" element={<Table />} />
        </Route>
        <Route path="/sign-in" element={<SingIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
export default App;
