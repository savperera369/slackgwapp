import React from 'react';
import '../index.css';
import { Link, Stack, Typography, Container } from '@mui/material';

function Links() {
    return (
        <Container className="topDoc">
            <Typography variant="h4">Links</Typography>
            <br />
            <Link component="button" variant="body1" onClick={() => window.open("http://www.torontoslcg.org/")}>Consulate General of Sri Lanka in Toronto</Link>
            <br />
            <Link component="button" variant="body1" onClick={() => window.open("http://www.torontoslcg.org/ottawa2/")}>Sri Lankan High Commission - Ottawa</Link>
            <br />
            <Link component="button" variant="body1" onClick={() => window.open("https://www.canadainternational.gc.ca/sri_lanka/")}>Canadian High Commission - Sri Lanka</Link>
            <br />
            <Link component="button" variant="body1" onClick={() => window.open("https://www.toronto.ca.emb-japan.go.jp/itprtop_en/index.html")}>Japanese Consulate General - Toronto</Link>
            <br />
            <Link component="button" variant="body1" onClick={() => window.open("https://www.gov.uk/world/canada")}>British High Commission - Ottawa</Link>
            <br />
            <Link component="button" variant="body1" onClick={() => window.open("https://ca.usembassy.gov/embassy-consulates/toronto/")}>US Consulate General - Toronto</Link>
            <br />
            <Link component="button" variant="body1" onClick={() => window.open("https://www.cic.gc.ca/")}>Citizenship and Immigration Canada</Link>
        </Container>
    );
}

export default Links;