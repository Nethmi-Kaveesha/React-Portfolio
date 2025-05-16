import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'your_service_id',      // Replace with your EmailJS service ID
                'your_template_id',     // Replace with your EmailJS template ID
                form.current,
                'your_public_key'       // Replace with your EmailJS public key
            )
            .then(
                () => {
                    setMessageSent(true);
                    setError(null);
                    form.current.reset();
                },
                (err) => {
                    console.error(err.text);
                    setError('Something went wrong. Please try again.');
                }
            );
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12 text-center">
            <Link to="/" className="text-blue-500 hover:underline absolute top-6 left-6">
                ← Back to Home
            </Link>

            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent mb-4">
                Contact Me
            </h1>
            <p className="text-gray-600 mb-8 max-w-xl">
                If you'd like to work together or have any questions, feel free to send me a message.
            </p>

            <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full max-w-xl bg-gray-50 p-6 rounded-lg shadow space-y-4"
            >
                <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                ></textarea>

                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-pink-400 text-white px-6 py-2 rounded-md hover:opacity-90 transition"
                >
                    <Send className="w-4 h-4" />
                    Send Message
                </button>

                {messageSent && <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>}
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </form>

            <div className="mt-10 text-gray-600 space-y-2">
                <p className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" /> kaveefernando2003@gmail.com
                </p>
                <p className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400" /> +94 76 123 4567
                </p>
            </div>
        </div>
    );
};

export default ContactPage;
