import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MenuComponent({menuName, routes}) {
    const navigate = useNavigate();
    const navItems = routes.map(route=>
        <NavDropdown.Item onClick={()=> {
                        navigate(route.path);
                    }}>
                    {route.name}</NavDropdown.Item>)
    return (
        <>
        <NavDropdown title={menuName} id="basic-nav-dropdown">
              {navItems}
        </NavDropdown>
        </>
    );
}

export default MenuComponent;