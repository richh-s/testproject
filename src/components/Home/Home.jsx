import React from 'react';
import '../../style.css'
import kuku from '../../assets/kuku.png'
import candyworld from '../../assets/candyworld.png'
import monesto from '../../assets/monesto.png'
import vill from '../../assets/vill.png'
import troy from '../../assets/troy.png'
import medival from '../../assets/medival.png'
import alien from '../../assets/alien.png'
import GameCarousel from './GameCarousel';
import Header from '../Login/Header';
import HomePoster from './HomePoster';
import { useSelector } from 'react-redux';

const GamesOfTheDay = [
  { name: 'Candy World', description: 'come and have a try', imageUrl: candyworld},
  { name: 'Kuku', description: 'come and have a try', imageUrl: kuku },
  { name: 'monesto', description: 'come and have a try', imageUrl: monesto },
  { name: 'vill', description: 'come and have a try', imageUrl: vill },
  { name: 'troy', description: 'come and have a try', imageUrl: troy },
  { name: 'medival', description: 'come and have a try', imageUrl: medival },
  { name: 'alien', description: 'come and have a try', imageUrl: alien },
  // ... other games
];

const Home = () => {

// redux code
const isHomePosterVisible = useSelector((state) => state.isHomePosterVisible);
  
  return (
    <div className="p-4">
      {/* Genres Section */}
      <Header isLoginPage={false}/>
     
      {isHomePosterVisible && <HomePoster />} 
      <div className="flex justify-center items-center h-24 mt-20">
      <GameCarousel />
    </div>
      
      {/* Games of the Day Section */}
      <div>
        <h2 className="text-xl font-bold mb-4 mt-16">Games of the day</h2>
        {GamesOfTheDay.map((game, index) => (
          <div key={index} className="flex items-center mb-4">
            <img className="w-12 h-12 object-cover rounded-full" src={game.imageUrl} alt={game.name} />
            <div className="ml-4">
              <p className="text-lg font-semibold">{game.name}</p>
              <p className="text-sm text-gray-600">{game.description}</p>
            </div>
            <button className="ml-auto bg-[#DBE6F0] hover:bg-blue-600 text-blue-500 font-xl py-2 px-4 rounded">
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;