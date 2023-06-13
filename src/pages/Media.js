import React from 'react';
import '../index.css';
import { Typography, Container, Grid, Card, CardMedia, CardContent} from '@mui/material';

function Media() {
    return (
        <Container className="topDoc">
            <Typography variant="h4">Photos and Videos</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia component="video" height="350" video={require("../images/vid1.mp4")} title="video-1"/>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Media;