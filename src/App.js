import React from 'react';
import Header from "./Header"
import Body from "./Body"
import './App.css';
import {BrowserRouter,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/"><Header/><Body/></Route>
      <Route path="/services">Services</Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
