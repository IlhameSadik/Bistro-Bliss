import React from 'react';
import Navbar from './components/Navbar';
import Accueil from './components/Acceuil';
import About from './components/About';
import Dishes from './pages/Menu/Diches';
import Review from './components/Review';
import Contact from './pages/Contact/Contact';
import Foot from './components/Foot';

function App() {
  return (
    <div>
      <Navbar />
      <Accueil />
      <About />
      <Dishes />
      <Review />
      <Contact />
      <Foot />
    </div>
  );
}

export default App;
