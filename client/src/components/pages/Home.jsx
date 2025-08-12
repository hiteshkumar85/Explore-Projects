import MagicBento from '../Animation/MagicBento.jsx';
import About from './About.jsx';
import Hero from './Hero.jsx';
import Project from './Project.jsx';
import Solution from './Solution.jsx';
import FooterPage from './FooterPage.jsx';
import Strategy from './Strategy.jsx';
import ContactUs from './ContactUs.jsx';

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

            <Solution />
            <Project />
            <Strategy />
            <ContactUs/>
            <FooterPage />
        </main>
    );
};

export default Home;
