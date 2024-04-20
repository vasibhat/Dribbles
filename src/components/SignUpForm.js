import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/profile');
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-4/12">
        <img src="https://cdn.dribbble.com/users/76454/screenshots/6592185/001_4x.png?resize=1000x750&vertical=center" alt="Background" className="w-full h-full object-cover" />
      </div>
      
      <div className="w-full lg:w-8/12 flex flex-col justify-center items-center bg-white">  
        <h2 className="text-3xl font-bold mb-4 ">Sign Up to Dribble</h2>
        <form className="rounded px-8 pt-6 pb-8 mb-4 w-full lg:w-3/4"> 
          <div className="mb-4 flex flex-col lg:flex-row justify-start">
            <div className="w-full lg:w-3/12 lg:mr-2"> 
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
            </div>
            <div className="w-full lg:w-4/12 lg:ml-2"> 
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full lg:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="" /> {/* Decreased width for desktop size */}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full lg:w-3/5 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="6+ characters" /> {/* Decreased width for desktop size */}
          </div>
          
          <p>Creating an account means you're okay with our,</p>
          <a href="/" className="text-sm text-pink-400 hover:underline focus:outline-none">
            Terms of Service,Privacy Policy
          </a>
          <p> and our default </p>
          <a href="/" className="text-sm text-pink-400 hover:underline focus:outline-none">
            Notification Setings
          </a>
          <div className="flex items-center justify-center lg:justify-start mt-4">
            <button onClick={handleCreateAccount} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
