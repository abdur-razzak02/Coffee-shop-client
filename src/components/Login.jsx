import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="py-10 lg:py-20 px-5 md:px-0 bg-base-200 flex justify-center items-center">
          <div className="bg-white p-5 lg:p-10 rounded-lg shadow-lg max-w-sm w-full">
            <div className="relative mb-8">
              <svg className="absolute top-0 left-0 w-full h-40 text-blue-300 -z-10" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" fillOpacity="1" d="M0,128L1440,192L1440,320L0,320Z"></path>
              </svg>
              <h2 className="text-3xl font-semibold text-center text-coffee font-rancho">Login</h2>
            </div>
    
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="input input-bordered w-full mt-1"
                  placeholder="Enter your email"
                />
              </div>
    
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="input input-bordered w-full mt-1"
                  placeholder="Enter your password"
                />
              </div>
    
              <div className="flex justify-between mb-6">
                <div className="flex items-center">
                  <input type="checkbox" className="checkbox checkbox-primary w-4 h-4" />
                  <label htmlFor="remember" className="ml-1 text-sm text-gray-600">Remember me</label>
                </div>
                <Link className="text-sm text-blue-600 hover:text-blue-800">Forgot Password?</Link>
              </div>
    
              <button className="btn btn-primary w-full mb-4">Login</button>
    
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">Don't have an account? <Link to="/signup" className="text-blue-600 hover:text-blue-800">Sign up</Link></p>
              </div>
    
              <button className="btn btn-outline w-full flex items-center justify-center mb-4">
                <FaGoogle className="mr-2" /> Login with Google
              </button>
            </form>
          </div>
        </div>
      );
};

export default Login;