import React from 'react'
import Header from './Header'
import GamePoster from '../GamePoster/GamePoster';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const isGamePosterVisible = useSelector((state) => state.isGamePosterVisible);
  const navigate = useNavigate();

  const handleLogin = () => {
  
    navigate('/home');
  };

  

  return (
    <div className="max-w-md mx-auto p-4 relative  ">
      <Header isLoginPage={true} />
       {isGamePosterVisible  && <GamePoster/>} 

     

  
    {/* Login Section */}
    <div className="mb-8 mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

      <div className="mb-4">
  <label htmlFor="phoneNumber" className="text-sm mb-1 block text-gray-500">
    Phone Number
  </label>
  <div className="relative flex items-center">
    <span className="absolute top-1/2 transform -translate-y-1/2 left-2 pr-7">+251</span>
    <input
      type="text"
      id="phoneNumber"
      name="phoneNumber"
      className="border p-2 w-full pl-16 bg-zinc-100 rounded-lg outline-none" 
      placeholder="Your phone"
      required
    />
  </div>
</div>


      <div className="mb-4">
        <label htmlFor="code" className="text-sm mb-1 block text-gray-500">
          Code
        </label>
        <div className="relative">
          <input
            type="text"
            id="code"
            name="code"
            className="border p-2 w-full pr-10 bg-zinc-100 rounded-lg outline-none"
            required
          />
          <span
            className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer text-blue-500"
            onClick={() => console.log('Get Code clicked')}
          >
            Get Code
          </span>
        </div>
        <p className="text-right text-sm text-blue-500 mt-1 ">Didn't get the code?</p>
      </div>

     
       
      
          <button 
           onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg">
            Login
          </button>
      
    </div>

    {/* Subscribe Section */}
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-2 text-center">Subscribe Now</h2>

      <div className="flex justify-center items-center space-x-4 mb-4">
        <button className="flex-1 text-white py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400">
          lorem ipsum
        </button>
        <button className=" flex-1 text-white py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400">
          lorem ipsum
        </button>
      </div>
      <div className="w-1/2 mx-auto mb-2 flex">
        <div className="bg-blue-500 h-1 w-1/2"></div>
        <div className="bg-gray-300 h-1 w-1/2"></div>
      </div>

      <button className=" bg-white text-blue-500 mt-8 py-2 px-4 w-full rounded-lg border border-2 border-blue-500">
        Click to SMS
      </button>
    </div>

    {/* Links Section */}
    <div className="flex items-center justify-center space-x-2">
      <a href="#" className="text-gray-500">Terms&conditions</a>
      <span className="text-gray-500">|</span>
      <a href="#" className="text-gray-500">Privacy Policy</a>
      <span className="text-gray-500">|</span>
      <a href="#" className="text-gray-500">FAQs</a>
    </div>
   
  </div>
  )
}

export default LoginScreen