import React from 'react';
import bgimg from '../assets/img/Coffee-Background1.jpg';
import { Link } from 'react-router-dom';
import Aboutus from './Aboutus';


//make a style obj
const largetext = {
  fontSize: '3rem',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 4px #000000',
  fontFamily: 'cursive',
  textTransform: 'uppercase',
  letterSpacing: '0.2rem',

}
const ordernowbtn = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 4px #000000',
  fontFamily: 'cursive',
  textTransform: 'uppercase',
  letterSpacing: '0.2rem',
  backgroundColor: 'green',
  border: 'none',
  borderRadius: '0.5rem',

}

const style = {
    //set background img
    backgroundImage: `url(${bgimg})`,
    //set height
    height: '65vh',
    //set background size
    backgroundSize: 'cover',
    //set background position
    backgroundPosition: 'center',
    //set background repeat 

};
const Home = () => {
  return (
    <div>
        
      <header className="text-center text-white masthead" style={style}>
        <div className="masthead-content">
          <div className="container " style={{paddingTop:'10%'}}>
            <h1 className="masthead-heading  text-danger " style={largetext}>Try our Coffee Once</h1>
            <h2 className="masthead-subheading text-dark" style={largetext}>You'll love it till your grave!</h2><Link style={ordernowbtn} className="btn btn-primary active bg-success bg-gradient flex-row flex-grow-1 btn-xl  mt-5 " role="button" to="/menu">Order NOW!</Link>
          </div>
        </div>
      </header>

      <Aboutus />
    </div>
  )
}

export default Home
