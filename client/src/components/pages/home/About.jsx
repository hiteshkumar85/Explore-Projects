import { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import aboutImage from '../../../assets/about.png'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutDetail = [
    {
      heading: "Who We Are?",
      para: "We are a team of passionate software developers, designers, and technology enthusiasts dedicated to building impactful digital solutions. Founded with a vision to bridge the gap between innovation and usability, our company thrives on creating software that empowers businesses to succeed in a rapidly evolving digital world. We value collaboration, creativity, and precision, ensuring every project reflects our commitment to quality and long-term reliability."
    },
    {
      heading: "What We Do?",
      para: "We specialize in delivering end-to-end software development services, from conceptualization to deployment. Our expertise spans custom web applications, mobile app development, cloud solutions, and enterprise-grade systems. By integrating modern technologies and agile methodologies, we create solutions that are scalable, secure, and tailored to meet the unique needs of our clients. Whether it's enhancing existing systems or building something entirely new, we focus on designing products that combine performance with exceptional user experience."
    },
    {
      heading: "Our Mission and Vision!",
      para: "Our mission is to help businesses harness the power of technology to achieve sustainable growth and innovation. We envision a future where software is not just a tool, but a catalyst for transformation—helping organizations adapt, evolve, and thrive. By staying ahead of industry trends and prioritizing continuous learning, we aim to remain a trusted technology partner for businesses worldwide."
    },
    {
      heading: "Why Choose Us?",
      para: "We believe that great software is built on trust, collaboration, and a deep understanding of our clients' goals. Our approach combines technical expertise with a problem-solving mindset, ensuring we deliver solutions that are not just functional but impactful. By prioritizing transparency, timely delivery, and continuous support, we aim to create long-lasting partnerships that help businesses stay ahead of the curve."
    }
  ]

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 425) 
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

    const section = document.getElementById('vertical')
    const colLeft = document.querySelector('.col_left')

    const mm = gsap.matchMedia()
    mm.add(
      {
        isSmall: "(max-width: 639px)",
        isLarge: "(min-width: 640px)"
      },
      (context) => {
        const { isSmall, isLarge } = context.conditions
        const tl = gsap.timeline({ paused: true })

        if (isSmall) {
          tl.fromTo(colLeft, { y: 0 }, { y: '0vh', duration: 1, ease: 'easeInOut' }, 0)
        }
        if (isLarge) {
          tl.fromTo(colLeft, { y: 10 }, { y: '65vh', duration: 1, ease: 'easeInOut' }, 0)
        }

        ScrollTrigger.create({
          animation: tl,
          trigger: section,
          start: 'top top',
          end: 'bottom center',
          scrub: true
        })
      }
    )

    return () => mm.revert()
  }, [])

  return (
    <section id="vertical" className="w-screen py-12 px-4">
      <div className="w-full flex flex-col sm:flex-row items-center md:items-start justify-center gap-5 md:gap-10">

        {/* Image Section */}
        <div className="w-full md:w-1/2 col_left">
          <img
            src={aboutImage}
            className="w-full lg:w-[90%] rounded-xl"
            alt="About Us"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[40%] space-y-5 md:space-y-10">
          {(isMobile ? aboutDetail.slice(0, 2) : aboutDetail).map((about, i) => (
            <div key={i} className="vertical__item">
              <h3 className="text-[#7500ff] text-lg md:text-xl uppercase font-bold">
                {about.heading}
              </h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed">
                {about.para}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
