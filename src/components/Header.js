import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <div>
      <div className="logo" />
      <div className="title">Space Travelers&apos; Hub</div>
    </div>
    <ul>
      <li><NavLink className="links" to="/">Rockets</NavLink></li>
      <li><NavLink className="links" to="/Missions">Missions</NavLink></li>
      <div className="line" />
      <li><NavLink className="links" to="/Profile">Profile</NavLink></li>
    </ul>
  </nav>
);

export default Header;
