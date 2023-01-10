import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

function Layout() {
  return (
    <div className="bg-zinc-900 w-screen min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}
export default Layout;
