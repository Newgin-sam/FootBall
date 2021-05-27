import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './Componenets/header_footer/Header';
import Footer from './Componenets/header_footer/Footer';
import Home from './Componenets/Home';
import Dashboard from './Componenets/Admin/Dashboard';
import SigIn from './Componenets/SignIn';
import AdminPlayers from './Componenets/Admin/Players';

import AuthHOC from './Componenets/HOC/AuthHOC';

import 'react-toastify/dist/ReactToastify.css';

const Routes = ({ user }) => {
  return (
    <BrowserRouter>

      <Header user={user} />

      <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/adim_players' exact component={AdminPlayers} />
        <Route path='/dashboard' exact component={AuthHOC(Dashboard)} />
        <Route path='/sign-in' exact component={(props) => <SigIn {...props} user={user} />} />

      </Switch>

      <ToastContainer />

      <Footer />

    </BrowserRouter>
  );
}

export default Routes;
