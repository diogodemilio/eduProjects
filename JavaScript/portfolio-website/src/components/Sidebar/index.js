import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoD from "../../assets/images/logo-d.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";



<img
  alt="United States"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoD} alt="logo"/>
        <img className="sub-logo" src={LogoSubtitle} alt="Emílio"/>
      </Link>
      <ul className="language-select">
        <li>
          <img
            alt="Português"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg"
          />
        </li>
        <li>
          <img
            alt="English"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
          />
        </li>
      </ul>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul className="other-links">
        <li>
          <a
            href="https://www.linkedin.com/in/diogodemilio"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/diogodemilio"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;