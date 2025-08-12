import { Link } from "react-router-dom";

function FooterPage() {
  return (
    <>
      <div className="h-[90vh] flex justify-between p-8 w-full bg-black ">
        <div className=" w-1/2">
          <h1 className=" text-stone-200 text-7xl  justify-items-end  pl-[1.7em] pt-[2.5em]">

            
            Have an idea? <br />
            We can help.


          </h1>

          <button className="ml-[130px] mt-[20px] rounded-4xl relative overflow-hidden px-6 py-3 bg-white text-black border-1 border-white font-medium uppercase tracking-wide group">
            <span className=" relative z-10 transition duration-300 group-hover:text-white">
              Get Started
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-black transform -translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out z-0"></span>
          </button>

          <Link
            to="/"
            className="text-2xl 
           text-amber-50  ml-[22px] relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full"
          >
            demo23@gmail.com
          </Link>
          <div className="flex  gap-7 justify-start items-center mt-[8em]  ml-[8.5em] text-amber-50">
            <Link className=" text-[20px] relative inline-block   after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              X (Twitter)
            </Link>
            <Link className="text-[20px] relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full">
              LinkedIn
            </Link>
            <Link className="text-[20px] relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full">
              Github
            </Link>
            <Link className=" text-[20px] relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full">
              Discourt
            </Link>
            <Link className="text-[20px] relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full">
              Vercel
            </Link>
          </div>
        </div>
        <div className=" flex justify-between w-1/2 h-[600px]">
          <div className="w-[400px] h-[300px]  mt-[180px] p-3 ml-[50px] ">
            <h2 className="text-amber-50 text-4xl  ">INDIA</h2>
            <h3 className=" text-amber-50 text-2xl mt-[15px]">
              19-Civil line,
              <br /> Moradabad-244001
            </h3>
          </div>

          <div className=" w-[400px] h-[300px]  mt-[180px] p-3 ">
            <h2 className=" text-amber-50 text-4xl">INDIA</h2>
            <h3 className=" text-amber-50 text-2xl mt-[15px]">
              19-civil line,
              <br /> Dhampur -24676
            </h3>
          </div>
        </div>
      </div>

{/* -----------------------Second footer------------------------ */}



      {/* left side area of footer section part 2 */}

      <div className="bg-[linear-gradient(to_top,_#060016_5%,_#060010_100%)]    text-[#C0C0C0] flex  w-full h-[62vh] p-8">
        <div className="w-1/2 mt-[50px] ml-[56px] p-4  ">
          <h2 className="text-2xl  text-gray-700 ">Services</h2>
          <div className="flex  gap-4 items-center mt-[10px] ">
            <Link className="text-[16px] mt-[10px]   relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Web Development
            </Link>

            <Link className="  text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              UI Design
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              UX Design
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Identity & Branding
            </Link>
          </div>
          <div className=" flex gap-5">
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Frontend Development
            </Link>

            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Android Apps
            </Link>

            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              React JS Development
            </Link>

            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              C#.NET
            </Link>
          </div>
          <div className="flex gap-5">
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Webflow
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              AI Development
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Java
            </Link>

            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Mobile App Development
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Python
            </Link>
          </div>
          <div className="flex gap-5">
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Low Code Development
            </Link>
          </div>
          <p className="mt-[15px]  text-gray-700 ">© 2025 demo. All rights reserved.</p>
        </div>

        {/* right side area of footer section part 2 */}

        <div className="w-1/2 mt-[50px] ml-[56px] p-4  ">
          <h2 className=" text-2xl  text-gray-700 ">Industries</h2>

          <div className="flex gap-5">
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              E-Learning
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Healthcare
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Web3
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Social Platforms
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              SaaS
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Fintech
            </Link>
          </div>
          <div className="flex gap-5">
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              E-Commerce
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Real Estate
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Gaming
            </Link>
          </div>
          <h2 className=" text-2xl mt-[2.5em] text-gray-700 ">Company</h2>
          <div className="flex gap-5">
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              About us
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Conceptzilla
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Project Calculator
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Blog
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Testimonials
            </Link>
          </div>
          <div className="flex gap-5">
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Extended Team Model
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              FAQ
            </Link>
            <Link className="text-[16px]  mt-[10px]  relative inline-block  font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-800 hover:after:w-full">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default FooterPage;
