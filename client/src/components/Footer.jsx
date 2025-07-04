'use client';

import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-[#0f1b24] text-white border-t border-gray-800 px-4 sm:px-10 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} GamBles. All rights reserved.</p>
                <div className="flex gap-6 text-xl text-gray-400">
                    <a href="https://x.com/Dev_Aryanjast" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <FaXTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/aryan-kumar-370b1830a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Aryanjast13" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
}
