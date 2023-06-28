import React from 'react';
import '../index.css';
import { Typography, Card, CardContent, CardMedia, Container, Button, Stack} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Sponsors from '../components/Sponsors';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <Container align="center" className="topDoc">
     <Typography variant="h4">Our Mission</Typography>
     <br />
     <Typography variant="h6">Welcome to the Sri Lankan Association of Cambridge, Guelph, Kitchener, and Waterloo!
      We are an organization that unites the residents of the above cities in Ontario who are
      of Sri Lankan origin. Our primary aim is to preserve and perpetuate the traditions of Sri Lanka
      among members of our community.
      </Typography>
     <br />
     <Typography variant="h4">Current Events</Typography>
      <Card className="topDoc" sx={{ maxWidth: 800 }}>
        <CardMedia component="img" height="450" image={require("../images/summerevent.jpeg")} title="summer-event"/>
        <CardContent>
          <Typography variant="h6" sx={{marginBottom: 1}}>2023 Summer Event</Typography>
          <Stack>
            <Button color="primary" onClick={()=>navigate("/upcomingevents")}>View Details</Button>
            <Button color="primary" onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSdoUFSQL-ElZTTgv60NGAhjsRYQWZs3bUS4iDqswoJ05DSOxQ/viewform")}>Become a Volunteer</Button>
          </Stack>
        </CardContent>
      </Card>
      <br />
      <Typography variant="h5" sx={{margin: 2}}>Sponsors</Typography>
      <Sponsors />
    </Container>
  );
}

export default Home;