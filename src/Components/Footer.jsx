import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-20">

            <div className="w-11/12 mx-auto py-10 grid md:grid-cols-3 gap-10">

                {/* CONTACT INFO */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Contact Info</h2>

                    <p className="flex items-center gap-2 mb-2">
                        <FaEnvelope /> support@skillswap.com
                    </p>

                    <p>📞 +880 1234 567 890</p>
                    <p>📍 Dhaka, Bangladesh</p>
                </div>

                {/* SOCIAL LINKS */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Follow Us</h2>

                    <div className="flex gap-4 text-2xl">
                        <a href="#" className="hover:text-blue-500 transition">
                            <FaFacebook />
                        </a>

                        <a href="#" className="hover:text-gray-400 transition">
                            <FaGithub />
                        </a>

                        <a href="#" className="hover:text-blue-400 transition">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* PRIVACY */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Policy</h2>

                    <p className="text-gray-300 text-sm leading-6">
                        We respect your privacy. All your data is secure and encrypted.
                    </p>

                    <div className="mt-4">
                        <a href="#" className="text-sm text-gray-400 hover:text-white">
                            Privacy Policy
                        </a>
                        <br />
                        <a href="#" className="text-sm text-gray-400 hover:text-white">
                            Terms & Conditions
                        </a>
                    </div>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
                © {new Date().getFullYear()} SkillSwap. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;