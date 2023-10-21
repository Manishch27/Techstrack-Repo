import { motion } from 'framer-motion'
const Contact = () => {
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
      <div id="contact" className="h-[450px] w-full dark:bg-slate-800 bg-slate-200 relative z-20 flex items-center justify-center sm:justify-end text-white font-mdSans px-5 sm:px-24 py-16" >
        <div className="w-28 sm:w-56 h-28 sm:h-56 absolute left-20 sm:left-32 top-8 bg-blue-500 rounded-full"></div>
        <div className="w-32 h-32 absolute right-[200px] sm:right-[600px] bottom-8 bg-yellow-500 rounded-full"></div>
        <div className="w-28 sm:w-56 h-28 sm:h-56 absolute right-20 sm:right-32 top-10 sm:top-8 bg-red-500 rounded-full"></div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: .5,

          }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center mx-5 sm:mx-0 h-[500px] lg:h-full w-full bg-white/40 backdrop-blur-xl px-0 sm:px-28 rounded shadow-lg  shadow-slate-300 border-t-2 border-l-2 border-r-2 dark:shadow-slate-900 dark:border-slate-800 border-b-2 border-r-slate-100 border-b-slate-100 border-white">

          <div className="gap-6 mt-10 sm:mt-0 flex flex-col items-center sm:items-start p-5 justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center sm:text-left text-black font-semibold">Get in touch with us</h1>
            <p className="text-slate-700 text-center dark:text-slate-900 sm:text-left">Do you still have doubts? Let take a one on one <br /> session with us.</p>
            <button className="shadow-md w-52 shadow-slate-400 hover:bg-cyan-700 text-white duration-300 text-center px-12 py-3 bg-black rounded-md text-xl font-semibold">Call Us</button>
          </div>

          <div className=" py-10 flex items-center justify-center md:justify-end w-full sm:w-[80%] md:w-full lg:w-1/2">
            <img className="pt-0 sm:pt-16 w-44 sm:w-[250px] md:w-[250px] lg:w-[300px] animate-bounce-slow " src="/images/homeimg2.png" />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Contact