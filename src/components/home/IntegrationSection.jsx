import React from 'react'
import IconBoxes from './IconBoxes';
import { motion } from 'framer-motion';

const IntegrationSection = () => {
    const gradient = {
        background: `linear-gradient(45deg, #EEC5BD, #F3B1A5, #C6CAF6, #DAD9E9)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };
    const handleContact = () => {
        window.location.href = "/contact"
    }
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
            className="bg-[#161B22] pb-10 md:pb-20">
            <div className="flex-col flex pt-20 px-1">
                <h1 className="text-center text-4xl lg:text-7xl text-gray-300 font-bold">Unlock Exclusive  <span style={gradient}>Rewards</span></h1>
                <p className="text-center mx-auto text-lg mt-10 text-gray-400 lg:w-[500px]">
                    Shop and get loyalties in your favorite brands & outlets by paying with cardit.
                </p>
            </div>
            <div className="h-[400px] flex justify-center items-center py-10  border-gray-50">
                <IconBoxes />
            </div>
            {/* Partner with us button */}
            <div className='flex flex-col md:flex-row justify-between items-center mx-3 md:mx-10 px-4 md:px-10 py-4 rounded-xl border border-gray-500'>
                <div className='space-y-3 mb-8 md:mb-1'>
                    <p className='text-white text-md md:text-lg font-bold text-center md:text-start'>Got a brand <span style={gradient}>people love?</span> </p>
                    <div className='text-white text-center '>Partner with Cardit. Elevate your brand's visibility among our growing user base.</div>
                </div>
                <div className=''>
                    <button className="px-5 py-2 text-black rounded-md w-fit bg-gradient-to-r from-rose-100 to-teal-100 font-semibold" onClick={handleContact}>
                        Partner with us
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default IntegrationSection