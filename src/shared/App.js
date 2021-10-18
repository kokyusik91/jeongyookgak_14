import "./App.css";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Main from "../pages/Main"


function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" exact component={Main}/>
    </ConnectedRouter>
  );
}

export default App;
