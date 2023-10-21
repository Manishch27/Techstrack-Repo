import Plans from "./Plans"
import Slider from "./Slider"
import Contact from "./Contact"
import Footer from "./Footer"
import Services from "./Services"
import Features from "./Features"
import Question from "./Question"
import { Link } from "react-scroll"
import { motion } from 'framer-motion'

import { useState, useEffect } from "react"

import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'


const Home = () => {

  const [toggle, setToggle] = useState(false);

  const [icon, setIcon] = useState(false);

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])


  const handletheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    setIcon(!icon)
  }

  return (

    <>



      <div id="home" className="min-h-screen px-3 sm:px-8 lg:pt-0 pt-20 w-full dark:bg-black bg-slate-200 overflow-x-hidden relative font-mdSans selection:bg-black selection:text-white">

        <div className="w-56 h-56 absolute -left-10 bg-blue-500 rounded-full blur-[130px]"></div>
        <div className="w-56 h-56 absolute -right-10 bottom-5 bg-cyan-500 rounded-full blur-[130px]"></div>

        <motion.img
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[70%] lg:top-24 lg:left-16 -left-full absolute" src="/images/homeimg.png" />
        <motion.img
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[65%] lg:top-20 lg:left-[74%] left-full absolute" src="/images/homeimg1.png" />
        <div className="">
          <div className={`flex items-center lg:bg-transparent bg-slate-400/90 z-40 h-20 lg:static fixed top-0 left-0 right-0 lg:justify-center justify-between px-5 sm:px-20`}>

            <motion.img
              initial={{ y: -500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .5 }}
              className="h-10 cursor-pointer relative z-30" src={icon ? "/images/techstracklogo1.png" : "/images/techstracklogo.png"} />



            {
              toggle ?
                <div className="flex items-center justify-between gap-x-7 relative z-40 " >
                  <button className="relative lg:absolute lg:left-[350px] bg-black font-semibold text-lg text-white px-5 py-2 rounded" onClick={handletheme}>{icon ? <MdDarkMode /> : <BsFillSunFill />}</button>
                  <div onClick={() => setToggle(!toggle)} className={`lg:hidden z-30  w-7 h-[4px] transition-all ease-in-out duration-500 rounded-full after:transition-all after:ease-in-out after:duration-500 after:content-[''] after:absolute after:w-7 after:h-[4px] cursor-pointer after:rounded-full
                        after:bg-black before:bg-black
                       after:rotate-45 before:rotate-[140deg] before:content-[''] before:absolute before:w-7 before:h-[4px] before:transition-all before:ease-in-out before:duration-500 before:rounded-full`}>
                  </div>

                </div>

                :
                <div className="flex items-center  justify-between gap-x-7 relative z-40" >
                  <button className="relative lg:absolute lg:left-[350px] bg-black font-semibold text-lg text-white px-5 py-2 rounded" onClick={handletheme}>{icon ? <MdDarkMode /> : <BsFillSunFill />}</button>
                  <div onClick={() => setToggle(!toggle)} className="lg:hidden z-30  w-7 h-[4px] transition-all ease-in-out duration-500 rounded-full cursor-pointer bg-black after:transition-all after:ease-in-out after:duration-500 after:content-[''] after:absolute after:w-7 after:h-[4px] after:rounded-full after:bg-black after:translate-y-[-10px] before:content-[''] before:absolute before:w-7 before:h-[4px] before:transition-all before:ease-in-out before:duration-500 before:rounded-full before:bg-black before:translate-y-[10px]"></div>

                </div>
            }

            <nav className={`lg:hidden font-semibold duration-500 z-20 lg:duration-0 fixed top-20 left-0 ${toggle ? "left-0" : "left-[940px]"} bg-black/90 backdrop-blur-sm lg:bg-transparent text-white  space-y-6 lg:space-y-0 w-full h-full lg:h-0 lg:static flex flex-col justify-center items-center lg:flex lg:items-center lg:justify-end lg:gap-x-12 lg:text-lg`}>
              <li className="list-none"><Link to="home" spy={true} smooth={true} offset={0} duration={500} className="text-xl list-none cursor-pointer hover:text-cyan-300 duration-300" onClick={() => setToggle(false)}>Home</Link></li>
              <li className="list-none"><Link to="feature" spy={true} smooth={true} offset={0} duration={500} className="text-xl list-none cursor-pointer hover:text-cyan-300 duration-300" onClick={() => setToggle(false)}>Features</Link></li>
              <li className="list-none"><Link to="service" spy={true} smooth={true} offset={0} duration={500} className="text-xl list-none cursor-pointer hover:text-cyan-300 duration-300" onClick={() => setToggle(false)}>Services</Link></li>
              <li className="list-none"><Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="text-xl list-none cursor-pointer hover:text-cyan-300 duration-300" onClick={() => setToggle(false)}>Contact</Link></li>
              <p className="py-8 relative z-30"> <Link to="plans" onClick={() => setToggle(false)} spy={true} smooth={true} offset={0} duration={500} className="shadow-md cursor-pointer shadow-slate-900 hover:bg-slate-400 duration-300 text-center px-14 py-4 bg-white rounded-md text-xl font-semibold text-black">See Plan</Link>
              </p>

            </nav>

          </div>
          <div className="text-center mt-24">
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .5, delay: .1 }}
              className="text-5xl sm:text-6xl md:text-7xl relative z-30 font-bold dark:text-white">Take your business</motion.h3>
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .5, delay: .8 }}
              className="text-5xl sm:text-6xl md:text-7xl relative z-30 py-3 font-bold dark:text-white">online With Us</motion.h3>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .5, delay: 1.5 }}
              className="text-lg sm:text-xl md:text-2xl relative z-30 py-5 text-slate-700 dark:text-slate-300">We are a team of Skilled Developers and Designers, Helps<br /> local businesses to takes their business online.</motion.p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .5, delay: 1.9 }}

              className="py-8 relative z-30"> <Link to="plans" spy={true} smooth={true} offset={0} duration={500} className="shadow-md cursor-pointer shadow-slate-400 dark:shadow-slate-800 dark:hover:bg-slate-400 hover:bg-slate-800 duration-300 text-center px-14 py-4 bg-black rounded-md text-xl font-semibold text-white  dark:text-black dark:bg-slate-300">See Plan</Link>
            </motion.p>
          </div>
        </div>
      </div>


      <Slider />
      <Features />
      <Services />
      <Contact />
      <Plans />
      <Question />
      <Footer />

    </>
  )
}

export default Home