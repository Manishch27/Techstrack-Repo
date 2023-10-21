import { PiRocket } from 'react-icons/pi'
import { BsFillRocketTakeoffFill, BsFillRocketFill } from 'react-icons/bs'
import {motion} from 'framer-motion'

const Plans = () => {

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
            <div id="plans" className="min-h-screen relative w-full dark:bg-slate-800 bg-slate-200 px-5 sm:px-20 py-20 ">

                <div className="flex gap-5 flex-wrap justify-center items-center">
                    <motion.div
                    variants={AnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: .5,
                        delay:.1
    
                    }}
                    viewport={{once:true}}
                    className="h-[500px] relative bg-white w-[300px] rounded-md shadow-lg  shadow-slate-300 dark:bg-slate-300 dark:shadow-slate-900 text-center space-y-8 flex flex-col justify-center items-center">

                        <PiRocket className='text-4xl text-red-500 ' />

                        <div>
                            <button className='bg-slate-600 -rotate-12 absolute -top-5 left-6 px-3 py-2 rounded text-sm text-white font-medium uppercase duration-300 hover:bg-red-700'>Most Popular</button>

                            <h1 className='text-xl font-semibold'>Standard</h1>
                            <p className='font-medium text-sm text-slate-500'>For the basics</p>
                        </div>
                        <h1 className='text-6xl text-red-500 font-bold'>$50</h1>
                        <div className="space-y-1">
                            <p className='font-medium text-sm text-slate-500'>Up to 5 Website</p>
                            <p className='font-medium text-sm text-slate-500'>50 GB data space</p>
                            <p className='font-medium text-sm text-slate-500'>10 Customer sub Pages</p>
                            <p className='font-medium text-sm text-slate-500'>2 Domains access</p>
                            <p className='font-medium text-sm text-slate-500'>Support on request</p>
                        </div>
                        <button className='bg-red-500 px-8 py-2 rounded-full text-sm text-white font-medium duration-300 hover:bg-red-700'>Buy Now</button>
                    </motion.div>
                    <motion.div 
                    variants={AnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: .5,
                        delay:.7
    
                    }}
                    viewport={{once:true}}
                    className="h-[500px] bg-red-600 w-[300px] rounded-md shadow-lg shadow-slate-300 text-center space-y-8 flex flex-col  dark:shadow-slate-900 justify-center items-center">

                        <BsFillRocketTakeoffFill className='text-4xl text-white ' />

                        <div>
                            <h1 className='text-xl font-semibold text-white'>Unlimited</h1>
                            <p className='font-medium text-sm text-red-200'>For the Professionals</p>
                        </div>
                        <h1 className='text-6xl font-bold text-white'>$100</h1>
                        <div className="space-y-1">
                            <p className='font-medium text-sm text-red-200'>Unlimited Website</p>
                            <p className='font-medium text-sm text-red-200'>200 GB data space</p>
                            <p className='font-medium text-sm text-red-200'>20 Customer sub Pages</p>
                            <p className='font-medium text-sm text-red-200'>10 Domains access</p>
                            <p className='font-medium text-sm text-red-200'>24/7 Customer Support</p>
                        </div>
                        <button className='bg-white px-8 py-2 rounded-full text-sm text-red-500 font-bold duration-300 hover:bg-red-200'>Buy Now</button>
                    </motion.div>
                    <motion.div
                    variants={AnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: .5,
                        delay:1.5
    
                    }}
                    viewport={{once:true}}
                    className="h-[500px] bg-white w-[300px] rounded-md shadow-lg shadow-slate-300 text-center space-y-8 flex dark:bg-slate-300 dark:shadow-slate-900 flex-col justify-center items-center">

                        <BsFillRocketFill className='text-4xl text-red-500 ' />

                        <div>
                            <h1 className='text-xl font-semibold'>Premium</h1>
                            <p className='font-medium text-sm text-slate-500'>For small Team</p>
                        </div>
                        <h1 className='text-6xl text-red-500 font-bold'>$75</h1>
                        <div className="space-y-1">
                            <p className='font-medium text-sm text-slate-500'>Up to 10 Website</p>
                            <p className='font-medium text-sm text-slate-500'>100 GB data space</p>
                            <p className='font-medium text-sm text-slate-500'>15 Customer sub Pages</p>
                            <p className='font-medium text-sm text-slate-500'>4 Domains access</p>
                            <p className='font-medium text-sm text-slate-500'>24/7 Customer Support</p>
                        </div>
                        <button className='bg-red-500 px-8 py-2 rounded-full text-sm text-white font-medium duration-300 hover:bg-red-700'>Buy Now</button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Plans