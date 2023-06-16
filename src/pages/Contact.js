import React from 'react';
import '../index.css';
import { Typography, Container, Stack, Card, CardContent} from '@mui/material';

function Contact(){
    return (
        <Container className="topDoc">
            <Typography variant="h4">Who We Are</Typography>
            <br/>
            <Card variant="outlined">
                <CardContent className="card">
                    <Stack spacing={2}>
                        <Typography variant="body1">Name: Sri Lanka Association of Cambridge, Guelph, Kitchener, and Waterloo</Typography>
                        <Typography variant="body1">Postal Address: 427 Lausanne Cresent Waterloo, ON, N2T 2X6, Canada</Typography>
                        <Typography variant="body1">Email Address: srilanka@tricitysrilanka.com</Typography>
                        <Typography variant="body1">Registration Number: Not for Profit Ontario Corporation 1766322</Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Contact;