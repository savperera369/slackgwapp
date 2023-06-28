import React from 'react';
import '../index.css';
import { Typography, Container, Stack, Card, CardContent} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

function Contact(){
    return (
        <Container className="topDoc">
            <Typography align="center" variant="h4">Contact Us</Typography>
            <br/>
            <Typography align="center" variant="body1">Name: Sri Lanka Association of Cambridge, Guelph, Kitchener, and Waterloo</Typography>
            <br />
            <Typography align="center" variant="body1">Registration Number: Not for Profit Ontario Corporation 1766322</Typography>
            <br />
            <Stack justifyContent="center" direction="row" spacing={2}>
            <Card variant="outlined">
                <CardContent className="card">
                    <Stack spacing={2}>
                        <EmailIcon />
                        <Typography fontWeight="bold" variant="h6">By Email</Typography>
                        <Typography variant="body1">Email us at the specified address for a prompt response!</Typography>
                        <Typography variant="body1">secretaryslacgkw@ymail.com</Typography>
                    </Stack>
                </CardContent>
            </Card>
            </Stack>
        </Container>
    );
}

export default Contact;