import React from 'react'
import logo from "../../assets/blacklogo.svg"


const FooterLink = ({ name }) => {
    return (
        <div className="flex gap-x-2" >
            <div className="text-white md:text-xl" >
                {name}
            </div>
            <img
                src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b578631e33d8cb823e5863_Arrow%201.svg"
                loading="lazy"
                alt="arrow"
                className=""
            />
        </div>
    );
};

const Footer = () => {
    const gradient = {
        background: `linear-gradient(45deg, #EEC5BD, #F3B1A5, #C6CAF6, #DAD9E9)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };
    return (
        <div className='flex flex-col gap-y-20 xl:gap-y-30 justify-center items-center p-4 w-full'>
            <div>
                <h4 style={gradient} className=' text-4xl lg:text-6xl xl:text-9xl'>Hello@cardit.com</h4>
            </div>
            <div className='flex flex-col lg:flex-row md:w-full  md:justify-between  gap-y-10  w-full'>
                <div className='flex flex-col gap-y-12'>
                    <div className='flex md:gap-x-10 justify-between'>
                        <FooterLink name={"Instagram"} />
                        <FooterLink name={"Twitter"} />
                        <FooterLink name={"Linkedin"} />
                    </div>
                    <div className='text-gray-400 md:text-xl'>
                        +1 000 000 0000
                    </div>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <span className='border-b border-gray-200 py-2'>
                        <input type="text" placeholder='Enter Your Email...' className='outline-none bg-transparent text-white md:text-3xl' />
                    </span>
                    <span className='border-b border-gray-200 py-2'>
                        <input type="text" placeholder='Message...' className='outline-none bg-transparent text-white md:text-3xl' />
                    </span>
                </div>
            </div>
            <div className='flex justify-end w-full mx-4'>
                <div className='flex items-center gap-x-6 '>
                    <h4 style={gradient} className='md:text-4xl text-2xl'>Send</h4>
                    <span><img src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64cad0f3a9648a318aae6a25_submit%20arrow.svg" loading="lazy" alt="" className="w-[30px]" /></span>
                </div>
            </div>
            <div className='text-gray-400 flex justify-between items-center w-full text-xl'>
                <span>Work</span>
                <span>About</span>
                <span>Contact</span>
                <span>Blog</span>
                <span>Shop</span>
            </div>
        </div>
    )
}

export default Footer