import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Servicesheader from './components/Serviceheader'
import ServiceList from './components/ServiceList';
function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Services/>
      <div className='serviceHeaders'>
          <Servicesheader title='Book showings with little effort' body='Lay back and let our AI assitant interact with potential clients, learn their likes and dislikes, and eventually book showings for you'/>
          <Servicesheader title='Always implement the tactics you want' body='With the immense time and efficiency gained using AI, see all your ambitious plans come to fruition'/>
          <Servicesheader title='Stay on top of real estate technology' body='With us behind your back, you will be at the forefront of technology when it comes to real estate'/>
      </div>
      <ServiceList></ServiceList>
    </div>
  );
}

export default App;
