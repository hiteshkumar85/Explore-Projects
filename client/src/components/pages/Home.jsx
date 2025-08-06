import MagicBento from '../Animation/MagicBento.jsx';
import About from './About.jsx';
import Hero from './Hero.jsx';
import Project from './Project.jsx';
import Solution from './Solution.jsx';

const Home = () => {

    return (
        <main className='h-full overflow-y-scroll no-scrollbar scroll-smooth bg-black'>
            <Hero />
            <section
                id='about'
                className='h-[140vh] w-full bg-[linear-gradient(to_bottom,_black_5%,_#060010_50%,_#060010_99%)] text-white overflow-hidden'
            >
                <About />
            </section>
            <section id='why_choose' className='w-full text-white text-4xl flex flex-col justify-start items-center bg-[#060010]'>
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
<<<<<<< HEAD
            <Solution/>
            <Project/>
=======
            <Solution />
            <section className='h-[100vh] w-full bg-black'>
                project
            </section>
>>>>>>> 3681a2e3eff4edd6bf5faf36e60d0536bdbb39b0
        </main>
    );
};

export default Home;
