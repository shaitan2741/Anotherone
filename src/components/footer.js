import React from "react";
import '../App.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {MdCall,MdLocationOn} from 'react-icons/md';

import {TiSocialLinkedinCircular} from "react-icons/ti";
import {AiFillTwitterCircle} from "react-icons/ai";
import {ImMail4}from "react-icons/im";

const FooterPage = () => {
    return (
        <div className='footer' style={{backgroundColor:'#121212'}}>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="logo1"></div>
                </div>
                <div className="row row-cols-3">
                    <div className="col">
                    <div className="container">
                    <h6 className="text-uppercase text-white" style={{marginLeft:'15px', fontWeight:'bold',fontSize:"2.7vmin"}}>Around the web</h6>
                        <a href="https://facebook.com"><FaFacebook size="30px" color="white" hover="true" className="icons" size='4vh' /></a>
                            &nbsp;
                            <a href="https://instagram.com"><FaInstagram size="30px" color="white" hover="true" size='4vh'/></a>
                            &nbsp;
                            <a href ="https://twitter.com"><AiFillTwitterCircle size="30px" color="white" hover="true" className="icons" size='4vh' /></a>
                            &nbsp;
                            <a href ="https://LinkedIn.com"><TiSocialLinkedinCircular size="40px" color="white" hover="true" className="icons" size='4vh'/></a>
                            &nbsp;
                            <a href ="https://Gmail.com"><ImMail4 size="30px" color="white" hover="true" className="icons" size='4vh'/></a>
                    </div>
                        
                            
                    </div>

                    <div className="col">
                            <div className="container">
                            <p className="text-white text-capatilize " style={{textAlign:"center",fontSize:'2.4vmin'}} >Stocker is a <b>stock analaysis and screening tool</b> to see information of list companies in a very easy way. </p>
                            </div>
                    
                    </div>
                    <div className="col">
                        <div className="container">
                        <h6 className="text-white text-uppercase" style={{textAlign:"center",fontWeight:'bold',fontSize:"2.7vmin"}}>Contact us</h6>
                            <div className="row mtx-4 mb-2">

                                    <span className="text-white" style={{fontSize:"2vmin"}}><a href ="#"><MdCall size="30px" color="white" hover="true" className="icons" size='2.2vh' style={{marginInlineStart:"2vh",marginBottom:"1.4vh", marginRight:"2vh"}} /></a> +91 8079069### </span>
                            </div>
                            
                            <div className="row mtx-4">
                                
                                    <span className="text-white" style={{fontSize:"2vmin"}}><a href ="#"><MdLocationOn size="30px" color="white" hover="true" className="icons" size='2.2vh' style={{marginInlineStart:"2vh",marginBottom:"1.4vh", marginRight:"2vh"}} /></a> Somewhere in Jaipur</span>
                            </div>
                        </div>
                            
                            

                            
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FooterPage;