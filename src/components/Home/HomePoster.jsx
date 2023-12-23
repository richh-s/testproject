import React from 'react';
import { motion } from 'framer-motion';
import poster2 from '../../assets/poster2.png';

const HomePoster = () => {
  // Assuming the first dot is active
  const activeDotIndex = 0;

  return (
    <div className="max-w-md mx-auto relative">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-64 object-cover object-center rounded-xl"
          src={poster2}
          alt="Clash of Clans"
        />
        <div className="absolute top-0 left-0 p-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Games
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="font-bold text-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Clash of Clans
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base"
          >
            Lorem ipsum dolor sit amet, .
          </motion.p>
          <div className="flex justify-center mt-4">
            {[...Array(4)].map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === activeDotIndex ? 'bg-white' : 'bg-gray-400'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePoster;

