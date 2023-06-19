import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ByLaws from './pages/ByLaws';
import Projects from './pages/Projects';
import Media from './pages/Media';
import ChildrensCorner from './pages/ChildrensCorner';
import BoardOfDirectors from './pages/BoardOfDirectors';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Links from './pages/Links';
import UpcomingEvents from './pages/UpcomingEvents';
import PastEvents from './pages/PastEvents';
import EventsCalendar from './pages/EventsCalendar';
import BecomeAMember from './pages/BecomeAMember';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <img id="mainImg" src="https://www.tricitysrilanka.com/images/banner.jpg" alt="sri lanka"></img>
     <Navbar />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<About />} />
        <Route path='/board' element={<BoardOfDirectors />} />
        <Route path='/bylaws' element={<ByLaws />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/media' element={<Media />} />
        <Route path='/children' element={<ChildrensCorner />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/links' element={<Links />} />
        <Route path='/upcomingevents' element={<UpcomingEvents />} />
        <Route path='/pastevents' element={<PastEvents />} />
        <Route path='/eventscalendar' element={<EventsCalendar />} />
        <Route path='/becomemember' element={<BecomeAMember />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
