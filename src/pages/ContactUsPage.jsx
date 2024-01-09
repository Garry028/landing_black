import React from 'react'

const ContactUsPage = () => {
    return (
        <div className='h-screen p-4 md:p-10 flex justify-center items-center'>
            <div className='flex flex-col gap-y-6'>
                <div>
                    <p className='text-gray-500 font-medium text-center'>PARTNER WITH US</p>
                    <h1 className='text-center text-4xl md:text-6xl font-bold mt-4'>Elevate your brand's <br /> visibility </h1>
                </div>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='flex flex-col gap-y-6 md:flex-row justify-between w-full gap-x-6'>
                        <input type="text" className='p-2 outline-none md:w-1/2 rounded-md' placeholder='Your Name' />
                        <input type="text" className='p-2 outline-none md:w-1/2 rounded-md' placeholder='Your Email' />
                    </div>
                    <div className='w-full'>
                        <textarea className='p-4 outline-none w-full rounded-md mt-6' placeholder='How can we help?'></textarea>
                        <button className='p-2 bg-black text-white rounded-md w-full mt-4'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage