import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Peer Match Pro</h1>
        <ul className="flex gap-6 text-gray-800 font-medium">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-600 transition ${
                isActive('/') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/peers"
              className={`hover:text-blue-600 transition ${
                isActive('/peers') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Peers
            </Link>
          </li>
          <li>
            <Link
              to="/practice"
              className={`hover:text-blue-600 transition ${
                isActive('/practice') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Practice
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              className={`hover:text-blue-600 transition ${
                isActive('/chat') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Chat
            </Link>
            
          </li>
          <li>
            <Link
              to="/match"
              className={`hover:text-blue-600 transition ${
                isActive('/match') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Peer Match
            </Link>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
