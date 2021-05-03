import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Summary from './components/Summary';
import Portfolio from './components/Portfolio'
import Footer from './components/Footer';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Navigation />
      <div className='App'>
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </div>
      <Home />
      <AboutMe />
      <Summary />
      <Portfolio />
      <Contact />
      <Footer />
    </Router>
  );
}
export default App;


