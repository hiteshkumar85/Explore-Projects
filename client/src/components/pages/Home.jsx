import MagicBento from '../Animation/MagicBento.jsx';
import DarkVeil from '../Animation/DarkVeil.jsx';
import HomeText from "../Animation/homeText";
// import ProjectSlider from './ProjectSlider.jsx';
const Home = () => {
    const text = `We Build Scalable Projects\nfor the Ideas of Tomorrow`;

    return (
        <main className='h-full overflow-y-scroll no-scrollbar scroll-smooth'>
            <section className='relative h-[100vh] w-full flex flex-col text-white items-center justify-center'>
                {/* <svg
                    id="wave"
                    className="transform rotate-180 absolute top-0 blur-3xl z-[-1]"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0.5">
                            <stop stopColor="rgba(64, 255, 170, 1)" offset="0%" />
                            <stop stopColor="rgba(64, 121, 255, 1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#sw-gradient-0)"
                        style={{ transform: 'translate(0, 0px)', opacity: 0.5 }}
                        d="M0,224L20,186.7C40,149,80,75,120,37.3C160,0,200,0,240,37.3C280,75,320,149,360,181.3C400,213,440,203,480,176C520,149,560,107,600,96C640,85,680,107,720,96C760,85,800,43,840,37.3C880,32,920,64,960,96C1000,128,1040,160,1080,192C1120,224,1160,256,1200,256C1240,256,1280,224,1320,218.7C1360,213,1400,235,1440,213.3C1480,192,1520,128,1560,90.7C1600,53,1640,43,1680,69.3C1720,96,1760,160,1800,202.7C1840,245,1880,267,1920,256C1960,245,2000,203,2040,165.3C2080,128,2120,96,2160,90.7C2200,85,2240,107,2280,144C2320,181,2360,235,2400,224C2440,213,2480,139,2520,117.3C2560,96,2600,128,2640,122.7C2680,117,2720,75,2760,74.7C2800,75,2840,117,2860,138.7L2880,160L2880,320L2860,320C2840,320,2800,320,2760,320C2720,320,2680,320,2640,320C2600,320,2560,320,2520,320C2480,320,2440,320,2400,320C2360,320,2320,320,2280,320C2240,320,2200,320,2160,320C2120,320,2080,320,2040,320C2000,320,1960,320,1920,320C1880,320,1840,320,1800,320C1760,320,1720,320,1680,320C1640,320,1600,320,1560,320C1520,320,1480,320,1440,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
                    />
                </svg> */}

                <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, zIndex: -2 }}>
                    <DarkVeil />
                </div>
                <HomeText
                    text={text}
                    delay={50}
                    animateBy="words"
                    direction="bottom"
                    className="text-7xl inline-block"
                />
                <div className="mt-15 flex gap-10">
                    <button className="h-12 w-40 text-lg border rounded-full font-bold bg-[linear-gradient(64deg,_rgba(2,0,36,0.5)_0%,_rgba(9,9,121,1)_30%,_rgba(0,212,255,1)_100%)] border-none">
                        Get Start
                    </button>
                    <button className="h-12 w-40 text-lg border rounded-full font-bold">
                        Book Project
                    </button>
                </div>
            </section>
            <section className='h-[200vh] w-full bg-[linear-gradient(to_bottom,_black_5%,_#060010_60%,_#060010_99%)] text-white text-4xl flex flex-col items-center justify-end gap-1'>
                <div className='w-full h-[100vh] flex justify-center items-center '>define us</div>
                <h1 className=''>Why Choose us?</h1>
                <MagicBento
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="132, 0, 255"
                />
            </section>
            <section id="project">
                {/* <ProjectSlider/> */}
            </section>
        </main>
    );
};

export default Home;
