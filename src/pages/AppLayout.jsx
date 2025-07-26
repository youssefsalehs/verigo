import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <div className="bg-stone-800 h-screen overflow-y-auto">
      <Navbar />
      <div className="h-[90%]">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
