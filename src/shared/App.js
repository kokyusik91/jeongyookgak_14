import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import axios from "axios";

import Header from "../components/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/Login" exact component={Login} />
      <Route path="/Signup" exact component={Signup} />
    </div>
  );
}

export default App;
