import Header from './components/Header'; 
import About from './components/About';
import Stack from './components/Stack';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AnimatedCursor from "react-animated-cursor"

import './App.css';

function App() {

  return (
    <>
      <Header />
      <section id='about'>
        <About />
      </section>
      <section id='stack'>
        <Stack />
      </section>
      <section id='portfolio'>
        <Portfolio />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color='193, 11, 111'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
      />
    </>
  );
}

export default App;
