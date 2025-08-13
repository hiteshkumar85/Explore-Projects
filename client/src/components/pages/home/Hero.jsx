import HomeText from "../../Animation/homeText.jsx";
import { IconStarFilled, IconUsers, IconClockFilled } from '@tabler/icons-react'
import CountUp from "react-countup";
import Button from "../Button.jsx";

const Hero = () => {
    const text = `We Build Scalable Projects\nfor the Ideas of Tomorrow`;
    const stats = [
        {
            icon: <IconStarFilled className="text-yellow-400 text-xl" />,
            value: 4.9,
            suffix: "/5",
            label: "Client Rating",
        },
        {
            icon: <IconUsers className="text-green-400 text-xl" />,
            value: 1500,
            suffix: "+",
            label: "Members Served",
        },
        {
            icon: <IconClockFilled className="text-blue-400 text-xl" />,
            value: 10,
            suffix: "+",
            label: "Years of Experience",
        },
    ];
    return (
        <section className='relative h-[90vh] lg:min-h-screen w-full flex flex-col text-white items-center justify-center bg-[linear-gradient(to_top,_black_5%,_#060010_99%)] backdrop-blur-sm'>
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, zIndex: -2 }}>
                <svg
                    id="wave"
                    viewBox="0 0 1440 490"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 rotate-180 w-full h-auto opacity-40"
                >
                    {/* Gradient 1 */}
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(51.777, 0, 232.147, 0.1)" offset="0%" />
                            <stop stopColor="rgba(189.419, 11, 255, 0.1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#sw-gradient-0)"
                        style={{ transform: "translate(0, 0px)", opacity: 1 }}
                        d="M0,294L60,261.3C120,229,240,163,360,114.3C480,65,600,33,720,24.5C840,16,960,33,1080,73.5C1200,114,1320,180,1440,179.7C1560,180,1680,114,1800,89.8C1920,65,2040,82,2160,73.5C2280,65,2400,33,2520,65.3C2640,98,2760,196,2880,236.8C3000,278,3120,261,3240,236.8C3360,212,3480,180,3600,155.2C3720,131,3840,114,3960,122.5C4080,131,4200,163,4320,220.5C4440,278,4560,359,4680,343C4800,327,4920,212,5040,138.8C5160,65,5280,33,5400,24.5C5520,16,5640,33,5760,89.8C5880,147,6000,245,6120,245C6240,245,6360,147,6480,89.8C6600,33,6720,16,6840,32.7C6960,49,7080,98,7200,171.5C7320,245,7440,343,7560,359.3C7680,376,7800,310,7920,302.2C8040,294,8160,343,8280,343C8400,343,8520,294,8580,269.5L8640,245L8640,490L0,490Z"
                    />

                    {/* Gradient 2 */}
                    <defs>
                        <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(63.545, 0, 195.718, 0.4)" offset="0%" />
                            <stop stopColor="rgba(214.218, 11, 255, 0.01)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#sw-gradient-1)"
                        style={{ transform: "translate(0, 50px)", opacity: 0.9 }}
                        d="M0,343L60,285.8C120,229,240,114,360,130.7C480,147,600,294,720,310.3C840,327,960,212,1080,147C1200,82,1320,65,1440,114.3C1560,163,1680,278,1800,318.5C1920,359,2040,327,2160,277.7C2280,229,2400,163,2520,114.3C2640,65,2760,33,2880,16.3C3000,0,3120,0,3240,32.7C3360,65,3480,131,3600,187.8C3720,245,3840,294,3960,318.5C4080,343,4200,343,4320,343C4440,343,4560,343,4680,318.5C4800,294,4920,245,5040,253.2C5160,261,5280,327,5400,334.8C5520,343,5640,294,5760,253.2C5880,212,6000,180,6120,196C6240,212,6360,278,6480,302.2C6600,327,6720,310,6840,253.2C6960,196,7080,98,7200,57.2C7320,16,7440,33,7560,57.2C7680,82,7800,114,7920,163.3C8040,212,8160,278,8280,269.5C8400,261,8520,180,8580,138.8L8640,98L8640,490L0,490Z"
                    />

                    {/* Gradient 3 */}
                    <defs>
                        <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(39.596, 0, 255, 0.1)" offset="0%" />
                            <stop stopColor="rgba(255, 11, 188.317, 0.2)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#sw-gradient-2)"
                        style={{ transform: "translate(0, 100px)", opacity: 0.8 }}
                        d="M0,98L60,138.8C120,180,240,261,360,269.5C480,278,600,212,720,228.7C840,245,960,343,1080,383.8C1200,425,1320,408,1440,343C1560,278,1680,163,1800,163.3C1920,163,2040,278,2160,302.2C2280,327,2400,261,2520,245C2640,229,2760,261,2880,228.7C3000,196,3120,98,3240,89.8C3360,82,3480,163,3600,228.7C3720,294,3840,343,3960,367.5C4080,392,4200,392,4320,334.8C4440,278,4560,163,4680,130.7C4800,98,4920,147,5040,171.5C5160,196,5280,196,5400,179.7C5520,163,5640,131,5760,114.3C5880,98,6000,98,6120,89.8C6240,82,6360,65,6480,81.7C6600,98,6720,147,6840,163.3C6960,180,7080,163,7200,187.8C7320,212,7440,278,7560,253.2C7680,229,7800,114,7920,106.2C8040,98,8160,196,8280,196C8400,196,8520,98,8580,49L8640,0L8640,490L0,490Z"
                    />
                </svg>
            </div>
            <HomeText
                text={text}
                delay={50}
                animateBy="words"
                direction="bottom"
                className="text-2xl xs:text-6xl md:text-7xl inline-block text-center -mt-40 md:mt-0"
            />

            {/* Buttons Section */}
            <div className="mt-8 xs:mt-16">
                <Button text="Get Started" />
            </div>

            {/* Stats Section */}
            <div className="w-fit absolute bottom-0 py-6 xs:py-8 px-4 xs:px-8 md:px-20">
                <div className="flex flex-col xs:flex-row justify-center  items-center gap-6 xs:gap-10 text-white">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 border-b xs:border-b-0 xs:border-r border-gray-700 last:border-none pb-4 xs:pb-0 xs:pr-6 last:pr-0"
                        >
                            {item.icon}
                            <div>
                                <div className="text-lg xs:text-xl font-semibold">
                                    <CountUp
                                        end={item.value}
                                        duration={1.5}
                                        decimals={item.value % 1 !== 0 ? 1 : 0}
                                        decimal="."
                                    />
                                    {item.suffix}
                                </div>
                                <div className="text-xs xs:text-md text-gray-300">{item.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
