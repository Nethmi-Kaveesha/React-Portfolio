import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-200 via-blue-300 to-pink-300 text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <div className="flex space-x-6">
                    <Link to="/" className="hover:text-yellow-300">Home</Link>
                    <Link to="/about" className="hover:text-yellow-300">About</Link>
                    <Link to="/project" className="hover:text-yellow-300">Projects</Link>
                    <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
