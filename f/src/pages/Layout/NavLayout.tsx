import Header from "@/components/Header";
import { Outlet, useLocation } from "react-router-dom";
import "../../styles/NavLayout.css";

function NavLayout() {
  const CurrentPage = useLocation();
  return (
    <div className="main-layout-container">
      <div className={CurrentPage.pathname == "/chat" ? "active" : "main-layout-header"}>
        <Header />
      </div>
      <div className="main-layout-content">
        <Outlet />
      </div>
    </div>
  );
}

export default NavLayout;
