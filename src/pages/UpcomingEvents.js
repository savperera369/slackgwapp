import React from 'react';
import '../index.css';
import { Typography, Container, Stack, Card, CardContent, Link, Box} from '@mui/material';

function UpcomingEvents() {
    return (
        <Container className="topDoc">
            <Typography variant="h4">Upcoming Events</Typography>
            <br />
            <Typography variant="h6">Summer Event 2023</Typography>
            <br />
            <Stack direction="row" spacing={5}>
                <iframe 
                title='summer-event'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.808263227574!2d-80.53992492385072!3d43.46459997111175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf558cff6163f%3A0x3b7159db878544bf!2sWaterloo%20Park%20West%20Gazebo!5e0!3m2!1sen!2sca!4v1686803331208!5m2!1sen!2sca" 
                width="600" 
                height="450" 
                style={{border:"0"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <Box>
                    <Card sx={{backgroundColor:"#FCF6F5"}} variant="outlined">
                        <CardContent className='card'>
                            <Stack alignItems="start" spacing={1}>
                                <Typography variant="body1">Date: July 8th, 2023</Typography>
                                <Typography variant="body1">Time: 8:00AM - 6:00PM</Typography>
                                <Typography variant="body1">Location: Waterloo Park West Gazebo, Waterloo, Ontario</Typography>
                                <Typography variant="body1">More Information: <Link component="button" variant="body1" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSexp19_rc7MKz5KTwm2VSjlEGLORJKoxZHVsRBtGTys7Whzfw/viewform")}> Registration Form</Link></Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
            <Box sx={{margin: 4}}align="center">
                <button align="center" class="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Click for more details
                </button>
            </Box>
            <div class="collapse" id="collapseExample">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require("../images/imageOne.jpeg")} alt="more-directions" />
                </div>
                <div class="carousel-item">
                    <img src={require("../images/imageTwo.jpeg")} alt="more-directions-two"/>
                </div>
                <div class="carousel-item">
                    <img src={require("../images/imageThree.jpeg")} alt="more-directions-three"/>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
            </div>
        </Container>
    );
}

export default UpcomingEvents;