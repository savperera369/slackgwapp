import React from 'react';
import '../index.css';
import {Grid, Card, CardMedia, CardContent} from '@mui/material';

function CardCreator(props) {
    let photoArr = props.photoArray;
    let itemSpace = props.space;
    const gridItems = photoArr.map(person => <Grid item xs={itemSpace}>
        <Card>
            <CardMedia component="img" height="200" image={require("../images/childrenscorner/" + person.picture)} title={person.name}/>
            <CardContent align="center">{person.name}</CardContent>
        </Card>
    </Grid>);
    return (
       <Grid container spacing={2}>
            {gridItems}
       </Grid>
    );
}

export default CardCreator;