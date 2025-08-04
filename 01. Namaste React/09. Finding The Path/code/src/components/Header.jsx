import { useEffect, useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    console.log("useEfect in Header");
  },[])

  // console.log("Render");
  
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)} className="logout">
            Logout
          </button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
