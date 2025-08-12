import { Link } from "react-router-dom";
import Button from '../pages/Button';

function FooterPage() {
  return (
    <>
      <div className="min-h-[90vh] flex flex-col md:flex-row justify-between p-6 md:p-8 w-full bg-black">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1 className="text-stone-200 text-4xl sm:text-5xl lg:text-7xl pl-10 pt-10 sm:pt-[2.5em]">
            Have an idea? <br />
            We can help.
          </h1>
          <div className="flex items-center mt-6 sm:mt-[30px]">
            <div className="sm:pl-[2em]">
              <Button text="Get Started" />
            </div>

            <Link
              to="/"
              className="text-lg sm:text-2xl text-amber-50 ml-4 sm:ml-[22px] relative inline-block font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full"
            >
              demo23@gmail.com
            </Link>
          </div>


          <div className="flex flex-wrap gap-5 sm:gap-7 justify-start items-center mt-12 sm:mt-[8em] pl-4 sm:ml-[8.5em] text-amber-50">
            {["X (Twitter)", "LinkedIn", "Github", "Discourt", "Vercel"].map((item) => (
              <Link
                key={item}
                className="text-base sm:text-[20px] link-hover"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-around items-start sm:items-center mt-10 md:mt-0">
          <div className="w-full sm:w-[400px] p-3">
            <h2 className="text-amber-50 text-2xl sm:text-4xl">INDIA</h2>
            <h3 className="text-amber-50 text-lg sm:text-2xl mt-3">
              19-Civil line,
              <br /> Moradabad-244001
            </h3>
          </div>

          <div className="w-full sm:w-[400px] p-3 mt-6 sm:mt-0">
            <h2 className="text-amber-50 text-2xl sm:text-4xl">INDIA</h2>
            <h3 className="text-amber-50 text-lg sm:text-2xl mt-3">
              19-civil line,
              <br /> Dhampur -24676
            </h3>
          </div>
        </div>
      </div>
      {/* left side area of footer section part 2 */}
      <div className="bg-[#060016] relative text-[#C0C0C0] flex flex-col md:flex-row w-full min-h-[62vh] p-4 sm:p-6 md:p-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-[50px] md:ml-[56px] p-4">
          <h2 className="text-2xl text-gray-700">Services</h2>
          <div className="flex flex-wrap gap-4 items-center mt-2">
            <Link className="link-hover">Web Development</Link>
            <Link className="link-hover">UI Design</Link>
            <Link className="link-hover">UX Design</Link>
            <Link className="link-hover">Identity & Branding</Link>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link className="link-hover">Frontend Development</Link>
            <Link className="link-hover">Android Apps</Link>
            <Link className="link-hover">React JS Development</Link>
            <Link className="link-hover">C#.NET</Link>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link className="link-hover">Webflow</Link>
            <Link className="link-hover">AI Development</Link>
            <Link className="link-hover">Java</Link>
            <Link className="link-hover">Mobile App Development</Link>
            <Link className="link-hover">Python</Link>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link className="link-hover">Low Code Development</Link>
          </div>
          <p className="mt-4 text-gray-700">© 2025 demo. All rights reserved.</p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-[50px] md:ml-[56px] p-4">
          <h2 className="text-2xl text-gray-700">Industries</h2>
          <div className="flex flex-wrap gap-5">
            <Link className="link-hover">E-Learning</Link>
            <Link className="link-hover">Healthcare</Link>
            <Link className="link-hover">Web3</Link>
            <Link className="link-hover">Social Platforms</Link>
            <Link className="link-hover">SaaS</Link>
            <Link className="link-hover">Fintech</Link>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link className="link-hover">E-Commerce</Link>
            <Link className="link-hover">Real Estate</Link>
            <Link className="link-hover">Gaming</Link>
          </div>

          <h2 className="text-2xl mt-8 text-gray-700">Company</h2>
          <div className="flex flex-wrap gap-5">
            <Link className="link-hover">About us</Link>
            <Link className="link-hover">Conceptzilla</Link>
            <Link className="link-hover">Project Calculator</Link>
            <Link className="link-hover">Blog</Link>
            <Link className="link-hover">Testimonials</Link>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link className="link-hover">Extended Team Model</Link>
            <Link className="link-hover">FAQ</Link>
            <Link className="link-hover">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default FooterPage;
