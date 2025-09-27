import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import "../../styles/NavLayout.css";

function NavLayout() {
  return (
    <div className="main-layout-container">
      <div className="main-layout-header">
        <Header />
      </div>
      <div className="main-layout-content">
        <Outlet />
      </div>
    </div>
  );
}

export default NavLayout;
