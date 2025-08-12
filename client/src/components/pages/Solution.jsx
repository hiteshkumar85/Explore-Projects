import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import web from '../../assets/solutionImages/web.png'
import andriod from '../../assets/solutionImages/andriod.png'
import cloud_service from '../../assets/solutionImages/cloud-services.png'
import hosting from '../../assets/solutionImages/hosting-server.png'
import seo from '../../assets/solutionImages/seo.png'
import uxui from '../../assets/solutionImages/UXUI-design.png'

import Lenis from '@studio-freight/lenis'
const Solution = () => {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })

        function raf(time) {
            lenis.raf(time)
            ScrollTrigger.update()
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    const services = [
        {
            image: web,
            title: "Web Development",
            desc: "Scalable, responsive websites with modern frameworks.",
        },
        {
            image: andriod,
            title: "App Development",
            desc: "Cross-platform mobile apps for iOS and Android.",
        },
        {
            image: hosting,
            title: "Hosting",
            desc: "Fast and secure hosting solutions with 99.9% uptime.",
        },
        {
            image: cloud_service,
            title: "Cloud Solutions",
            desc: "Robust, scalable cloud infrastructure and DevOps.",
        },
        {
            image: uxui,
            title: "UI/UX Designing",
            desc: "User-centric, modern design for digital products.",
        },
        {
            image: seo,
            title: "SEO",
            desc: "Boost your visibility and drive traffic with SEO strategies.",
        },
    ];

    useEffect(() => {
        const items = gsap.utils.toArray('.horizontal__item')
        const section = document.getElementById('horizontal')

        gsap.to(items, {
            xPercent: -110 * (items.length - 1),
            ease: 'power1.out',
            scrollTrigger: {
                trigger: section,
                pin: true,
                scrub: 3,
                snap: 1 / (items.length - 2),
                end: '+=900'
            },
        })

        items.forEach((box) => {
            box.addEventListener("mouseenter", () => {
                gsap.to(box, {
                    scale: 1.02,
                    y: -10,
                    boxShadow: "0 10px 25px rgba(168, 85, 247, 0.5)",
                    duration: 0.1,
                    ease: "power2.out",
                });
            });
            box.addEventListener("mouseleave", () => {
                gsap.to(box, {
                    scale: 1,
                    y: 0,
                    boxShadow: "0 0 0 transparent",
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        });

    }, [])

    return (
        <section id="horizontal" className="py-30 lg:py-25 w-full bg-[linear-gradient(to_top,_#060016_5%,_#060010_100%)] relative">
            <svg
                id="sw-js-blob-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full absolute -top-50 -z-10 opacity-9 blur-2xl"
            >
                <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                        <stop
                            id="stop1"
                            stopColor="rgba(140, 0, 255, 1)"
                            offset="0%"
                        />
                        <stop
                            id="stop2"
                            stopColor="rgba(15, 0, 53, 1)"
                            offset="100%"
                        />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#sw-gradient)"
                    d="M19.3,-31.8C24.4,-30.5,27.3,-24,30.9,-17.8C34.4,-11.6,38.6,-5.8,38.5,-0.1C38.3,5.6,33.8,11.3,30.6,18C27.3,24.7,25.3,32.5,20.4,33.9C15.5,35.3,7.8,30.3,0.1,30.2C-7.6,30,-15.2,34.7,-19.9,33.2C-24.6,31.7,-26.5,24.1,-30.5,17.5C-34.4,10.9,-40.4,5.5,-42,-0.9C-43.6,-7.3,-40.9,-14.7,-35.8,-19.2C-30.7,-23.8,-23.2,-25.6,-16.9,-26.1C-10.5,-26.6,-5.3,-25.8,0.9,-27.5C7.1,-29.1,14.3,-33.1,19.3,-31.8Z"
                    transform="translate(50 50)"
                    strokeWidth="0"
                    stroke="url(#sw-gradient)"
                    style={{ transition: '0.3s' }}
                />
            </svg>
            <div className='text-white flex flex-col items-center gap-1 lg:gap-3'>
                <h2 className='text-2xl xs:text-4xl lg:text-5xl text-purple-600'>OUR SERVICES</h2>
                <h3 className='text-2xl xs:text-4xl lg:text-4xl'>Build Smarter. Grow Faster.</h3>
                <h1 className='text-md px-6 xs:text-2xl text-purple-600'>We craft digital solutions to drive results and scale with your vision.</h1>
            </div>
            <div className="w-[95%] h-[50vh] xs:h-[63vh] mx-auto flex items-end horizontal__content overflow-hidden px-2 py-2 lg:mt-5">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="horizontal__item will-change-transform min-w-[250px] xs:min-w-[350px] h-[300px] xs:h-[400px] border border-[#fff]/20 p-8 mr-10 flex flex-col justify-center items-center text-white shadow-md rounded-2xl transition-all duration-150 cursor-pointer"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="mb-6 w-[70px] h-[60px] object-contain flex justify-center mx-auto mt-0"
                        />
                        <h3 className="text-2xl font-bold mb-2 text-center">
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-300 text-center">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Solution