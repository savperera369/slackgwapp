import React from 'react';
import '../index.css';
import galaNight from '../pdfs/gala_night_2015.pdf';
//import beachDay from '../pdfs/beach_trip_2015.pdf';
//import summerEvent from '../pdfs/summer_event_2015.pdf';
import { Typography, Card, CardContent, Container, Stack, Link} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PastEvents(){
    return (
        <Container className="topDoc">
            <Typography variant="h4">Past Events</Typography>
            <br />
            <Stack direction="row" spacing={2}>
                <Card sx={{backgroundColor:"#FCF6F5"}} variant="outlined">
                    <CardContent>
                        <Stack alignItems="start" spacing={1}>
                            <Typography fontWeight="bold" variant="h5">Sri Lankan Night</Typography>
                            <Typography variant="body1">Date: December 5th, 2015</Typography>
                            <Typography variant="body1">Location: <Link component="button" variant="body1" onClick={() => window.open("https://www.google.com/maps/place/440+Weber+St+N,+Waterloo,+ON+N2L+4E7/@43.485885,-80.5316827,17z/data=!3m1!4b1!4m6!3m5!1s0x882bf3ee4e0e6049:0xfbd33752425a0459!8m2!3d43.485885!4d-80.529494!16s%2Fg%2F11c23gt8m7?entry=ttu")}> K-W Masonic Hall, Waterloo, ON</Link></Typography>
                            <Typography variant="body1"><Link href={galaNight} target="_blank" rel="noreferrer">Download Flyer</Link></Typography>
                        </Stack>
                    </CardContent>
                </Card>
                <Card sx={{backgroundColor:"#FCF6F5"}} variant="outlined">
                    <CardContent>
                        <Stack alignItems="start" spacing={1}>
                            <Typography fontWeight="bold" variant="h5">Beach Trip</Typography>
                            <Typography variant="body1">Date: August 8th, 2015</Typography>
                            <Typography variant="body1">Location: <Link component="button" variant="body1" onClick={() => window.open("https://www.google.com/maps/search/Stanley+Beach+London+ON/@42.6592471,-81.2225729,16z/data=!3m1!4b1?entry=ttu")}>Stanley Beach, London, ON</Link></Typography>
                            <Typography variant="body1"><Link href={galaNight} target="_blank" rel="noreferrer">Download Flyer</Link></Typography>
                        </Stack>
                    </CardContent>
                </Card>
                <Card sx={{backgroundColor:"#FCF6F5"}} variant="outlined">
                    <CardContent>
                        <Stack alignItems="start" spacing={1}>
                            <Typography fontWeight="bold" variant="h5">Summer Event 2015</Typography>
                            <Typography variant="body1">Date: July 11th, 2015</Typography>
                            <Typography variant="body1">Location: <Link component="button" variant="body1" onClick={() => window.open("https://www.google.com/maps/place/100+Westmount+Rd+N,+Waterloo,+ON+N2L+3G5/@43.4662812,-80.5397722,17z/data=!3m1!4b1!4m6!3m5!1s0x882bf404b01c87eb:0x63b6dc177a049338!8m2!3d43.4662812!4d-80.5375835!16s%2Fg%2F11c4y7zxsx?entry=ttu")}>Waterloo Park: 100 Westmount Road North, Waterloo, ON</Link></Typography>
                            <Typography variant="body1"><Link href={galaNight} target="_blank" rel="noreferrer">Download Flyer</Link></Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>

        </Container>
    );
}

export default PastEvents;