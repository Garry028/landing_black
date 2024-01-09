import React from 'react';
import Heading from '../components/home/Heading';
import Mobile from '../components/home/Mobile';
import IconsRow from '../components/home/IconsRow';
import StickyComp from '../components/home/StickyComp';
import HandSticky from '../components/home/HandSticky';
import BottomGrid from '../components/home/BottomGrid';
import BottomHeading from '../components/home/BottomHeading';
import IntegrationSection from '../components/home/IntegrationSection';
import CTASection from '../components/home/CTASection';
import CardDivHeading from '../components/home/CardDivHeading';
import { motion } from 'framer-motion';

import CardTrial from '../components/home/CardTrial';
import NewsLetter from '../components/home/NewsLetter';

const HomeSection = ({ title, description }) => {
    return (
        <div className="text-gray-300">
            <motion.div
                className="relative h-[100vh] lg:h-[150vh]">
                <Heading />
                <Mobile />
            </motion.div>
            <motion.div
                className="w-full text-gray-300 h-[70vh] mt-10">
                <p className="text-center font-semibold text-lg text-gray-400 lg:w-[700px] mx-auto ">
                    {title}
                </p>
                <div className="flex justify-center mt-10">
                    <CardTrial txt={" Get free Card"} />
                </div>
                <div className="mt-8">
                    <IconsRow />
                    <p className="text-center text-gray-400 font-semibold text-lg mt-8">{description}</p>
                </div>
            </motion.div>
        </div>
    );
};
const HomePage = () => {
    return (
        <>
            <HomeSection
                title="Seamlessly pay with your Cardit with more convenience and greater savings."
                description="Trusted by Top-tier product campanies"
            />
            <CardDivHeading />
            <IntegrationSection />
            <StickyComp />
            <CTASection
                title="Start using Cardit now"
                description="Download now and see how fun it is to shop, save & earn with cardit."
            />
            <HandSticky />
            <div className='container mx-auto bg-white'>
                <BottomHeading />
                <BottomGrid />
            </div>
            <div className='bg-white md:h-[100vh] pb-4'>
                <NewsLetter />
            </div>
        </>
    );
};

export default HomePage;
