import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <>
      <div className="lg:flex items-center justify-center hidden lg:visible">
        <nav className="bg-black/90 backdrop-blur-sm border-[1px] border-slate-400 fixed bottom-6 z-30 text-white inline-block rounded-full">
          <ul className="flex items-center justify-center px-8 py-5 font-bold text-xl">

            <li><Link to="home" spy={true} smooth={true} offset={0} duration={500} className="bg-slate-600 cursor-pointer duration-300 hover:bg-slate-400 hover:text-black rounded-full -ml-7 py-4 px-8 text-white">A</Link></li>
            <li><Link to="home" spy={true} smooth={true} offset={0} duration={500} className="hover:bg-white cursor-pointer duration-700 rounded-full py-4 px-8 hover:text-black text-slate-300">Home</Link></li>
            <li><Link to="feature" spy={true} smooth={true} offset={0} duration={500} className="hover:bg-white cursor-pointer duration-700 rounded-full py-4 px-8 hover:text-black text-slate-300" >Feature</Link></li>
            <li><Link to="service" spy={true} smooth={true} offset={0} duration={500} className="hover:bg-white cursor-pointer duration-700 rounded-full py-4 px-8 hover:text-black text-slate-300">Service</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="hover:bg-white cursor-pointer duration-700 rounded-full py-4 px-8 hover:text-black text-slate-300" >Contact</Link></li>
            <li><Link to="plans" spy={true} smooth={true} offset={0} duration={500} className="bg-slate-600 cursor-pointer duration-300 hover:bg-slate-400 rounded-full -mr-7 py-4 px-8 text-white hover:text-black" >Plans</Link></li>
          </ul>
        </nav>
      </div>


     
    </>
  )
}

export default Nav