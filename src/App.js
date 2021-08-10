import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import './style.css';
import Home from '../Home';
import Posts from '../Posts';
import About from '../About';
import Main from '../Main';
import NoPage from '../NoPage';
import Post from '../Post';

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Main</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/posts/:id" component={Post} />
        <Route path="/posts" component={Posts} />
        <Route path="" component={NoPage} />
      </Switch>
    </BrowserRouter>
  );
}
