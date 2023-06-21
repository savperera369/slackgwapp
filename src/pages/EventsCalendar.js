import React from 'react';
import '../index.css';
import { Typography, Container} from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


function EventsCalendar(){
    return(
        <Container className="topDoc">
            <Typography sx={{margin: 2}} align="center" variant="h4">Calendar</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar sx={{backgroundColor: "#FCF6F5", border: '1px solid'}} defaultValue={dayjs('2023-07-08')} readOnly />
            </LocalizationProvider>
        </Container>
    );
}

export default EventsCalendar;