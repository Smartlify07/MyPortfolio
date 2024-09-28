import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex bg-[#111] shadow-sm backdrop-blur-sm  rounded-md text-white px-6 py-2 items-center gap-3 font-raleway text-base font-normal">
      <NavLink to={"/"}>Home</NavLink>

      <NavLink to={"#projects"}>Projects</NavLink>
    </div>
  );
};

export default NavLinks;
