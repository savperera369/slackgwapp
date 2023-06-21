import React from 'react';
import '../index.css';
import { Typography, Card, CardContent, CardMedia, Container} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Sponsors from '../components/Sponsors';

function Home() {
  return (
    <Container align="center" className="topDoc">
     <Typography variant="h4">Current Events</Typography>
      <Card className="topDoc" sx={{ maxWidth: 800 }}>
        <CardMedia component="img" height="450" image={require("../images/summerevent.jpeg")} title="summer-event"/>
        <CardContent><Typography variant="body1">2023 Summer Event</Typography></CardContent>
      </Card>
      <br />
      <Typography variant="h5" sx={{margin: 2}}>Sponsors</Typography>
      <Sponsors />
    </Container>
  );
}

export default Home;