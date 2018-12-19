import React, { useState, useEffect, useReducer} from 'react';
import { BrowserRouter, Route, NavLink} from 'react-router-dom';
import { render } from 'react-dom';
import {Home, Register, Login, Profil, Account} from '../containers/';
import reducer from '../reducer/';

const initialState = {
  count: 10
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <div>
          <Route exact path="/" render={() => <Home state={state} dispatch={dispatch} />}/>
          <Route path="/register" render={() => <Register state={state} dispatch={dispatch} />}/>
          <Route path="/login" render={() => <Login state={state} dispatch={dispatch} />}/>
          <Route path="/account" render={() => <Account state={state} dispatch={dispatch} />}/>
          <Route path="/profil/:UserId" render={({match}) => <Profil match={match} state={state} dispatch={dispatch}/>}/>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/account">Account</NavLink>
          <NavLink to="/profil/1234">UserId</NavLink>
      </div>
    </BrowserRouter>
  )
}

var mountNode = document.getElementById("app")
render(<App/>, mountNode)