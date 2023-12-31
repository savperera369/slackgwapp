import React from 'react';
import '../index.css';
import { Typography, Container, Card, Button} from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useNavigate } from 'react-router-dom';


function EventsCalendar(){
    const navigate = useNavigate();
    return(
        <Container className="topDoc">
            <Typography sx={{margin: 2}} align="center" variant="h4">Calendar</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar sx={{backgroundColor: "#FCF6F5", border: '1px solid'}} defaultValue={dayjs('2023-07-08')} readOnly />
            </LocalizationProvider>
            <Card sx={{backgroundColor:"#FCF6F5", margin: 2, padding: 2}} variant="outlined">
                <Typography align="center" variant="h6">Key Events</Typography>
                <Button color="primary" onClick={()=>navigate("/upcomingevents")}>1. July 8th, 2023: Summer Event</Button>
            </Card>
        </Container>
    );
}

export default EventsCalendar;