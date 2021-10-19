import React from 'react';
import Detail from '../pages/Detail';
import Cart from '../pages/Cart';
import Footer from '../components/Footer';
import ShopList from '../pages/ShopList';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import Main from '../pages/Main';
import Header from '../components/Header';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Route path='/' exact component={Main} />
      <Route path='/Login' exact component={Login} />
      <Route path='/Signup' exact component={Signup} />
      <Route path='/detail' exact component={Detail} />
      <Route path='/cart' exact component={Cart} />
      <Route path='/shopList' exact component={ShopList} />
    </ConnectedRouter>
  );
}

export default App;
