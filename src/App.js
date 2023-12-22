import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Servicesheader from './components/Serviceheader'

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Services/>
      <div className='serviceHeaders'>
        <Servicesheader title='Book showings with little effort' body='Lay back and let our AI assitant interact with potential clients, learn their likes and dislikes, and eventually book showings for you'/>
        <Servicesheader title='Book showings with little effort' body='Lay back and let our AI assitant interact with potential clients, learn their likes and dislikes, and eventually book showings for you'/>
        <Servicesheader title='Book showings with little effort' body='Lay back and let our AI assitant interact with potential clients, learn their likes and dislikes, and eventually book showings for you'/>
      </div>
    </div>
  );
}

export default App;
