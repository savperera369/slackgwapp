import React from 'react';
import '../index.css';
import { Typography, Container} from '@mui/material';
import CardCreator from '../components/CardCreator';


function ChildrensCorner() {
    const imageArr = [{picture:"Ben-Yoganathan.jpg", name:"Ben Yoganathan"}, {picture:"Chavi.jpg", name:"Chavi Karunagoda"}, {picture:"chenuki.jpeg", name:"Chenuki Rodrigo"},
    {picture:"ChenukiTwo.jpeg", name:"Chenuki Rodrigo"}, {picture:"Chenuli.png", name:"Chenuli"}, {picture:"Devshi-Perera.png", name:"Devshi Perera"}, {picture:"Dilara-Samarakoon.png", name:"Dilara Samarakoon"},
    {picture:"Hansani-Karunaratne-2.png", name:"Hansani Karunaratne"}, {picture:"Hansani-Karunaratne.png", name:"Hansani Karunaratne"}, {picture:"Harini-Wijeratne.png", name:"Harini Wijeratne"},
    {picture:"Harish-Kajendra.png", name:"Harish Kajendra"}, {picture:"Hayli-Wijeratne.png", name:"Hayli Wijeratne"},
    {picture:"Hayli.png", name:"Hayli Wijeratne"}, {picture:"Hirunya-Sooryabandara.png", name:"Hirunya Sooryabandara"}, {picture:"Manisha.png", name:"Manisha"},
    {picture:"MEV.png", name:"MEV"}, {picture:"Minuli-Sooryabandara.png", name:"Minuli Sooryabandara"}, {picture:"Natasha-Rajapaksa.png", name:"Natasha Rajapaksa"}, {picture:"Sam-G.png", name:"Sam G."},
    {picture:"Rashmi-Ratnasena.png", name:"Rashmi Ratnasena"}, {picture:"SANDAMINI-GUNAMUNI-2.png", name:"Sandamini Gunamini"}, {picture:"Sandamini-Gunamuni.png", name:"Sandamini Gunamuni"},
    {picture:"Sasha-Wijeratne.png", name:"Sasha Wijeratne"}, {picture:"Sashi.png", name:"Sashi"}, {picture:"Tarindiya.png", name:"Tarindiya"}, {picture:"Ujaini-Muralitharan.png", name:"Ujaini Muralitharan"},
    {picture:"Upani-Samarakoon.png", name:"Upani Samarakoon"}, {picture:"Anonone.png", name:"Anonymous"}, {picture:"Anontwo.png", name:"Anonymous"}, {picture:"Anonthree.png", name:"Anonymous"}];

    return (
        <Container className="topDoc">
            <Typography variant="h4">Childrens Corner</Typography>
            <br />
            <Typography variant="h6">Paintings</Typography>
            <br />
            <Typography variant="body1">These paintings were created by our children at Summer Event 2015.</Typography>
            <br />
            <CardCreator photoArray={imageArr} space={3}/>
        </Container>
    );
}

export default ChildrensCorner;