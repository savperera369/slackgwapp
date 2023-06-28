import React from 'react';
import '../index.css';
import bylaws from '../pdfs/by_laws.pdf';
import { Typography, Container, Link, Card, CardContent} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

function ByLaws () {
    return (
        <Container className="topDoc">
            <Typography variant="h4">Bylaws</Typography>
            <br />
            <Card sx={{backgroundColor:"#FCF6F5"}} variant="outlined">
                <CardContent>
                    <ArticleIcon sx={{height: 50, width: 50}}/>
                    <br />
                    <Typography variant="body1"><Link href={bylaws} target="_blank" rel="noreferrer">Download a Copy of the Bylaws</Link></Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default ByLaws;