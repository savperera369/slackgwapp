import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ByLaws from './pages/ByLaws';
import Projects from './pages/Projects';
import Media from './pages/Media';
import ChildrensCorner from './pages/ChildrensCorner';
import BoardOfDirectors from './pages/BoardOfDirectors';
import Contact from './pages/Contact';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <img id="mainImg" src="https://www.tricitysrilanka.com/images/banner.jpg" alt="sri lanka"></img>
     <AppBar position="relative">
        <Toolbar className="appbar">
          <Typography variant="subtitle1"  style={{ marginRight: 16 }} color="white" noWrap>Home</Typography>
          <Typography variant="subtitle1" style={{ marginRight: 16 }} color="white" noWrap>About</Typography>
          <Typography variant="subtitle1" style={{ marginRight: 16 }} color="white" noWrap>Events</Typography>
          <Typography variant="subtitle1" style={{ marginRight: 16 }} color="white" noWrap>Services</Typography>
          <Typography variant="subtitle1" style={{ marginRight: 16 }} color="white" noWrap>Contact</Typography>
          <Typography variant="subtitle1" style={{ marginRight: 16 }} color="white" noWrap>Members</Typography>
          <Typography variant="subtitle1" style={{ marginRight: 16 }} color="white" noWrap>Photos/Videos</Typography>
        </Toolbar>
      </AppBar>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<About />} />
        <Route path='/board' element={<BoardOfDirectors />} />
        <Route path='/bylaws' element={<ByLaws />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/media' element={<Media />} />
        <Route path='/children' element={<ChildrensCorner />} />
        <Route path='/contact' element={<Contact />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
