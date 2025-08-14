import Dock from '../Animation/floatingNav'
import { useState, useEffect } from 'react';
import {
    IconLayoutDashboard,
    IconDeviceImacCode,
    IconHome,
    IconDualScreen,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom'
import Button from './Button';
import { HiMenu, HiX } from 'react-icons/hi';

const Nav = () => {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },
        {
            title: "Portfolio",
            icon: (
                <IconDualScreen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/portfolio",
        },
        {
            title: "Blog",
            icon: (
                <IconDeviceImacCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/blog",
        },
        {
            title: "Dashboard",
            icon: (
                <IconLayoutDashboard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/dashboard",
        },
    ];

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (scrolled) {
        return (
            <motion.div
                className="text-white fixed top-0 h-15 w-full bg-transparent backdrop-blur-md z-500 flex items-center justify-between px-6 md:px-15"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <Link to="/" className="text-2xl font-bold">logo</Link>
                <nav className="hidden md:flex space-x-10">
                    {links.map((link, i) => (
                        <NavLink
                            key={i}
                            to={link.href}
                            className={({ isActive }) =>
                                `relative text-2xl px-2 transition duration-300 after:content-[''] 
               after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white 
               after:transition-all after:duration-300 hover:after:w-full
               ${isActive ? 'after:w-full' : ''}`
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </nav>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-15 left-0 w-full bg-[#060010]/90 backdrop-blur-md p-5 flex flex-col space-y-4 md:hidden"
                        >
                            {links.map((link, i) => (
                                <NavLink
                                    key={i}
                                    to={link.href}
                                    className="text-lg py-2 border-b border-gray-600"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.title}
                                </NavLink>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        )
    } else {
        return (
            <Dock
                items={links}
            />
        )
    }
}

export default Nav
