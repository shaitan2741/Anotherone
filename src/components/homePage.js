import React, { Component } from 'react';
import { Button} from 'reactstrap';
import '../HeroSection.css';


class Home extends Component{

    render(){
        return (

<div>
<div className='hero-container'>


<img className="img1" src={"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"}/>

<br/>
<br/>
<h1>ADVENTURE AWAITS</h1>
<p>What are you waiting for?</p>
<div className='hero-btns'>
  <Button
    className='btns'
    buttonStyle='btn--outline'
    buttonSize='btn--large'
  >
    GET STARTED
  </Button>
  <Button
    className='btns'
    buttonStyle='btn--primary'
    buttonSize='btn--large'
    onClick={console.log('hey')}
  >
    WATCH TRAILER <i className='far fa-play-circle' />
  </Button>
</div>
</div>
    {/* <Footer /> */}
</div>

        
        );
    };

}
export default Home;

    