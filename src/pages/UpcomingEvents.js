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
            <div>
                <img src={require("../images/imageOne.jpeg")} alt="more-directions" height="400" width="400"/>
            </div>
            <div>
                <img src={require("../images/imageTwo.jpeg")} alt="more-directions-two" height="400" width="400"/>
            </div>
            <div>
                <img src={require("../images/imageThree.jpeg")} alt="more-directions-three" height="400" width="400"/>
            </div>
        </Container>
    );
}

export default UpcomingEvents;