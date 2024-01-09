import React from 'react'
import first from "../../assets/box_1_img.png"
import second from "../../assets/box_2_img.png"
import third from "../../assets/box_3_img.png"
import fourth from "../../assets/box_4_img.png"
import Card from './Card'
import { motion, useInView } from 'framer-motion'

const CardDivHeading = () => {
    const gradient = {
        background: `linear-gradient(45deg, #EEC5BD, #F3B1A5, #C6CAF6, #DAD9E9)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };
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
            className=' text-gray-300 pb-24'>
            <h1 className='text-4xl lg:text-8xl text-center font-bold tracking-wide pb-10'>Let’s just not pay it   <br /> <span className='' style={gradient}>CARDIT</span>  </h1>
            <div className='grid z-50 grid-cols-1 lg:grid-cols-8 md:mt-20 gap-6 mt-10 lg:w-[1000px] 2xl:w-[1300px] mx-auto '>
                <Card classNames="col-span-1 lg:col-span-5" url={first} cardTitle={"Effortlessly tracking with Cardit"} cardPara={"Designed for you, Black is the perfect solution for you and your teams tracking time."} />
                <Card classNames="col-span-1 lg:col-span-3" url={second} cardTitle={"Save your time"} cardPara={" Available on iOS and Android, Black is accessible  from any device. "} />
                <Card classNames="col-span-1  lg:col-span-3" url={third} cardTitle={"Tracking"} cardPara={"Comes with built-in workflows that create focus and routine."} />
                <Card classNames="col-span-1 lg:col-span-5 " url={fourth} cardTitle={"Experience seamless Tracking"} cardPara={"Awarded App of the day, Black has been recognized as the top choice for teams and individuals."} />
            </div>
        </motion.div>
    )
}
export default CardDivHeading
