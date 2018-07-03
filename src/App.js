import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; // the dot before the /App means from the same direcotry
import Header from './Header'
import Main from './Main'
import Body from './Body'
import Class from  './Class'
import Aside from './Aside'
import Articles from './Articles'
import Columns from './Columns'
class App extends Component {
  render() {
    return (

      <Header />
      <div class="headline text-center small-12 columns">
        <h1>The Dwarf Underground</h1>
        <h3>Delving deep for the <span class="gold">shiniest</span> news</h3>
      </div>
    </div>

    
       <Main />

         <Body />

      <Class />

    <Aside />

    <Articles />



  <Columns />  
    

    );
  }
}

export default App;
