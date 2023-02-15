import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import TableReservationForm from './components/TableReservationForm';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Contactus from './components/Contactus';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Cart from './components/Cart';




function App() {
  const [LoggedIn,setLoggedIn] = useState(false);
  const [UserName,setUserName] = useState('');  
  const navigate = useNavigate();

const handleLogin = (username) => {
  setLoggedIn(true);
  setUserName(username);
  navigate('/home');
}

const handleLogout = () => {
  setLoggedIn(false);
  setUserName('');
 
}
  return (
    <div className=' bg-dark' >
      <Navbar isLoggedIn = {LoggedIn} UserName={UserName} logout = {handleLogout}></Navbar>
      
      <Routes>
        <Route path='/home' index element={<Home/>}></Route>
        <Route path='/reservation' element={<TableReservationForm/>}></Route>
        <Route path='/about' element={<Aboutus/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/contact' element={<Contactus/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/login' element={<LoginForm login = {handleLogin} />}></Route>
        <Route path='/signup' element={<SignUpForm/>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
       
      
    </div>
  );
}

export default App;
