import React from 'react';
import '../index.css';
import { Typography, AppBar, Grid, Toolbar, Button, Stack} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';

function Footer(){
    const navigate = useNavigate();
    return (
        <footer className='footer'>
        <AppBar position="relative">
        <Toolbar sx={{padding: 2}} className="appbar">
            <Grid container justify="flex-end" direction="row" justifyContent="flex-start" spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={4.5}>
                    <Stack alignItems="center" spacing={0}>
                        <Typography sx={{marginBottom: 1}} variant="h6">Quick Links</Typography>
                        <Button color="inherit" onClick={()=>navigate("/contact")}>Contact Us</Button>
                        <Button color="inherit" onClick={()=>navigate("/board")}>Board of Directors</Button>
                        <Button color="inherit" onClick={()=>navigate("/upcomingevents")}>Upcoming Events</Button>
                        <Button color="inherit" onClick={()=>navigate("/eventscalendar")}>Events Calendar</Button>
                        <Button color="inherit" onClick={()=>navigate("/bylaws")}>Bylaws</Button>
                        <Button color="inherit" onClick={()=>navigate("/becomemember")}>Become a Member</Button>
                    </Stack>
                </Grid>
                <Grid item xs={4.5}>
                    <Stack alignItems="center" spacing={0}>
                        <Typography variant="h6" sx={{marginBottom: 1}}>Our Social Media</Typography>
                        <Button startIcon={<InstagramIcon />} color="inherit" onClick={()=>window.open("https://www.instagram.com/slacgkw/")}>Instagram</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
      </footer>
    );
}

export default Footer;