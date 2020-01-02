import React from 'react';
import logo from './logo.svg';
import Nav from './Components/Nav'
import './App.css';
import Header from './Components/Header';
import Albums from './Screens/Albums';
class App extends React.Component{
  render(){
    return  (
      <div>
        <Nav/>
        <Header/>
        <Albums/>
      </div>

    );
  } 
}



export default App;
