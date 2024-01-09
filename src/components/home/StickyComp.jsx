import { motion, useScroll } from 'framer-motion';
import React from 'react'


const Feature = ({ url }) => {

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.1,
            }}
            className="p-2 md:p-6 shadow-lg rounded-lg h-[200px] md:h-[350px] md:w-full bg-gradient-to-r from-slate-500 to-yellow-100">
        </motion.div>
    )
};

const FeaturesGrid = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div

            transition={{
                duration: 1,
                ease: 'easeInOut',
                delay: 0.5,
            }}
            style={{
                scaleX: scrollYProgress,
            }}
            className="grid grid-cols-1 gap-y-60">
            <Feature url="" />
            <Feature url="" />
            <Feature url="" />
        </motion.div>
    )
};


const StickyComp = () => {
    return (
        <div
            className='flex flex-col lg:flex-row lg:justify-center lg:items-start text-gray-300 px-4 lg:px-20 gap-20 lg:py-48 mt-0 lg:mt-0'>
            <div className='lg:w-1/2 lg:sticky lg:top-20 mt-4 md:mt-0 '>
                <h1 className='font-bold tracking-wide text-5xl text-gray-300 lg:text-7xl'>Designed for your team, see for yourself</h1>
                <p className='text-gray-400 mt-6 lg:mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna urna, sodales vel quam ut, tincidunt ultrices arcu. Suspendisse vehicula id est a varius.
                </p>
            </div>
            <div className='lg:w-1/2 lg:pt-[600px]'>
                <FeaturesGrid />
            </div>
        </div>
    )
}


export default StickyComp




