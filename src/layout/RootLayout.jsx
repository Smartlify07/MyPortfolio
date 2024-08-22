import { Outlet } from "react-router";
import Navbar from "../ui/Navbar/Navbar";

const RootLayout = () => {
  return (
    <main className="bg-[#fdfdfd]">
      <Navbar />

      <Outlet />
    </main>
  );
};

export default RootLayout;
