import React, { Component } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 render() {
 return (
   <div className="App">
     <BlogForm />
     <BlogList />
    </div>
   );
  }
}

export default App;
