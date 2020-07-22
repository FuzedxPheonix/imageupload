import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ImageForm from "./components/ImageForm";


function App() {
  return (
      <Router>
        <Route path="/" exact component={ImageForm}></Route>
      </Router>
  );
}

export default App;
