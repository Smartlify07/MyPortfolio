import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-3 font-raleway text-base font-normal">
      <NavLink to={"/"}>Home</NavLink>

      <NavLink>Projects</NavLink>
    </ul>
  );
};

export default NavLinks;
