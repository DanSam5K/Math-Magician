import React from 'react';

const Header = () => (
  <div className="container">
    <h1 className="title">Math Magician</h1>
    <nav className="Nav">
      <ul className="flex">
        <li className="link">
          {/* <Link className="link" to="/Home">Home</Link> */}
        </li>
        <li className="link">
          {/* <Link className="link" to="/Calculator">Calculator</Link> */}
        </li>
        <li className="link">
          <Link className="link" to="/Quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
