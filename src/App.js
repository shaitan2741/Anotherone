import About from './components/about';
import './App.css';
import Header from "./components/header";
import Home from "./components/homePage";

import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import React from 'react';
import MarketTrack from './components/marketTrack';
import FooterPage from './components/footer';
function App() {
  return (
    <BrowserRouter>
        
        
      
    
        <Header/>
    <Switch>
    <Route exact path='/about' component={About}/>
    <Route exact path='/home' component={Home}/>
    <Route exact path='/marketTrack' component={MarketTrack}/>
    <Redirect to='/about'/>
    </Switch>
    <FooterPage></FooterPage>
    
  
    </BrowserRouter>
  );
}

export default App;
