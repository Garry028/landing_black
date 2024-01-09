import React from 'react'
import mobileImage from "../../assets/phone_Img.png"
import { motion } from 'framer-motion'


const Mobile = () => {
    return (
        <motion.div

            className={` w-[196px] h-[400px] lg:w-[296px] lg:h-[601px] bg-contain object-contain object-center absolute left-[50%] top-16 translate-x-[-50%] bg-black lg:rounded-[45px]`} style={{ backgroundImage: `url(${mobileImage})` }}>

        </motion.div>
    )
}


export default Mobile