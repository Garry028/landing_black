import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
const logos = [
    {
        id: 1,
        imageSrc: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d014355af3ba7_Logo%2001.svg',
        alt: 'Logo 01',
    },
    {
        id: 2,
        imageSrc: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d015ecbaf3ba6_Logo%2002.svg',
        alt: 'Logo 02',
    },
    {
        id: 3,
        imageSrc: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d0138f9af3ba4_Logo%2004.svg',
        alt: 'Logo 04',
    },
    {
        id: 4,
        imageSrc: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d01fd21af3ba3_Logo%2003.svg',
        alt: 'Logo 03',
    },
    {
        id: 5,
        imageSrc: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d01ab8eaf3ba5_Logo%2005.svg',
        alt: 'Logo 05',
    },
    {
        id: 6,
        imageSrc: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d014355af3ba7_Logo%2001.svg',
        alt: 'Logo 06',
    },
];

const Logo = ({ logo }) => {

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

            className="h-auto blur-sm">
            <motion.img
                whileHover={
                    {
                        scale: 1.1,
                        transition: {
                            duration: 0.4
                        },
                        boxShadow: '0px 0px 10px rgba(255,  255, 255)'
                    }
                }
                src={logo.imageSrc}
                loading="lazy"
                alt={logo.alt}
                className="rounded-2xl "
            />
        </motion.div>
    );
};

const IconBoxes = () => {
    return (
        <div className="grid grid-cols-3  md:grid-cols-6 gap-6 md:gap-20 my-10 mx-2 md:mx-10  ">
            {logos.map(logo => (
                <Logo key={logo.id} logo={logo} />
            ))}
        </div>
    );
};

export default IconBoxes;
