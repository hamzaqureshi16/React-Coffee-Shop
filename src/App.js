import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import TableReservationForm from './components/TableReservationForm';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Menu from './components/Menu';

function App() {
  return (
    <div className=' bg-dark' >
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/home' index element={<Home/>}></Route>
        <Route path='/reservation' element={<TableReservationForm/>}></Route>
        <Route path='/about' element={<Aboutus/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
      </Routes>
       
      
    </div>
  );
}

export default App;
