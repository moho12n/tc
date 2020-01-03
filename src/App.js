import React from 'react';
import logo from './logo.svg';
import Nav from './Components/Nav'
import './App.css';
import Header from './Components/Header';
import Albums from './Screens/Albums';
import Home from './Screens/Home';


import {Route} from "react-router"
import {BrowserRouter} from "react-router-dom"
class App extends React.Component{
  render(){
    return  (
      <BrowserRouter>
         <Nav/>
        <Header/>
        <Route exact  path="/" component={Home} />
        <Route path="/albums" component={Albums} />
      </BrowserRouter>

    );
  } 
}



export default App;
