import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";


const BottomHeading = () => {

    const gradient = {
        background: `linear-gradient(45deg, #EEC5BD, #F3B1A5, #C6CAF6, #DAD9E9)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={mainControls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
            }}
            transition={{
                duration: 0.5,
                delay: 0.25
            }}
            className="bg-white text-black lg:h-96 pt-4">
            <h2 className="text-4xl lg:text-8xl text-center font-bold">Take control of your <br /> <span style={gradient}>loyalties</span> with Cardit!</h2>
            <p className="mx-auto lg:text-lg text-center mt-6 lg:w-[400px] px-3">
                Start using cardit now and see how easy it is to shop, save & earn with cardit.
            </p>
        </motion.div>
    )
}

export default BottomHeading;