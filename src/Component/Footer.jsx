import {RiTwitterXFill} from 'react-icons/ri'
import {BiLogoLinkedin} from 'react-icons/bi'
import {FaFacebook,FaInstagram} from 'react-icons/fa'
import {Link} from 'react-scroll';

const Footer = () => {
    return (
        <>
        <div className="min-h-[570px] w-full font-mdSans flex flex-col items-center justify-between dark:bg-black bg-slate-800 text-white">
            <div className="border-b-[1px] border-white w-full py-28 px-20 flex gap-y-5 sm:gap-y-0 flex-wrap justify-between items-center">
                <div className="flex gap-3 flex-col h-full justify-center">
                    <img className="h-12 w-44 cursor-pointer" src="/images/techstracklogo1.png" />
                    <div className="flex text-3xl gap-4 p-3">
                   <a href='' target="_blank"><RiTwitterXFill className='text-slate-300 hover:text-red-400 cursor-pointer duration-300'/></a>
                   <a href='' target="_blank"><BiLogoLinkedin className='text-slate-300 hover:text-red-400 cursor-pointer duration-300'/></a>
                   <a href='' target="_blank"><FaFacebook className='text-slate-300 hover:text-red-400 cursor-pointer duration-300'/></a>
                   <a href='' target="_blank"><FaInstagram className='text-slate-300 hover:text-red-400 cursor-pointer duration-300'/></a>
                    </div>
                </div>
                <div className="flex flex-col h-full justify-center space-y-2">
                    <h1 className='font-bold text-2xl py-3'>Menu</h1>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer font-semibold text-md hover:text-red-400 duration-300 text-slate-300'>Home</Link>
                    <Link to="feature" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer font-semibold text-md hover:text-red-400 duration-300 text-slate-300'>Feature</Link>
                    <Link to="service" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer font-semibold text-md hover:text-red-400 duration-300 text-slate-300'>Service</Link>
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer font-semibold text-md hover:text-red-400 duration-300 text-slate-300'>Contact Us</Link>
                </div>
                <div className="flex flex-col h-full justify-center space-y-2">
                    <h1 className='font-bold text-2xl py-3'>Our Services</h1>
                    <p className='font-semibold text-md text-slate-300'>Web Development</p>
                    <p className='font-semibold text-md text-slate-300'>App Development</p>
                    <p className='font-semibold text-md text-slate-300'>SEO</p>
                    <p className='font-semibold text-md text-slate-300'>Graphic Design</p>
                </div>
                <div className="flex flex-col h-full justify-center space-y-2">
                    <h1 className='font-bold text-2xl py-3'>Contact Us</h1>
                    <p className='font-semibol text-md text-slate-300'>Mathura Utter Pradesh 281403 India</p>
                    <p className='text-md font-medium text-slate-300'><span className='font-bold '>Phone:</span> <Link to="tel: +917505956083">+91 7505956083</Link></p>
                    <p className='text-md font-medium text-slate-300'><span className='font-bold '>Email:</span> contact@techstrack.in</p>
                    <p className='text-md font-medium text-slate-300'><span className='font-bold '>Website:</span> techstrack.in</p>
                </div>
            </div>
            <div className="">
                <p className='pb-8 lg:pb-28 pt-5 text-sm sm:text-md font-medium'>© Copyright <span className='font-bold'>Techstrack</span>. All Rights Reserved</p>
            </div>
            </div>
        </>
    )
}

export default Footer