import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import TableReservationForm from './components/TableReservationForm';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className=' bg-dark' >
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/home' element={<h1>Home</h1>}></Route>
        <Route path='/reservation' element={<TableReservationForm/>}></Route>
      </Routes>
       
      
    </div>
  );
}

export default App;
