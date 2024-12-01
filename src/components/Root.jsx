import { Outlet } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";
import Copyright from "./Copyright";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-820px)]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Root;
