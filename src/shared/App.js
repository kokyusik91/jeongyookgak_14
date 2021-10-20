import React from "react";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import Footer from "../components/Footer";
import ShopList from "../pages/ShopList";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Main from "../pages/Main";
import Header from "../components/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Shopping from "../pages/Shopping";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {
  const dispatch = useDispatch();

  const isToken = window.sessionStorage.getItem("USER_TOKEN") ? true : false;
  React.useEffect(() => {
    //로그인 체크.
    if (isToken) dispatch(userActions.LoginCheck());
  }, [dispatch, isToken]);

  return (
    <ConnectedRouter history={history}>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/shopping" exact component={Shopping} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Signup" exact component={Signup} />
      <Route path="/detail/:id" exact component={Detail} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/shopList" exact component={ShopList} />
    </ConnectedRouter>
  );
}

export default App;
