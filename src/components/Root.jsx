import { Outlet } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";
import Copyright from "./Copyright";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Root;
