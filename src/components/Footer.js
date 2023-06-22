import React from 'react';
import '../index.css';
import { Typography, AppBar, Grid, Toolbar, Button} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';

function Footer(){
    const navigate = useNavigate();
    return (
        <footer className='footer'>
        <AppBar position="relative">
        <Toolbar sx={{padding: 2}} className="appbar">
            <Grid container justify="flex-end" direction="row" alignItems="center"spacing={2}>
                <Grid item xs={3}>
                    <Typography variant="body2">Welcome to the Sri Lankan Association of Cambridge, Guelph, Kitchener and Waterloo!</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">Quick Links</Typography>
                    <Button color="inherit" onClick={()=>navigate("/contact")}>Contact Us</Button>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">Our Social Media</Typography>
                    <Button startIcon={<InstagramIcon />} color="inherit" onClick={()=>window.open("https://www.instagram.com/slacgkw/")}>Instagram</Button>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
      </footer>
    );
}

export default Footer;