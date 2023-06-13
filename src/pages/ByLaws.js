import React from 'react';
import '../index.css';
import { Typography, Container, Link} from '@mui/material';

function ByLaws () {
    return (
        <Container className="topDoc">
            <Typography variant="h4">By Laws</Typography>
            <br />
            <Typography variant="body1"><Link href="https://www.tricitysrilanka.com/pages/pdfs/by_laws.pdf">Download a Copy of the Bylaws</Link></Typography>
        </Container>
    );
}

export default ByLaws;