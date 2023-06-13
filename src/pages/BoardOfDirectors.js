import React from 'react';
import '../index.css';
import { Typography, Container, Grid} from '@mui/material';
import List from '../components/List';

function BoardOfDirectors() {
    const bodTwentyTwo = ["Samith Waidyathilake - President", "Jeevani Fernando - Vice President (Cambridge & Guelph)", "Kolitha Jayasekera - Vice President (Kitchener & Waterloo)",
    "Senara Cooray - Secretary", "Renuka Shanmuganathan - Assistant Secretary", "Kamal Karunagoda - Treasurer", "Bathiya De Silva - Director",
    "Dishna Totawattage - Director", "Eranjeeva Weragama - Director", "Mehraj Thahir - Director", "Sampath Ranaweera - Immediate Past President"];

    const bodSeventeen = ["Samith Waidyathilake - President", "Jeevani Fernando - Vice President (Cambridge & Guelph)", "Kasun Karunagoda - Vice President(Kitchener & Waterloo)",
    "Renuka Shanmuganathan - Secretary", "Bathiya De Silva - Treasurer", "Jeewan Gamage - Immediate Past President", "Agit Ranatunga  - Director",
    "Anupama Miskin  - Director", "Darshi Sooriyabandara  - Director", "Devni Gunamuni - Director", "Dishna Totawattage  - Director", "Jayaratne Gunamuni  - Director",
    "Poorna Jayawardena  - Director", "Kamal Karunagoda - Immediate Past President"];

    const bodFifteen = ["Priyantha Kulasekera - President", "Agit Ranatunga - Vice President (Kitchener & Waterloo)", "Ignasious Selliah - Vice President(Kitchener & Waterloo)",
    "Bhamini Jeyaraman - Treasurer", "Jayaratne Gunamuni - Secretary", "Susantha Jayasundara - Assistant Secretary", "Rohan Perera - Assistant Treasurer",
    "Ahilan Jeyaraman -  Director", "Renuka Karunagoda - Director", "Lalith Kottachchi - Director", "Chanaka Ratnasena - Director", "Subasha Wickramarachchi - Director",
    "Anthony Bernard - IPP"];

    const bodFourteen = ["Sriyani Modaragamage - President", "Rohan Perera - Vice President (Cambridge & Guelph)", "Subodha Gunawardene - Vice President (Kitchener & Waterloo)",
    "Judy Botejue - Secretary", "Amila Pradeep - Treasurer", "Nimal Fernando - Assistant Secretary", "Kamal Karunagoda - Assistant Treasurer",
    "Anpalakan Balasubramaniyam - Director", "Carol Bernard - Director", "Jayaratne Gunamuni - Director", "Asela Rupasinghe - Director", "Himali De Silva - Director",
    "Priyantha Kulasekera - IPP"];

    const bodTwelve = ["Priyantha Kulasekera - President", "Sriyani Moderagamage - IPP", "Indika Ranasinghe - Vice President(Kitchener & Waterloo)",
    "Anpalakan Balasubramaniyam - Vice President(Cambridge & Guelph)", "Nimal Fernando - Secretary", "Yoganathan Selliah - Treasurer", "Anupama Miskin - Assistant Secretary",
    "Gihan Sooriyabandara - Assistant Treasurer", "Wasantha Witahachchi - Director", "Subodha Gunawardene - Director", "Agit Ranatunge - Director", "Roshan Wickremaratne - Director",
    "Grace Perera - Director"];

    const bodEleven = ["Sriyani Moderagamage - President", "Yasantha Nawaratne - IPP", "Indika Ranasinghe - Vice President(Kitchener & Waterloo)",
    "Priyantha Kulasekera - Vice President(Cambridge & Guelph)", "Dhammika Perera - Secretary", "Yoganathan Selliah - Treasurer", "Nimal Fernando - Assistant Secretary",
    "Gishan Perera - Director", "Gihan Sooriyabandara - Director", "Subodha Gunawardene - Director", "Agit Ranatunge - Director", "Mehraj Thahir - Director",
    "Poornadharshika Sooriyabandara - Director"];

    const bodTen = ["Yasantha Nawaratne - President", "Victor Rohitha Perera - IPP", "Rohan Perera - Secretary",
    "Indika Ranasinghe - Treasurer", "Gayasri Hapugalle - Assistant Secretary", "Lloyd Fernando - Assistant Treasurer", "Asoka Amaratunge - Director",
    "Subodha Gunawardene - Director", "Dhammika Perera - Director", "Samith Punchihewa - Director", "Gishan Perera - Director", "Priyantha Kulasekera - Director"];

    return (
        <Container className="topDoc">
           <Typography variant="h4">
                 Board of Directors
            </Typography>
            <br />
            <Grid container spacing={2}>
               <Grid item xs={6}>
                    <Typography align="center" variant="h6">2022/2023</Typography>
                    <List inputArr={bodTwentyTwo}/>       
               </Grid>
               <Grid item xs={6}>
                    <Typography align="center" variant="h6">2017/2018</Typography>
                    <List inputArr={bodSeventeen}/>
               </Grid>
               <Grid item xs={6}>
                     <Typography align="center" variant="h6">2015/2016</Typography>
                    <List inputArr={bodFifteen}/>         
               </Grid>
               <Grid item xs={6}>
                    <Typography align="center" variant="h6">2013/2014</Typography>
                    <List inputArr={bodFourteen}/>   
               </Grid>
               <Grid item xs={6}>
                    <Typography align="center" variant="h6">2012/2013</Typography>
                    <List inputArr={bodTwelve}/>   
               </Grid>
               <Grid item xs={6}>
                    <Typography align="center" variant="h6">2011/2012</Typography>
                    <List inputArr={bodEleven}/>   
               </Grid>
               <Grid item xs={6}>
                    <Typography align="center" variant="h6">2010/2011</Typography>
                    <List inputArr={bodTen}/>   
               </Grid>
            </Grid>
        </Container>
    );
}

export default BoardOfDirectors;