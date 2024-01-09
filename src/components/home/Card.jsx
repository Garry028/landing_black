import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Card = ({ classNames, url, cardTitle, cardPara }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
    );

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`${classNames} bg-[#151b22]  mx-3  lg:mx-0 rounded-xl border border-gray-800 lg:h-auto flex flex-col justify-between`}
        >
            <img src={url} alt="BoxImg" />
            <div className='flex flex-col gap-3 items-center  p-6'>
                <div className='text-3xl font-bold text-gray-300 text-center'>{cardTitle}</div>
                <div><p className='text-center text-gray-500 font-medium'>{cardPara}</p></div>
            </div>
        </motion.div>
    )
}


export default Card