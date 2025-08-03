import Dock from '../Animation/floatingNav'
import { useState, useEffect } from 'react';
import {
    IconLayoutDashboard,
    IconDeviceImacCode,
    IconHome,
    IconDualScreen,
    IconBackground,
} from "@tabler/icons-react";
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom'

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
            title: "Solution",
            icon: (
                <IconDeviceImacCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/solution",
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
                className='text-white fixed top-0 h-17 w-full bg-transparent  backdrop-blur-md origin-center left-1/2 
                transform -translate-x-1/2 overflow-hidden z-5 flex items-center justify-between px-10'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <motion.div 
                    className='relative'
                    initial={{ left: -500, opacity: 0}}
                    animate={{left: 0, opacity: 1}}
                    transition={{duration: 1.3, ease: "easeInOut"}}
                >
                    <Link to='/' className='text-2xl w-35 h-12 flex items-center'
                    >
                        logo
                    </Link>
                </motion.div>
                <motion.nav
                    className='flex justify-between relative'
                    initial={{ top: -100, opacity: 0 }}
                    animate={{ top: 0, opacity: 1 }}
                    transition={{ duration: 1.3, ease: "easeInOut" }}
                >
                    {links.map((link, i) => (
                        <NavLink
                            key={i}
                            to={link.href}
                            className={({ isActive }) =>
                                `relative text-2xl h-12 w-40 flex items-center justify-center mx-1 transition duration-300 after:content-[''] 
                            after:absolute after:bottom-0 after:left-[10%] after:w-[80%] after:h-[1px] after:scale-x-0 after:origin-center after:bg-white
                            after:transition-transform after:duration-300 hover:after:scale-x-100 
                            ${isActive ? 'after:scale-x-100' : ''}`
                            }
                        >
                            {link.title}
                        </NavLink>

                    ))}
                </motion.nav>
                <motion.button
                    className='bg-[#00d4ff]/60 font-bold rounded-full w-35 h-12 text-xl relative'
                    initial={{ right: -500, opacity: 0 }}
                    animate={{ left: 0, opacity: 1 }}
                    transition={{ duration: 1.3, ease: "easeInOut" }}
                >Login</motion.button>
            </motion.div>
        )
    } else {
        return (
            <Dock
                items={links}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
        )
    }
}

export default Nav
