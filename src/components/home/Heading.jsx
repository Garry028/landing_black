import React from 'react'
import { motion } from 'framer-motion';

const Heading = () => {
    const gradient = {
        background: `linear-gradient(45deg, #EEC5BD, #F3B1A5, #C6CAF6, #DAD9E9)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    const rotateVariants = {
        visible: {
            opacity: 1,
            rotateX: 0,
        },
        hidden: {
            opacity: 0,
            rotateX: 100,
        },
    };


    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={rotateVariants}
            transition={{
                duration: 1,
            }}
            className='flex justify-center md:gap-14 gap-4 sticky top-60'>
            <div className="text-5xl md:text-8xl lg:text-[150px] xl:text-[200px] font-extrabold font-['Manrope'] leading-10 flex justify-center items-center" style={gradient}>Meet</div>
            <div className="text-5xl md:text-8xl lg:text-[150px] xl:text-[200px] font-extrabold font-['Manrope'] leading-10 flex justify-center items-center" style={gradient}>Cardit</div>
        </motion.div>
    );
}

export default Heading;
