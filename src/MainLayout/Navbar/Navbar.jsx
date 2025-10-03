// import { NavLink } from "react-router";
// import './Navbar.css'
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useEffect } from "react";
// import LunaraLogo from "/src/assets/images/Lunara.png";


// function Navbar({ cartCount }) {

//   useEffect(() => {
//     const handleScroll = () => {
//       const nav = document.querySelector('nav');
//       if (window.scrollY >900) { 
//         nav.classList.add('scrolled');
//       } else {
//         nav.classList.remove('scrolled');
//       }
//     }

//     window.addEventListener('scroll', handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll); 
//   };

//   }, []);

//   return (
//     <nav>
//       <div className="nav-logo">
//         <NavLink to="/" className="logo-link">
//           <img src={LunaraLogo} alt="luna"  className="lunaphoto" />
//         </NavLink>
//       </div>
//       <ul>
//         <li>
//           <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/findyourzodiac" className={({ isActive }) => isActive ? "active-link" : ""}>Find Your Zodiac</NavLink>
//         </li>
//         <li>
//           <NavLink to="/zodiacdetails" className={({ isActive }) => isActive ? "active-link" : ""}>Zodiac Details</NavLink>
//         </li>
//         <li>
//           <NavLink to="/compatibilitytest" className={({ isActive }) => isActive ? "active-link" : ""}>Compatibility Test</NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
//         </li>
//         <li>
//           <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
//         </li>
//         <li>
//           <NavLink to="/profile" className={({ isActive }) => isActive ? "active-link" : ""}>Profile</NavLink>
//         </li>
//         <li className="cart-link">
//           <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>
//             <AiOutlineShoppingCart size={24} />
//           </NavLink>
//           {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar;


import { NavLink } from "react-router";
import './Navbar.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi"; 
import { useEffect, useState } from "react";
import LunaraLogo from "/src/assets/images/Lunara.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const nav = document.querySelector('nav');
  //     if (window.scrollY > 900) {
  //       nav.classList.add('scrolled');
  //     } else {
  //       nav.classList.remove('scrolled');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav>
      <div className="nav-logo">
        <NavLink to="/" className="logo-link">
          <img src={LunaraLogo} alt="luna" className="lunaphoto" />
        </NavLink>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
        <li><NavLink to="/findyourzodiac" className={({ isActive }) => isActive ? "active-link" : ""}>Find Your Zodiac</NavLink></li>
        <li><NavLink to="/zodiacdetails" className={({ isActive }) => isActive ? "active-link" : ""}>Zodiac Details</NavLink></li>
        <li><NavLink to="/compatibilitytest" className={({ isActive }) => isActive ? "active-link" : ""}>Compatibility Test</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
        <li><NavLink to="/profile" className={({ isActive }) => isActive ? "active-link" : ""}>Profile</NavLink></li>
        <li><NavLink to="/shop" className={({ isActive }) => isActive ? "active-link" : ""}>Shop</NavLink></li>
        <li className="cart-link">
          <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>
            <AiOutlineShoppingCart size={24} />
          </NavLink>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
