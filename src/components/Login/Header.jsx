import React from 'react'
import logo from '../../assets/logo.png'

import { useDispatch,useSelector } from 'react-redux';
import { togglePopup, toggleHomePoster, toggleGamePoster } from '../redux/action';

const Header = ({isLoginPage }) => {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector((state) => state.isPopupVisible);
  const isGamePosterVisible = useSelector((state) => state.isGamePosterVisible);
 

  const togglePopupHandler = () => {
    // Toggle visibility of the popup
    dispatch(togglePopup());

    // Toggle visibility of posters based on the current page
    if (isLoginPage) {
      dispatch(toggleGamePoster());
    } else {
      dispatch(toggleHomePoster());
    }
  };
 
  return (
    <div className='h-full bg-F6F6F9' >
      <div className="max-w-98 mx-auto px-4">
        <div className="flex justify-between items-center ">
          <div className="flex space-x-4 ">
            {/* Logo and title */}
            <div className="flex items-center ">
              <img 
                src={logo} 
                alt="Fizzy Games Logo" 
                className="h-10 w-22 mr-2 flex-shrink-0" 
              
              />

            </div>
          </div>

          {/* Settings icon */}
          <div className="flex items-center py-5 px-2">
            <button onClick={togglePopupHandler} >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_257)">
    <path d="M13.2937 2.19017e-06C13.6465 2.19017e-06 13.9621 0.219602 14.0809 0.548402L14.9281 2.8968C15.2317 2.9724 15.4921 3.048 15.7129 3.1272C15.9541 3.2136 16.2649 3.3444 16.6489 3.5232L18.6217 2.4792C18.7827 2.39389 18.9671 2.3631 19.1471 2.39144C19.3271 2.41978 19.4931 2.50574 19.6201 2.6364L21.3553 4.4304C21.5857 4.6692 21.6505 5.0184 21.5209 5.3232L20.5957 7.4916C20.7493 7.7736 20.8717 8.0148 20.9653 8.2164C21.0661 8.436 21.1909 8.7384 21.3397 9.1284L23.4961 10.0524C23.8201 10.1904 24.0205 10.5144 23.9989 10.8612L23.8405 13.3512C23.8296 13.513 23.7716 13.668 23.6734 13.797C23.5753 13.9261 23.4415 14.0235 23.2885 14.0772L21.2461 14.8032C21.1873 15.0852 21.1261 15.3264 21.0613 15.5304C20.9568 15.8455 20.8374 16.1554 20.7037 16.4592L21.7297 18.7272C21.8021 18.8866 21.8216 19.0649 21.7853 19.2361C21.749 19.4074 21.6589 19.5625 21.5281 19.6788L19.5769 21.4212C19.4484 21.5355 19.288 21.6077 19.1173 21.6283C18.9466 21.6489 18.7737 21.6168 18.6217 21.5364L16.6105 20.4708C16.2958 20.6374 15.9712 20.7845 15.6385 20.9112L14.7601 21.24L13.9801 23.4C13.9223 23.5582 13.818 23.6952 13.681 23.7931C13.5439 23.8909 13.3805 23.9451 13.2121 23.9484L10.9321 24C10.7592 24.0045 10.5892 23.9554 10.4455 23.8593C10.3017 23.7633 10.1912 23.625 10.1293 23.4636L9.21007 21.0312C8.89645 20.924 8.58593 20.808 8.27887 20.6832C8.02773 20.5745 7.78039 20.4572 7.53727 20.3316L5.25727 21.306C5.10704 21.3701 4.94142 21.3891 4.78056 21.3608C4.61971 21.3325 4.47056 21.258 4.35127 21.1464L2.66407 19.5636C2.53846 19.4463 2.45291 19.2924 2.41953 19.1238C2.38616 18.9552 2.40663 18.7803 2.47807 18.624L3.45847 16.488C3.32809 16.235 3.2072 15.9772 3.09607 15.7152C2.96636 15.3945 2.8463 15.0699 2.73607 14.742L0.588075 14.088C0.413476 14.0352 0.261188 13.9263 0.154862 13.7781C0.0485369 13.6299 -0.00587577 13.4507 7.4752e-05 13.2684L0.0840748 10.9632C0.0900538 10.8128 0.137039 10.6669 0.219948 10.5413C0.302858 10.4156 0.418537 10.315 0.554475 10.2504L2.80807 9.168C2.91247 8.7852 3.00367 8.4876 3.08407 8.2704C3.19728 7.9803 3.323 7.69523 3.46087 7.416L2.48407 5.352C2.40995 5.19526 2.38743 5.01905 2.41978 4.8487C2.45212 4.67836 2.53765 4.52266 2.66407 4.404L4.34887 2.8128C4.46698 2.70141 4.61476 2.62652 4.77443 2.59714C4.9341 2.56776 5.09885 2.58514 5.24887 2.6472L7.52647 3.588C7.77847 3.42 8.00647 3.2844 8.21287 3.1752C8.45887 3.0444 8.78767 2.9076 9.20167 2.76L9.99367 0.550802C10.0522 0.389124 10.1593 0.24946 10.3001 0.150879C10.441 0.0522992 10.6089 -0.000391501 10.7809 2.19017e-06H13.2937ZM12.0289 8.4228C10.0285 8.4228 8.40727 10.0248 8.40727 12.0024C8.40727 13.98 10.0285 15.5832 12.0289 15.5832C14.0281 15.5832 15.6493 13.98 15.6493 12.0024C15.6493 10.0248 14.0293 8.4228 12.0289 8.4228Z" fill="#018BFD"/>
  </g>
  <defs>
    <clipPath id="clip0_1_257">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
            </button>
          </div>
        </div>

        {isPopupVisible && (
      <div className="w-full h-full flex items-center bg-[#F2F3F8] bg-opacity-75 text-white p-4 rounded-lg shadow-lg transform transition-transform ease-out duration-500">
      <div className="w-full">
        <div className="flex mb-4">
          <button className="flex-grow bg-blue-500 text-white py-2 px-2 rounded-3xl mr-2 transition-transform ease-out duration-300 hover:scale-105">
            EN
          </button>
          <button className="flex-grow bg-white text-blue-500 py-2 px-2 rounded-3xl border border-[#B1B1B1] transition-transform ease-out duration-300 hover:scale-105">
            AM
          </button>
        </div>
        <div>
          <p className="text-[#5A5A5E] mb-2 transition-transform ease-out duration-300 hover:scale-105">Privacy</p>
          <p className="text-[#5A5A5E] mb-2 transition-transform ease-out duration-300 hover:scale-105">FAQ</p>
          <p className="text-[#5A5A5E] mb-2 transition-transform ease-out duration-300 hover:scale-105">Terms</p>
    
          {isGamePosterVisible && (
            <p
              className="text-[#5A5A5E] mb-2 transition-transform ease-out duration-300 hover:scale-105"
              onClick={() => console.log('Logout clicked')}
            >
              Logout
            </p>
          )}
        </div>
      </div>
    </div>
    
    
    
      
      )}
  
      </div>
      
 
    </div>
  )
}

export default Header