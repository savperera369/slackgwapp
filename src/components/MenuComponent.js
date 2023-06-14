import React from 'react';
import '../index.css';
import { Menu, MenuItem, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

function MenuComponent({buttonName, menuId, menuName, routes}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    const menuItems = routes.map(route=>
        <MenuItem onClick={()=> {
                        handleClose();
                        navigate(route.path);
                    }}>
                    {route.name}</MenuItem>)
    return (
        <>
        <Button color="inherit" id={buttonName} aria-controls={open ? {menuId} : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} endIcon={<ArrowDropDownIcon />}>{menuName}</Button>
        <Menu id={menuId} anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': {buttonName}}}>
                {menuItems}
            </Menu>
        </>
    );
}

export default MenuComponent;