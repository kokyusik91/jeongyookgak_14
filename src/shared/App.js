import "./App.css";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Main from "../pages/Main";
import Header from "../components/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Signup" exact component={Signup} />
    </ConnectedRouter>
  );
}

export default App;
