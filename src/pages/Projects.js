import React from 'react';
import '../index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Typography, Container, Stack, Link, Card, CardContent} from '@mui/material';

function Projects () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Container className="topDoc">
            <Typography variant="h4">Projects</Typography>
            <br />
            <Stack spacing={3}>
                <Card variant="outlined" sx={{backgroundColor:"#FCF6F5"}}>
                    <CardContent>
                        <Typography align="center" variant="h5">IDP Project (2010)</Typography>
                        <ul>
                            <li><Typography variant="body1">Distribution of books to schools in war effected areas in Sri Lanka.</Typography></li>
                            <li><Typography variant="body1">Year: 2009/2010</Typography></li>
                            <li><Typography variant="body1">Funds: 50% of generated profit of the year 2009/2010 or equal to CAD 800/-</Typography></li>
                            <li><Typography variant="body1"><Link href="https://www.tricitysrilanka.com/pages/pdfs/IDP_project_2009.pdf">Download Project Report</Link></Typography></li>
                        </ul>
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{backgroundColor:"#FCF6F5"}}>
                    <CardContent>
                        <Typography align="center" variant="h5">Ranaviru Project (2010)</Typography>
                        <ul>
                            <li><Typography variant="body1">Distribution of commodes to disabled Soldiers in Sri Lanka.</Typography></li>
                            <li><Typography variant="body1">Year: 2009/2010</Typography></li>
                            <li><Typography variant="body1">Funds: 50% of generated profit of the year 2009/2010 or equal to CAD 800/-</Typography></li>
                            <li><Typography variant="body1">Co-ordinators in Sri Lanka : Sri Lanka Army Rehabilitation Centre, Ragama, Sri Lanka (Ranaviru Sevana); Capt. Rohan Attipola; and Nishantha Vilathgamuwa</Typography></li>
                            <li><Typography variant="body1"><Link href="https://www.tricitysrilanka.com/pages/pdfs/Ranaviru_project_2009.pdf">Download Project Report</Link></Typography></li>
                        </ul>
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{backgroundColor:"#FCF6F5"}}>
                    <CardContent>
                        <Typography align="center" variant="h5">Fundraising Event for Haiti (2010)</Typography>
                        <ul>
                            <li><Typography variant="body1">Held on February 20th, 2010.</Typography></li>
                            <li><Typography variant="body1">By the Sri Lankan Association of Cambridge, Guelph, Kitchener and Waterloo at the Pommaviharam Buddhist Temple, Kitchener.</Typography></li>
                            <li><Typography variant="body1">On February 20th a Fundraising Event for Haiti was held at the Pommaviharam Buddhist Temple in Kitchener to help the victims of the Earthquake in Haiti. 
                            This was officiated by Venerable B. Devamitra for the Sri Lankan community at the Temple.</Typography></li>
                            <li><Typography variant="body1">The Event commenced at 4.00 PM with attendance from the Sri Lankan community of Cambridge, Guelph, Kitchener and Waterloo. 
                            The Event was organized by the Sri Lankan Association of Cambridge, Guelph, Kitchener and Waterloo. This was the brain child of Sriyanie Moderagamage, Vice President and Padmini Passaperuma, Treasurer both of Waterloo SLCGKW. 
                            The crowd that attended was overwhelming and the support for Haiti was very impressive.</Typography></li>
                            <li><Typography variant="body1">The Fundraising Event was commenced by Venerable B. Devamitra who gave his blessing and followed by an update by the Host Anthony Bernard, who thanked the Priest and the committee of the SLCGKW along with all those that came to support this Event. 
                            This was followed with a Pot-Luck Dinner. A Bake Sale and Silent Auction were conducted to complement the Fundraising Event with many prizes. 
                            A total of $1,545 was collected for Haiti. This money was sent through the International Red Cross for the people of Haiti.</Typography></li>
                            <li><Typography variant="body1">Check for CAD$ 1,545 was presented to Red Cross by the president, Victor Rohitha Perera.</Typography></li>
                        </ul>
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{backgroundColor:"#FCF6F5"}}>
                   <CardContent>
                        <Typography align="center" variant="h5">Fundraising for the Flood (2004)</Typography>
                        <ul>
                            <li><Typography variant="body1">Supporting the victims of 2003 Flood.</Typography></li>
                            <li><Typography variant="body1">Year: 2003/2004</Typography></li>
                            <li><Typography variant="body1">Funds: CAD 475/- worth of funds and 12 crates of cloths, shoes, and toys.</Typography></li>
                            <li><Typography variant="body1"><Link href="https://www.tricitysrilanka.com/pages/pdfs/project_flood_2004.pdf">Download Project Report</Link></Typography></li>
                        </ul>
                   </CardContent>
                </Card>
                <Card variant="outlined" sx={{backgroundColor:"#FCF6F5"}}>
                    <CardContent>
                        <Typography align="center" variant="h5">Fundraising for Tsunami Victims (2004)</Typography>
                        <ul>
                            <li><Typography variant="body1">Supporting victims of 2004 Boxing day Tsunami</Typography></li>
                            <li><Typography variant="body1">Year: 2003/2004</Typography></li>
                            <li><Typography variant="body1">Funds: CAD 15,024/- worth of funds donated for the center for development facilitation.</Typography></li>
                            <li><Typography variant="body1"><Link href="https://www.tricitysrilanka.com/pages/pdfs/tsunami_project_2005.pdf">Download Project Report</Link></Typography></li>
                        </ul>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
    );
}

export default Projects;