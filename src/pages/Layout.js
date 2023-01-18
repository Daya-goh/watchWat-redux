import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

function Layout() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}
export default Layout;
