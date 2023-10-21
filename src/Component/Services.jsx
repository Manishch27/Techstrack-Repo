import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion";
const Services = () => {


    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            scale: 0.5
        },
        animate: {
            opacity: 1,
            scale: 1,
        }
    }

    const AnimationVariants = {
        initial: {
            opacity: 0,
            x:-200
        },
        animate: {
            opacity: 1,
            x:0,
        }
    }

    
    return (
        <>
            <div id="service" className="dark:bg-slate-800 bg-slate-200 py-5">

                <motion.h1
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{
                    duration: .4,

                }}
                viewport={{once:true}}
                className="text-2xl sm:text-3xl dark:text-white pt-14 font-mdSans font-bold uppercase text-center w-full">SERVICES WE OFFERS</motion.h1>
                <div className=" p-16 font-mdSans flex items-center justify-center flex-wrap gap-x-8 gap-y-5">
                    <Tilt>
                    <motion.div 
                    variants={AnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: .5,
                        delay:.1
    
                    }}
                    viewport={{once:true}}
                    className="flex cursor-pointer flex-col shadow-lg border-4 dark:border-slate-700 border-red-200 dark:shadow-slate-800 shadow-slate-400 items-center justify-between h-[300px] w-[240px] sm:h-[350px] sm:w-[280px] bg-red-100 dark:bg-slate-600 rounded-xl text-center p-5">
                        <img className="h-[150px] pl-5" src="/images/web.png" alt="Image not found" />
                        <div className="">
                            <h1 className="text-2xl sm:text-3xl font-bold dark:text-white text-red-800">Website Development</h1>
                            <p className="text-sm sm:text-base dark:text-slate-300 text-slate-700 py-4">We can build good looking & responsive website for your business.</p>
                        </div>
                    </motion.div>
                    </Tilt>
                    <Tilt>
                    <motion.div 
                    variants={AnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: .5,
                        delay:.5
    
                    }}
                    viewport={{once:true}}
                    className="flex cursor-pointer flex-col border-4 dark:border-slate-700 border-cyan-200 shadow-lg shadow-slate-400 items-center justify-between dark:shadow-slate-800 h-[300px] w-[240px] sm:h-[350px] sm:w-[280px] bg-cyan-100 dark:bg-slate-600 rounded-xl text-center p-5">
                        <img className="h-[135px]" src="/images/graphic.png" alt="Image not found" />
                        <div className="">
                            <h1 className="text-2xl sm:text-3xl font-bold dark:text-white text-cyan-800">Graphics Design</h1>
                            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 py-4">We have talented graphic Designers who designs attractive & good looking designes.</p>
                        </div>
                    </motion.div>
                    </Tilt>
                    <Tilt>
                    <motion.div 
                    variants={AnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: .5,
                        delay:1
    
                    }}
                    viewport={{once:true}}
                    className="flex cursor-pointer flex-col shadow-lg border-4 dark:border-slate-700 border-yellow-200 shadow-slate-400 items-center justify-between dark:shadow-slate-800 h-[300px] w-[240px] sm:h-[350px] sm:w-[280px] bg-yellow-100 dark:bg-slate-600 rounded-xl text-center p-5">
                        <img className="h-[150px]" src="/images/seo.png" alt="Image not found" />
                        <div className="">
                            <h1 className="text-2xl sm:text-3xl font-bold dark:text-white text-yellow-800">Website SEO</h1>
                            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 py-4">We can also do SEO of your website so your website rank on the top of search result.</p>
                        </div>
                    </motion.div>
                    </Tilt>
                    <Tilt>

                    <motion.div 
                    variants={AnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: .5,
                        delay:1.5
    
                    }}
                    viewport={{once:true}}
                    className="flex cursor-pointer flex-col shadow-lg shadow-slate-400 dark:border-slate-700 border-4 border-green-200 items-center justify-between dark:shadow-slate-800 h-[300px] w-[240px] sm:h-[350px] sm:w-[280px] bg-green-100 dark:bg-slate-600 rounded-xl text-center p-5">
                        <img className="h-[150px] pl-10" src="/images/app.png" alt="Image not found" />
                        <div className="">
                            <h1 className="text-2xl sm:text-3xl font-bold dark:text-white text-green-800">App Development</h1>
                            <p className="text-sm sm:text-md text-slate-700 dark:text-slate-300  py-4">We will build cross-platform Apps for you which can run on multiple platforms.</p>
                        </div>
                    </motion.div>
                    </Tilt>

                </div>
            </div>
        </>
    )
}

export default Services