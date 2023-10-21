

import { motion } from 'framer-motion'
const Features = () => {

    const data = [
        {
            id: 1,
            img: "/images/responsive.png",
            title: "Responsive Website Development",
            para: "We will develop or design a fully responsive and attractive single or multi-page website, as well as landing page, for your business."
        },
        {
            id: 2,
            img: "/images/revision.png",
            title: "1 Year Free Revision",
            para: "We will also provide 1 year of free revisions for your software. So you can do whatever changes you wanted to do in your software."
        },
        {
            id: 3,
            img: "/images/team.png",
            title: "Skilled Team",
            para: "Each member of our team is proficient in their work so, we will deliver a top notch software to you without any complaints."
        },
        {
            id: 4,
            img: "/images/seo2.png",
            title: "SEO",
            para: "SEO (Search Engine Optimization) is the key factor to rank any website higher in google search results so, we will also do basic SEO for your website for Free."
        },
    ]


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

            <div id="feature" className="px-5 sm:px-10 md:px-20 py-20 font-mdSans dark:bg-slate-800 bg-slate-200">
                <motion.h1
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: .4,

                    }}
                    viewport={{ once: true }}

                    className="text-2xl sm:text-3xl font-mdSans font-bold pb-20 uppercase dark:text-white text-center w-full">WHY SHOULD YOU HIRE US?</motion.h1>
                <div className="flex flex-wrap items-center justify-center gap-10">

                    <motion.img
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        transition={{
                            duration: .4,
                            delay: .3
                        }}
                        viewport={{ once: true }}
                        className="w-full sm:w-[80%] md:w-[60%] lg:w-[45%]" src="/images/website.png" alt="Image not found" />
                    <div className="space-y-7 md:w-[100%] lg:w-[50%]">

                        {
                            data.map((val, i) => {
                                return (
                                        <motion.div
                                            key={val.id}
                                            variants={fadeInAnimationVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            transition={{
                                                duration: .4,
                                                delay: i * 0.3
                                            }}
                                            viewport={{ once: true }}
                                            className="flex">
                                            <div className="flex items-center justify-center gap-5">
                                                <div className="w-24 h-20 sm:w-28 sm:h-28 rounded-full dark:bg-slate-600 dark:border-slate-700 bg-red-100 border-4 border-red-200 flex items-center justify-center">
                                                    <img className="h-[50px] sm:h-[80px]"
                                                        src={val.img} alt="Image not found" />
                                                </div>
                                                <div className="space-y-1 w-[80%]">
                                                    <h1 className="text-xl sm:text-2xl dark:text-white font-bold ">{val.title}</h1>
                                                    <p className="text-sm sm:text-base dark:text-slate-400 text-slate-600">{val.para}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default Features