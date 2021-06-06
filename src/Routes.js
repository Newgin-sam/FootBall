import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './Componenets/header_footer/Header';
import Footer from './Componenets/header_footer/Footer';
import Home from './Componenets/Home';
import Dashboard from './Componenets/Admin/Dashboard';
import SigIn from './Componenets/SignIn';
import AdminPlayers from './Componenets/Admin/Players';
import AddEditPlayers from './Componenets/Admin/Players/AddEditPlayers';
import AuthHOC from './Componenets/HOC/AuthHOC';
import TheTeam from './Componenets/TheTeam';
import AdminMatches from './Componenets/Admin/Matches';
import AddEditMatch from './Componenets/Admin/Matches/AddEditMatch';

import 'react-toastify/dist/ReactToastify.css';

const Routes = ({ user }) => {
  return (
    <BrowserRouter>

      <Header user={user} />

      <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/admin_players' exact component={AuthHOC(AdminPlayers)} />
        <Route path='/admin_players/add_player' exact component={AuthHOC(AddEditPlayers)} />
        <Route path='/admin_players/edit_player/:playerid' exact component={AuthHOC(AddEditPlayers)} />
        <Route path='/admin_matches' exact component={AuthHOC(AdminMatches)} />
        <Route path='/admin_matches/add_match' exact component={AuthHOC(AddEditMatch)} />
        <Route path='/admin_matches/edit_match/:matchid' exact component={AuthHOC(AddEditMatch)} />
        <Route path='/the_team' exact component={TheTeam} />
        <Route path='/dashboard' exact component={AuthHOC(Dashboard)} />
        <Route path='/sign-in' exact component={(props) => <SigIn {...props} user={user} />} />

      </Switch>

      <ToastContainer />

      <Footer />

    </BrowserRouter>
  );
}

export default Routes;
