import { Github, Linkedin, Facebook, Mail } from 'lucide-react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <img
                src="/src/assets/my.jpg"
                alt="Home Illustration"
                className="w-60 h-78 object-cover rounded-full shadow-xl -translate-y-10"
            />

            <h2 className="text-lg text-gray-600 mt-2">Hello, It's Me</h2>

            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent mt-2">
                Nethmi Kaveesha Fernando
            </h1>

            <h2 className="text-lg text-gray-600 mt-1">And I'm a Web Developer</h2>

            <p className="text-gray-600 mt-4 max-w-md">
                Passionate about building responsive, user-friendly web applications using modern technologies
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-6">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-full bg-gradient-to-r from-blue-300 to-pink-300 hover:scale-110 transition duration-200">
                        <Github className="w-6 h-6 text-white" />
                    </div>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-full bg-gradient-to-r from-blue-300 to-pink-300 hover:scale-110 transition duration-200">
                        <Linkedin className="w-6 h-6 text-white" />
                    </div>
                </a>
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-full bg-gradient-to-r from-blue-300 to-pink-300 hover:scale-110 transition duration-200">
                        <Facebook className="w-6 h-6 text-white" />
                    </div>
                </a>
                <a href="mailto:your@email.com">
                    <div className="p-2 rounded-full bg-gradient-to-r from-blue-300 to-pink-300 hover:scale-110 transition duration-200">
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                </a>
            </div>

        </div>
    );
};

export default HomePage;
