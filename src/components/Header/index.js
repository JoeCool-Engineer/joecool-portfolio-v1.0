import React from 'react'
import Nav from '../Nav';
import headerImg from '../../assets/cover/roboticEng.jpg'
import './style.css';

// To see the properties of the headers and see how we came about destructoring 
// const Header = (props) => {;
// console.log(props);

const Header = ({pages, currentPage, setCurrentPage}) => {
// background image to be provided later
  return (<header className='container-fluid'>
    <img src={headerImg} alt='Robotic-Engineering pattern' />
    <div className='container d-lg-flex justify-content-lg-between'>
      <h1 className='text-center'>JoeCool Engineering</h1>
      <Nav 
      pages={ pages } 
      currentPage={ currentPage } 
      setCurrentPage={ setCurrentPage } />
    </div>
  </header>)
};

export default Header;