import { NavLink } from 'react-router-dom';
import './navigation.css';
import logo from '../../images/logos/logo-bw.png';

const Nav = () => (
  <header className="nav-bar">
    <nav className="nav">
      <div className="avatar-div">
        <NavLink to="#">
          <img src={logo} alt="User" />
        </NavLink>
        <h1 className="logo">
          <NavLink to="/">Space Travelers&apos; Hub</NavLink>
        </h1>
      </div>
      <div className="nav-link">
        <ul>
          <li><NavLink exact activeClassName="active" to="rockets">Rockets</NavLink></li>
          <li><NavLink activeClassName="active" to="Missions">Missions</NavLink></li>
          <li><NavLink activeClassName="active" to="profile">My Profile</NavLink></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Nav;
