import React from 'react';
import { Link } from "react-router-dom";

 const Header = () => {
    return (
        <div className="headerContainer">
            <h1 className="Title">Math Magicians</h1>
            <nav className="Nav">
            <ul className="flex">
              <li>
                <Link className="link" to="/Home">Home</Link>
              </li>
              <li>
                <Link className="link" to="/Calculator">Calculator</Link>
              </li>
              <li>
                <Link className="link" to="/Quote">Quote</Link>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default Header;