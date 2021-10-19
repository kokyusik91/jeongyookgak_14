import React, { useEffect } from 'react';
import './App.css';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Cart from '../pages/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopList from '../pages/ShopList';
// import { ConnectedRouter } from "connected-react-router";
// import { history } from "../redux/configureStore";
import { Route, Switch } from 'react-router-dom';

function App() {
  console.log('1');

  useEffect(() => {
    console.log('2');
  }, []);

  return (
    <React.Fragment>
      {/* <Header /> */}
      <Switch>
        {/* <ConnectedRouter history={history}> */}
        <Route path='/' exact component={Main} />
        <Route path='/detail' exact component={Detail} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/shopList' exact component={ShopList} />
        {/* </ConnectedRouter> */}
      </Switch>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
