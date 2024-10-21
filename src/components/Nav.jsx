import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <section id="nav">
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
      >
        HOME
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
      >
        PROJECTS
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
      >
        ABOUT ME
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
      >
        CONTACT
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
      >
        RESUME
      </NavLink>
    </section>
  );
};

export default Nav;
