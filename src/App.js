import './css/App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className='mid-section' >
        <Outlet/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
