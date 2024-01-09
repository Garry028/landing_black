import { motion } from 'framer-motion';
import React from 'react'
import DownloadBadge from './DawnloadBadge';
const CTASection = ({ title, description }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
            }}
            transition={{
                duration: 0.5,
                delay: 0.25
            }}
        >
            <div className="pt-36 px-2 py-10">
                <h2 className=" text-5xl mx-2 lg:text-8xl font-bold text-center text-gray-300">{title}</h2>
                <p className="text-lg text-center mt-10 lg:w-[390px] mx-auto text-gray-400">
                    {description}
                </p>
            </div>
            <div className='flex justify-center pb-48'>
                <DownloadBadge />
            </div>
        </motion.div>
    );
};


export default CTASection