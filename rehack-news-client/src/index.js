import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './App';
import Login from './Login'
import Saves from './Saves'

import registerServiceWorker from './registerServiceWorker';
import {
  StyledNavBar,
  Logo,
  StyledLink,
  LogoStyledLink
} from './style';
import './index.css';


const NavBar = () =>
  <StyledNavBar>
    <Logo>
      <LogoStyledLink to="/">
        HN
      </LogoStyledLink>
    </Logo>

    <StyledLink to="/saves">
      <i className="fas fa-heart"></i>
    </StyledLink>

    <StyledLink to="/login">
      LogIn
    </StyledLink>
  </StyledNavBar>
;

ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={App}/>
      <Route path="/saves" component={Saves}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>),
  document.getElementById('root')
);



registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}