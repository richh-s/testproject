// GameCarousel.js
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import poster3 from '../../assets/poster3.png';
import poster4 from '../../assets/poster4.png';
import poster5 from '../../assets/poster5.png';
import poster6 from '../../assets/poster6.png';
import poster7 from '../../assets/poster7.png';

const genres = [
  {
    name: 'Strategy Games',
    imageUrl: poster3,
  },
  {
    name: 'Car Games',
    imageUrl: poster4,
  },
  {
    name: 'Adventure Games',
    imageUrl: poster5,
  },
  {
    name: 'Pirate Games',
    imageUrl: poster6,
  },
  {
    name: 'Zombie Games',
    imageUrl: poster7,
  },
  // ... add more genres as needed
];

const GameCarousel = () => {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  const handleClick = async () => {
    const nextIndex = (index + 3) % genres.length;
    setIndex(nextIndex);
    await controls.start({ x: `-${nextIndex * (100 / genres.length)}%` });
  };

  const handleBackClick = async () => {
    const prevIndex = (index - 3 + genres.length) % genres.length;
    setIndex(prevIndex);
    await controls.start({ x: `-${prevIndex * (100 / genres.length)}%` });
  };

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Genres</h2>
      <motion.div
        animate={controls}
        initial={{ x: `-${index * (100 / genres.length)}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="flex overflow-x-hidden"
        onClick={handleClick}
        onDoubleClick={handleBackClick}
      >
        {genres.slice(index, index + 3).map((genre, i) => (
          <div key={i} className="px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div className="relative">
              <img src={genre.imageUrl} alt={genre.name} className="w-full h-32 object-cover rounded-lg" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-2 text-center rounded-b-lg">
                {genre.name}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      {/* Add a small thin line at the bottom */}
      <div className="border-b border-gray-300 mt-4"></div>
    </div>
  );
};

export default GameCarousel;
