import React from 'react';
import '../index.css';
import bylaws from '../pdfs/by_laws.pdf';
import { Typography, Container, Link, Card, CardContent} from '@mui/material';

function ByLaws () {
    return (
        <Container className="topDoc">
            <Typography variant="h4">By Laws</Typography>
            <br />
            <Card sx={{backgroundColor:"#FCF6F5"}} variant="outlined">
                <CardContent>
                    <Typography variant="body1"><Link href={bylaws} target="_blank" rel="noreferrer">Download a Copy of the Bylaws</Link></Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default ByLaws;