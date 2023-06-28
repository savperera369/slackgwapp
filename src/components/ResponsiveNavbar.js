import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuComponent from './MenuComponent';
import {Stack, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function ResponsiveNavbar() {
    const aboutButton = [{path: "/history", name: "History"}, {path: "/board", name: "Board of Directors"}, {path: "/bylaws", name: "Bylaws"}];
    const servicesButton = [{path: "/projects", name: "Projects"}, {path: "/links", name: "Links"}];
    const memberButton = [{path: "/children", name: "Childrens Corner"}, {path: "/becomemember", name: "Become A Member"}];
    const contactButton = [{path: "/contact", name: "Contact Information"}];
    const eventsButton = [{path: "/eventscalendar", name: "Events Calendar"}, {path: "/upcomingevents", name: "Upcoming Events"}, {path: "/pastevents", name: "Past Events"}];
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" className="appbar">
            <Container>
                <Navbar.Brand>
                    <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
                        <img height="80" width="80"src={require("../images/logo.png")} alt="logo"/>
                        <Typography onClick={()=> {navigate("/")}} color="white" variant="h5">SLACGKW</Typography>
                    </Stack>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{color:"white"}} onClick={()=> {navigate("/")}}>Home</Nav.Link>
                        <MenuComponent menuName="About" routes={aboutButton}/>
                        <MenuComponent menuName="Events" routes={eventsButton}/>
                        <MenuComponent menuName="Services" routes={servicesButton}/>
                        <MenuComponent menuName="Contact" routes={contactButton}/>
                        <MenuComponent menuName="Members" routes={memberButton}/>
                    </Nav>
                </Navbar.Collapse>
                </Stack>
            </Container>
        </Navbar>
  );
}

export default ResponsiveNavbar;