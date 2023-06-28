import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ByLaws from './pages/ByLaws';
import Projects from './pages/Projects';
import Media from './pages/Media';
import ChildrensCorner from './pages/ChildrensCorner';
import BoardOfDirectors from './pages/BoardOfDirectors';
import Contact from './pages/Contact';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import Links from './pages/Links';
import UpcomingEvents from './pages/UpcomingEvents';
import PastEvents from './pages/PastEvents';
import EventsCalendar from './pages/EventsCalendar';
import BecomeAMember from './pages/BecomeAMember';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="page-container">
    <BrowserRouter>
      <img id="mainImg" src="https://www.tricitysrilanka.com/images/banner.jpg" alt="sri lanka"></img>
     <ResponsiveNavbar />
     <Routes>
        <Route path='/' element={<div className="content-wrapper"><Home /></div>} />
        <Route path='/history' element={<div className="content-wrapper"><About /></div>} />
        <Route path='/board' element={<div className="content-wrapper"><BoardOfDirectors /></div>} />
        <Route path='/bylaws' element={<div className="content-wrapper"><ByLaws /></div>} />
        <Route path='/projects' element={<div className="content-wrapper"><Projects /></div>} />
        <Route path='/media' element={<Media />} />
        <Route path='/children' element={<div className="content-wrapper"><ChildrensCorner /></div>} />
        <Route path='/contact' element={<div className="content-wrapper"><Contact /></div>} />
        <Route path='/links' element={<div className="content-wrapper"><Links /></div>} />
        <Route path='/upcomingevents' element={<div className="content-wrapper"><UpcomingEvents /></div>} />
        <Route path='/pastevents' element={<div className="content-wrapper"><PastEvents /></div>} />
        <Route path='/eventscalendar' element={<div className="content-wrapper"><EventsCalendar /></div>} />
        <Route path='/becomemember' element={<div className="content-wrapper"><BecomeAMember /></div>} />
     </Routes>
     <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
