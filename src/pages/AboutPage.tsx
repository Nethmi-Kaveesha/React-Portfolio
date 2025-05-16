import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutMePage = () => {
    return (
        <div className="min-h-screen bg-white px-6 py-10">
            <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block">
                ← Back to Home
            </Link>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* Left: Profile Image */}
                <img
                    src="/src/assets/my.jpg"
                    alt="Nethmi Kaveesha"
                    className="w-58 h-78 shadow-md object-cover"
                />

                {/* Right: Info */}
                <div className="text-center lg:text-left max-w-xl">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent">
                        Nethmi Kaveesha Fernando
                    </h1>
                    <p className="text-gray-600 mt-2 text-lg">Web Developer</p>

                    {/* CV Download */}
                    <a
                        href="/src/assets/cv.pdf"
                        download
                        className="inline-flex items-center gap-2 mt-4 px-4 py-2 border rounded-lg text-sm text-blue-500 hover:bg-blue-50"
                    >
                        <Download className="w-4 h-4" />
                        Download CV
                    </a>

                    {/* Description */}
                    <div className="mt-6 text-gray-700 text-sm sm:text-base">
                        <p>
                            I'm a passionate and creative web developer who enjoys turning ideas into real-world applications. I specialize in building responsive websites using modern technologies.
                        </p>
                        <p className="mt-4">
                            I focus on user experience, accessibility, and writing clean, maintainable code using tools like React, Tailwind CSS, and Spring Boot.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMePage;
