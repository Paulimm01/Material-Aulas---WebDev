import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen p-6">
        <img src={Outlet} alt="Epa nenem"/>
        <Outlet/>
      </div>
    </div>
  );
}
