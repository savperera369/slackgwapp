import React from 'react';
import '../index.css';
import slackForm from '../pdfs/SLACGKW_MEMBERSHIP_FORM.pdf';
import { Typography, Container, Card, CardContent, Link} from '@mui/material';

function BecomeAMember(){
    return (
        <Container className="topDoc">
            <Typography variant="h4">Become A Member</Typography>
            <Card sx={{margin: 2, backgroundColor:"#FCF6F5"}} variant="outlined">
                <CardContent>
                    <Link variant="body1" href={slackForm} target="_blank" rel="noreferrer">Membership Form</Link>
                </CardContent>
            </Card>
        </Container>
    );
}

export default BecomeAMember;