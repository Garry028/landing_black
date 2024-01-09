import React from 'react'
import { motion, useScroll, useMotionTemplate } from 'framer-motion';

const gradient = {
    background: `linear-gradient(45deg, #EEC5BD, #F3B1A5, #C6CAF6, #DAD9E9)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
};

const EmailBig = () => {
    return (
        <div className='bg-gradient-to-r mt-6 pt-10 gap-y-10 pb-4 md:pb-2 md:gap-y-0  md:py-2 md:px-10 from-rose-200  to-blue-200 rounded-xl md:rounded-full placeholder-black outline-none text-xl xl:text-3xl  xl:w-[800px] flex flex-col md:flex-row  justify-center items-center md:justify-between px-2 w-full'>
            <input
                type="email"
                placeholder='Enter Your Email'
                className="bg-transparent outline-none  "
            />
            <button
                type="submit"
                className="xl:p-10 p-4 rounded-full text-white text-3xl bg-black md:mr-[-30px] w-full md:w-auto "
            >
                <span className='tracking-widest md:px-8'>
                    Subscribe
                </span>
            </button>
        </div>
    );
};

const NewsLetter = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
                scaleX: scrollYProgress,
            }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.2,
            }}
            className=' bg-black lg:p-4 rounded-[30px] h-[400px] lg:h-[580px] flex justify-center mx-2 md:mx-32 '>
            <div className='flex flex-col w-fit justify-center items-center'>
                <h4 className='text-white uppercase text-[44px]  md:text-6xl xl:text-9xl font-semibold ' style={gradient}>Newsletter</h4>
                <EmailBig />
            </div>
        </motion.div>)
}

export default NewsLetter