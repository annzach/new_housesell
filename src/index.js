import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Welcome from './components/Welcome';
import BuyNav from './components/BuyNav';
import SearchPage from './components/SearchPage';
import Main from './components/Main';
import HouseSell from  './components/HouseSell';
import BuyPage from  './components/BuyPage';
import SellNav from './components/SellNav';
import AddPerson from './components/AddPerson'
import ViewPerson from './components/ViewPerson'


render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={Welcome}></IndexRoute>
    <Route path='buy' component={BuyNav}>
      <Route path='allHouse' component={BuyPage}></Route>
      <Route path='search' component={SearchPage}></Route>
    </Route>
    <Route path='sell' component={SellNav}>
      <Route path='housesell' component={HouseSell}></Route>
      <Route path='addperson' component={AddPerson}></Route>
      <Route path='viewperson' component={ViewPerson}></Route>

    </Route>
    </Route>

  </Router>,
  document.getElementById('root')
);


// <Route path='seachClient' component={SearchClient}></Route>
// <Route path='animals' component={AnimalsPage}></Route>
