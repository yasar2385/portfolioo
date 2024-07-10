import React from 'react';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ContactForm from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <Hero />
      <About />
      <Skills />
      <ContactForm />
      <Footer />
      {/* </BrowserRouter> */}
      {/* Add other components (Projects, Skills, Experience, Contact, Footer) here */}
    </div>
  );
}

export default App;
