import Hero from './components/Hero';
import RSVP from './components/RSVP';
import Gifts from './components/Gifts';
import Schedule from './components/Schedule';
import Accommodation from './components/Accommodation';

import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <RSVP />
      <Gifts />
      <Schedule />
      <Accommodation />
    </div>
  );
}

export default App;
