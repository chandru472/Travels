import React from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Book from './Components/Book';
import Destinations from './Components/Destinations';
import Flex from './Components/Flex';
import Cancel from './Components/Cancel';
import Packages from './Components/Packages';
import Attractions from './Components/Attractions';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Emty from './Components/Emty';



const App = () =>
{
  return(
    <BrowserRouter>
      <Navbar  />
      <Emty/>
      <Main />
      <Book />
      <Flex />
      <Destinations />
      <Cancel />
      <Packages />
      <Attractions />
      <Footer />
    </BrowserRouter>
  )
}

export default App;