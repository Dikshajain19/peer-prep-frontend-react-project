import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.png'; 

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-evenly px-6 md:px-20 py-16 bg-white min-h-[80vh]">
      {/* Left Text Section */}
      <div className="max-w-xl text-center ml-10 md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Welcome to <span className="text-blue-600">PeerMatchPro</span>
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Find peers. Practice interviews. Crack top tech companies.
        </p>
        <Link to="/practice">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
            Start Learning
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="mb-10 md:mb-0">
        <img
          src={banner}
          alt="Peer Matching Banner"
          className="w-[300px] md:w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
