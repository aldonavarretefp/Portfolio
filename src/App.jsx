import { useState} from 'react';


import TopBar from './components/TopBar/TopBar';
import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Menu from './components/Menu/Menu';
import  Skills  from './components/Skills/Skills';


import "./app.scss";



function App() {
  const [isOpen, setOpen] = useState(false)

  
  return (
    <div className="App">
      <TopBar isOpen={isOpen} setOpen={setOpen}/>
      <Menu isOpen={isOpen}  setOpen={setOpen}/>
      <main>
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Skills/>
          <Contact/>
        </div>
      </main>
    </div>
  );
}

export default App;
