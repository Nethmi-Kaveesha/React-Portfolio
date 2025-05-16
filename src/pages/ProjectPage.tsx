import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Travel & Tours Web App',
        image: '/src/assets/tours-and-travels-services.jpg',
        description:
            'A full-featured travel booking platform with user dashboard, payment, interactive maps, reviews, and chatbot.',
        tech: ['React', 'Tailwind CSS', 'Spring Boot', 'MySQL'],
        github: 'https://github.com/yourusername/travel-app',
        demo: 'https://yourtravelapp.live',
    },
    {
        title: 'Portfolio Website',
        image: '/src/assets/images.jpg',
        description:
            'A personal portfolio website showcasing skills, resume, and projects with smooth animations and responsive design.',
        tech: ['React', 'Tailwind CSS'],
        github: 'https://github.com/Nethmi-Kaveesha/MyPortfolio.git',
        demo: 'https://yourportfolio.live',
    },
    {
        title: 'To-Do-App',
        image: '/src/assets/unnamed (1).png',
        description:
            'Real-time weather forecast and nearby attractions using Leaflet, OpenWeather API, and Overpass API.',
        tech: ['JavaScript', 'Leaflet', 'Bootstrap'],
        github: 'https://github.com/Nethmi-Kaveesha/To-Do-App.git',
        demo: 'https://weathermap.live',
    },
];

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            {/* Back to Home */}
            <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block">
                ← Back to Home
            </Link>

            <h1 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent">
                My Projects
            </h1>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-xl"
                    >
                        <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                            <p className="text-gray-600 text-sm mt-2">{project.description}</p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-gradient-to-r from-blue-100 to-pink-100 text-blue-700 px-2 py-1 text-xs rounded-full"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4 mt-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-gray-700 hover:text-black text-sm"
                                >
                                    <Github className="w-4 h-4" /> GitHub
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                                >
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
