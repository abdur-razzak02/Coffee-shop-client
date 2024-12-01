import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-navbg h-20 flex justify-center items-center bg-center bg-cover bg-no-repeat gap-3">
            <img src={'https://i.ibb.co.com/k2dx74d/logo1.png'} alt="logo" className="h-10 w-8 "/>
            <h1 className="text-white text-2xl font-rancho">Espresso Emporium</h1>
            <Link to={'/addCoffee'} className="text-white text-2xl font-rancho pl-20">Add Coffee</Link>
        </div>
    );
};

export default Navbar;