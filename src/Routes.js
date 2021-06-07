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
import TheMatches from './Componenets/TheMatches';
import NotFound from './Componenets/NotFound';

import 'react-toastify/dist/ReactToastify.css';

const Routes = ({ user }) => {
  return (
    <BrowserRouter>

      <Header user={user} />

      <Switch>

        <Route path='/admin_players/edit_player/:playerid' component={AuthHOC(AddEditPlayers)} />

        <Route path='/admin_players/add_player' component={AuthHOC(AddEditPlayers)} />

        <Route path='/admin_players' component={AuthHOC(AdminPlayers)} />


        <Route path='/admin_matches/edit_match/:matchid' component={AuthHOC(AddEditMatch)} />

        <Route path='/admin_matches/add_match' component={AuthHOC(AddEditMatch)} />

        <Route path='/admin_matches' component={AuthHOC(AdminMatches)} />



        <Route path='/the_team' component={TheTeam} />

        <Route path='/the_matches' component={TheMatches} />

        <Route path='/dashboard' component={AuthHOC(Dashboard)} />

        <Route path='/sign-in' component={(props) => <SigIn {...props} user={user} />} />

        <Route path='/' exact component={Home} />


        <Route component={NotFound} />

      </Switch>

      <ToastContainer />
      <Footer />

    </BrowserRouter>
  );
}

export default Routes;
