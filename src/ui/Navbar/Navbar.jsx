import NavLinks from "./nav-links";
const Navbar = () => {
  return (
    <nav className="py-6 flex font-raleway items-center justify-center">
      <div className="lg:w-10/12 flex items-center justify-center ">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
