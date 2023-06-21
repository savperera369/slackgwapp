import React from 'react';
import '../index.css';
import { AppBar, Toolbar, Stack, Button} from '@mui/material';
import MenuComponent from './MenuComponent';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const aboutButton = [{path: "/history", name: "History"}, {path: "/board", name: "Board of Directors"}, {path: "/bylaws", name: "ByLaws"}];
    const servicesButton = [{path: "/projects", name: "Projects"}, {path: "/links", name: "Links"}];
    const memberButton = [{path: "/children", name: "Childrens Corner"}, {path: "/becomemember", name: "Become A Member"}];
    const contactButton = [{path: "/contact", name: "Contact Information"}];
    const eventsButton = [{path: "/eventscalendar", name: "Events Calendar"}, {path: "/upcomingevents", name: "Upcoming Events"}, {path: "/pastevents", name: "Past Events"}];
    const navigate = useNavigate();

    return (
        <AppBar position="relative">
        <Toolbar className="appbar">
            <Stack direction="row" spacing={2}>
                <Button color="inherit" id="home-btn" onClick={()=>navigate("/")}>Home</Button>
                <MenuComponent buttonName="about-btn" menuId="about-menu" menuName="About" routes={aboutButton}/>
                <MenuComponent buttonName="events-btn" menuId="events-menu" menuName="Events" routes={eventsButton}/>
                <MenuComponent buttonName="services-btn" menuId="services-menu" menuName="Services" routes={servicesButton}/>
                <MenuComponent buttonName="contact-btn" menuId="contact-menu" menuName="Contact" routes={contactButton}/>
                <MenuComponent buttonName="members-btn" menuId="members-menu" menuName="Members" routes={memberButton}/>
                <Button color="inherit" id="media-btn">Media</Button>
            </Stack>
        </Toolbar>
      </AppBar>
    );
}

export default Navbar;