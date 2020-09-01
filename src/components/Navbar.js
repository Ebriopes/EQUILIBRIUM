import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/LogoW.png';
import {
    Navbar, ButtonGroup, Button, Nav
} from 'reactstrap'


const NavbarE = () => {
    const [auth,setAuth] = useState(false)
    
    useEffect(()=> {
        const id = window.sessionStorage.getItem('id')
        if(id) setAuth(true)
    },[])
    const menu = () => {
        if(auth){
            return(
                <div>
                    <ButtonGroup style={{backgroundColor: "#51C8CF",borderRadius: "5px"}}>
                        <Link to="/home">
                            <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Home</Button>
                        </Link>
                        <Link to="/history">
                            <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Historial</Button>
                        </Link>
                        <Link to="/newopp/a/i">
                            <Button style={{ backgroundColor: "#51C8CF", borderColor: "#51C8CF" }}>Agregar</Button>
                        </Link>
                    </ButtonGroup>
                    <Button  className="ml-3" style={{ backgroundColor: "#a55", borderColor: "#a55" }}>lugout</Button>
                </div>
                );
        }else{
            return(<Nav> </Nav>);
        }
    }
    return (
        <Navbar style={{ backgroundColor: "#5385AF" }}>
            <img src={logo} alt="logo" height="50px"/>
            <div calssName="position-absolute">
                <h2 className="text-center text-white">EQUILIBRIUM</h2>
            </div>
            {menu()}
        </Navbar>
    )
}

export default NavbarE;