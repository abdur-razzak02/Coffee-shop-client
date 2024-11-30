import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SubBanner from "./SubBanner";
import Banner from "./Banner";
import InstagramPhotos from "./InstagramPhotos";

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <InstagramPhotos></InstagramPhotos>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Main;