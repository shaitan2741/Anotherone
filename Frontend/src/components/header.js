import React, { useState } from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
Button,
} from 'reactstrap';
import FormValidation from '../Auth/formValidation';
import {Link} from "react-router-dom";


const Header = (props) => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
    <div className="container">

    
{/* <canvas class="particles-js-canvas-el" width="2864" height="486" ></canvas> */}
    <Navbar className="navbar navbar-expand-sm navbar-dark "  expand="md">
        <NavbarBrand href="/"><div className="logo1"></div></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar style={{color:'red'}}>
        <Nav navbar>
            <NavItem>
            <NavLink href="/home/" className="font1">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/marketTrack">Marketrack</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/predict">Stockfaq</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/about" >About</NavLink>
            </NavItem>
            <NavItem>
            <Button outline component={Link} href='/Auth'>
                <span>Login</span>
                                </Button>
                            </NavItem>
        </Nav>
        </Collapse>
        
    </Navbar>
    <br />
    </div>
);
}

export default Header;