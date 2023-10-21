import { useState } from "react"
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import {motion} from 'framer-motion'

const Question = () => {
    const [toggle, setToggle] = useState(true)
    const [tog, setTog] = useState(true)
    const [t, setT] = useState(true)
    const [to, setTo] = useState(true)
    const [togg, setTogg] = useState(true)

   
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

    
    return (
        <>
        
            

            <div className="w-full px-2 sm:px-20 py-28 font-mdSans dark:bg-slate-800 bg-slate-200 flex items-center justify-center flex-wrap">
               
            <h1 className="text-4xl sm:text-6xl pb-14 font-mdSans font-bold dark:text-white uppercase text-center w-full">FAQs</h1>
                    
                        <motion.div 
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        transition={{
                            duration: .4,
                        }}
                        viewport={{once:true}}
                        onClick={()=>{setToggle(!toggle)}} className="flex flex-col cursor-pointer items-start justify-center py-8 border-b-[1px] dark:border-slate-300 border-black w-[80%]">
                            <div className="flex justify-between items-center w-full">
                                <h1 className="text-xl sm:text-2xl dark:text-white font-bold select-none">Is there a limit to how many requests I can have?</h1>
                                <p className="text-2xl font-bold">{toggle ? <IoMdArrowDropdown className="bg-slate-200 rounded-full"  /> : <IoMdArrowDropup className="bg-slate-200 rounded-full" />}</p>
                            </div>
                            <p className={`w-[80%] font-medium pt-4 select-none dark:text-slate-400 text-slate-600 ${toggle ? 'hidden' : 'visible'}`}>Once subscribed, you are able to add as many design requests to your queue as you like, and they will be delivered one by one.</p>
                        </motion.div>

                        <motion.div
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        transition={{
                            duration: .4,
                            delay:.5
                        }}
                        viewport={{once:true}}
                        onClick={()=>{setTog(!tog)}} className="flex flex-col cursor-pointer items-start justify-center py-8 border-b-[1px] dark:border-slate-300 border-black w-[80%]">
                            <div className="flex justify-between items-center w-full">
                                <h1 className="text-xl sm:text-2xl font-bold dark:text-white select-none">How fast will I receive my designs?</h1>
                                <p className="text-2xl font-bold">{tog ? <IoMdArrowDropdown className="bg-slate-200 rounded-full"  /> : <IoMdArrowDropup className="bg-slate-200 rounded-full"  />}</p>
                            </div>
                            <p className={`w-[80%] font-medium pt-4 select-none dark:text-slate-400 text-slate-600 ${tog ? 'hidden' : 'visible'}`}>Once subscribed, you are able to add as many design requests to your queue as you like, and they will be delivered one by one.</p>
                        </motion.div>

                        <motion.div 
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        transition={{
                            duration: .4,
                            delay:1
                        }}
                        viewport={{once:true}}
                        onClick={()=>{setT(!t)}} className="flex flex-col cursor-pointer items-start justify-center py-8 border-b-[1px] dark:border-slate-300 border-black w-[80%]">
                            <div className="flex justify-between items-center w-full">
                                <h1 className="text-xl sm:text-2xl font-bold dark:text-white select-none">Who are the designers?</h1>
                                <p className="text-2xl font-bold">{t ? <IoMdArrowDropdown className="bg-slate-200 rounded-full"  /> : <IoMdArrowDropup className="bg-slate-200 rounded-full"  />}</p>
                            </div>
                            <p className={`w-[80%] font-medium pt-4 select-none dark:text-slate-400 text-slate-600 ${t ? 'hidden' : 'visible'}`}>Once subscribed, you are able to add as many design requests to your queue as you like, and they will be delivered one by one.</p>
                        </motion.div>

                        <motion.div 
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        transition={{
                            duration: .4,
                            delay:1.5
                        }}
                        viewport={{once:true}}
                        onClick={()=>{setTo(!to)}} className="flex flex-col cursor-pointer items-start justify-center py-8 border-b-[1px] dark:border-slate-300 border-black w-[80%]">
                            <div className="flex justify-between items-center w-full">
                                <h1 className="text-xl sm:text-2xl font-bold dark:text-white select-none">How does the pause feature work?</h1>
                                <p className="text-2xl font-bold">{to ? <IoMdArrowDropdown className="bg-slate-200 rounded-full"  /> : <IoMdArrowDropup className="bg-slate-200 rounded-full"  />}</p>
                            </div>
                            <p className={`w-[80%] font-medium pt-4 select-none dark:text-slate-400 text-slate-600 ${to ? 'hidden' : 'visible'}`}>Once subscribed, you are able to add as many design requests to your queue as you like, and they will be delivered one by one.</p>
                        </motion.div>

                        <motion.div 
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        transition={{
                            duration: .4,
                            delay:2
                        }}
                        viewport={{once:true}}
                        onClick={()=>{setTogg(!togg)}} className="flex flex-col cursor-pointer items-start justify-center py-8 border-b-[1px] dark:border-slate-300 border-black w-[80%]">
                            <div className="flex justify-between items-center w-full">
                                <h1 className="text-xl sm:text-2xl font-bold dark:text-white select-none">Is there a limit to how many requests I can have?</h1>
                                <p className="text-2xl font-bold">{togg ? <IoMdArrowDropdown className="bg-slate-200 rounded-full"  /> : <IoMdArrowDropup className="bg-slate-200 rounded-full"  />}</p>
                            </div>
                            <p className={`w-[80%] font-medium pt-4 select-none dark:text-slate-400 text-slate-600 ${togg ? 'hidden' : 'visible'}`}>Once subscribed, you are able to add as many design requests to your queue as you like, and they will be delivered one by one.</p>
                        </motion.div>

                
            </div>

        </>
    )
}

export default Question