import React from 'react';
import '../index.css';
import { Typography, Card, CardContent, CardMedia, Container, Button} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Sponsors from '../components/Sponsors';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <Container align="center" className="topDoc">
     <Typography variant="h4">Current Events</Typography>
      <Card className="topDoc" sx={{ maxWidth: 800 }}>
        <CardMedia component="img" height="450" image={require("../images/summerevent.jpeg")} title="summer-event"/>
        <CardContent>
          <Typography variant="h6" sx={{marginBottom: 1}}>2023 Summer Event</Typography>
          <Button color="primary" onClick={()=>navigate("/upcomingevents")}>View Details</Button>
        </CardContent>
      </Card>
      <br />
      <Typography variant="h5" sx={{margin: 2}}>Sponsors</Typography>
      <Sponsors />
    </Container>
  );
}

export default Home;