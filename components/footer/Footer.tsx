import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative backdrop-blur-xl bg-gray-100 border-t border-gray-300 ">
            {/* Gradient top line */}
            {/* <div className="h-[3px] w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div> */}

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src="/logo/logo1.png" alt="logo" width={40} />
                            <h3 className="text-xl font-extrabold 
                bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 
                bg-clip-text text-transparent">
                                EasyEng Read
                            </h3>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            Learn English through beautiful stories. Improve vocabulary,
                            reading skills, and enjoy learning every day.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold mb-4 text-gray-800">Navigation</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/stories">Stories</Link></li>
                            <li><Link href="/category">Categories</Link></li>
                            <li><Link href="/about">About</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-semibold mb-4 text-gray-800">Categories</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Beginner</li>
                            <li>Intermediate</li>
                            <li>Advanced</li>
                            <li>Vocabulary</li>
                        </ul>
                    </div>

                    {/* Contact / Social */}
                    <div>
                        <h4 className="font-semibold mb-4 text-gray-800">Connect</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Email: support@easyengread.com</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-6 border-t border-white/30 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
                    <p>© {new Date().getFullYear()} EasyEng Read. All rights reserved.</p>

                    <div className="flex gap-4">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Glow effect background */}
        </footer>
    );
};

export default Footer;

