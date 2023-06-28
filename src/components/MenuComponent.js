import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState} from 'react';

function MenuComponent({menuName, routes}) {
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const navigate = useNavigate();
    const navItems = routes.map(route=>
        <NavDropdown.Item onClick={()=> {
                        navigate(route.path);
                    }}>
                    {route.name}</NavDropdown.Item>)
    return (
        <>
        <NavDropdown show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} title={<span style={{color:"white"}}>{menuName}</span>} id="basic-nav-dropdown">
              {navItems}
        </NavDropdown>
        </>
    );
}

export default MenuComponent;