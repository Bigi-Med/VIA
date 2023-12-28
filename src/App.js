import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Servicesheader from './components/Serviceheader'
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Services/>
      <div className='serviceHeaders'>
          <Servicesheader body='AI assitant available 24/7 // Impress your leads with immediate responses // Match your clients preferences with available properties // Send personnalized follow up emails and SMS // Book showings for you based on available properties // Keep in touch with already acquired clients to expand your network'/>
      </div>
      <div className='divider'></div>
      <About></About>
      <Contact></Contact>
    </div>
    
  );
}

export default App;
