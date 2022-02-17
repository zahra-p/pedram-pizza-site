import React, { useState } from "react";
import Logo from '../../assets/pizzaLogo.png';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../../styles/Navbar.css';

function Navbar() {
   const [openLinks, setOpenLinks] = useState(false);
 const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks? "open" : "close"}>
        <img src={Logo} alt="Logo"/>
        <div className="hiddenLinks">
          <Link to="/contact"> تماس با ما </Link>
          <Link to="/about"> درباره ما </Link>
          <Link to="/menu"> منو </Link>
          <Link to="/"> خانه </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/contact"> تماس با ما</Link>
        <Link to="/about"> درباره ما</Link>
        <Link to="/menu"> منو</Link>
        <Link to="/"> خانه</Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon />
        </button>
        
      </div>
    </div>
  )
}

export default Navbar
