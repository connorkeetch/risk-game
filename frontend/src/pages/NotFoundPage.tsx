import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-8">🗺️</div>
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Territory Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you're looking for has been conquered by another player. 
          Let's get you back to safer territory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            🏠 Return Home
          </Link>
          <Link to="/lobby" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors">
            🎮 Find a Game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;