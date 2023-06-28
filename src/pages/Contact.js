import React from 'react';
import '../index.css';
import { Typography, Container, Stack, Card, CardContent} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

function Contact(){
    return (
        <Container className="topDoc">
            <Typography align="center" variant="h4">Contact Us</Typography>
            <br/>
            <Typography variant="body1">Name: Sri Lanka Association of Cambridge, Guelph, Kitchener, and Waterloo</Typography>
            <br />
            <Typography variant="body1">Registration Number: Not for Profit Ontario Corporation 1766322</Typography>
            <br />
            <Stack direction="row" spacing={2}>
            <Card variant="outlined">
                <CardContent className="card">
                    <Stack spacing={2}>
                        <EmailIcon />
                        <Typography fontWeight="bold" variant="h6">By Email</Typography>
                        <Typography variant="body1">Email us at the specified address for a prompt response!</Typography>
                        <Typography variant="body1">srilanka@tricitysrilanka.com</Typography>
                    </Stack>
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent className="card">
                    <Stack spacing={2}>
                        <LocalPostOfficeIcon />
                        <Typography fontWeight="bold" variant="h6">By Post</Typography>
                        <Typography variant="body1">You can reach us by post as well.</Typography>
                        <Typography variant="body1">Postal Address: 427 Lausanne Cresent Waterloo, ON, N2T 2X6, Canada</Typography>
                    </Stack>
                </CardContent>
            </Card>
            </Stack>
        </Container>
    );
}

export default Contact;