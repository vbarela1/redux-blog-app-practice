import React from 'react';
import { Route } from 'react-router';
import App from './App';
import BlogList from './BlogList';
import Blog from './Blog';



export default (
  <Route>
    <Route path="/" component={App} />
    <Route path="/blog/:id" component={Blog} />

  </Route>
);
