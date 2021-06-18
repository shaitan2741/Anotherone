// import React ,{Component} from 'react';
// import '../form.css';
// import ParticlesBg from 'particles-bg';
// class FormValidation extends React.Component{

//     render(){
//       return(
//           <>
//         <ParticlesBg color="#FFFFFF" type="cobweb" bg={true} />
//         <div id="loginform">
//           <FormHeader title="Login" />
//           <Form />
//           <OtherMethods />
//         </div>
//         </>
//       )
//     }
//   }
  
//   const FormHeader = props => (
//       <h2 id="headerTitle">{props.title}</h2>
//   );
  
  
//   const Form = props => (
//      <div>
//        <FormInput description="Username" placeholder="Enter your username" type="text" />
//        <FormInput description="Password" placeholder="Enter your password" type="password"/>
//        <FormButton title="Log in"/>
//      </div>
//   );
  
//   const FormButton = props => (
//     <div id="button" class="row11">
//       <button>{props.title}</button>
//     </div>
//   );
  
//   const FormInput = props => (
//     <div class="row11">
//       <label>{props.description}</label>
//       <input type={props.type} placeholder={props.placeholder}/>
//     </div>  
//   );
  
//   const OtherMethods = props => (
//     <div id="alternativeLogin">
//       <label>Or sign in with:</label>
//       <div id="iconGroup">
//         <Facebook />
//         <Twitter />
//         <Google />
//       </div>
//     </div>
//   );
  
//   const Facebook = props => (
//     <a href="#" id="facebookIcon"></a>
//   );
  
//   const Twitter = props => (
//     <a href="#" id="twitterIcon"></a>
//   );
  
//   const Google = props => (
//     <a href="#" id="googleIcon"></a>
//   );

//   export default FormValidation;

import React, { useState,useEffect } from "react";
import APIService  from "./Api_service";
import {useCookies} from "react-cookie";
import ParticlesBg from 'particles-bg';
import {useHistory,Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import '../form.css';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(['mytoken'])
  const [isLogin, setLogin] = useState('true')

  let history = useHistory()
  useEffect(() => {
      if(token['mytoken']){
          history.push('/marketTrack')
      }
  },[token])


    const loginBtn =() =>{
        APIService.LoginUser({username,password})
        .then(resp => setToken('mytoken',resp.token))
        .catch(error => console.log(error))
    }

    const RegisterBtn =() =>{
        APIService.RegisterUser({username,password})
        .then(() => loginBtn())
        .catch(error => console.log(error))

    }

  return (
   
    <div id='loginform'>
    <ParticlesBg color="#FFFFFF" type="cobweb" bg={true} />
    {isLogin ?  <h2 id='headerTitle'>Login</h2> : <h2 id='headerTitle'>Register</h2>}
      <div className='row11'>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
          
          placeholder="enter username"
        />
      <br/>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
          placeholder="enter password"
        />
      <br/>
      
        {isLogin ? <button onClick={loginBtn}  >
          Login
        </button> : <button onClick={RegisterBtn}  >
          Register
        </button>}
<br/>
            {isLogin ? <h6>If you don't have account<Link   onClick={()=> setLogin(false)} >SignUp</Link></h6>: 
                      <h6>If you have account<Link   onClick={()=> setLogin(true)} >Login</Link></h6>}
                  <br/>
      </div>
    </div>
  
  );
}

export default Login;