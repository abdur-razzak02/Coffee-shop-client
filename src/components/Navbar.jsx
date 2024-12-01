import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-navbg h-16 bg-center bg-cover bg-no-repeat gap-3 flex items-center">
            <div className="px-5 lg:px-0 lg:w-4/5 mx-auto flex justify-between items-center sm:text-2xl w-full">
            <Link to={'/'} className="flex items-center gap-2">
            <img src={'https://i.ibb.co.com/k2dx74d/logo1.png'} alt="logo" className="h-10 w-8 "/>
            <h1 className="text-white  font-rancho">Espresso Emporium</h1>
            </Link>
            <Link to={'/addCoffee'} className="text-white font-rancho">Add Coffee</Link>
            <Link to={'/login'} className="text-white  font-rancho">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;