import React from 'react'
const CardTrial = ({ txt }) => {
    return (
        <div className="w-auto h-12 pl-7 pr-1 py-6 bg-slate-950 bg-opacity-50 rounded-full border border-neutral-50 border-opacity-20 justify-end items-center inline-flex">
            <div className="w-auto self-stretch lg:pr-72 justify-start items-center inline-flex">
                <input className="text-slate-400 text-base font-normal w-full border-none outline-none bg-black" placeholder="Enter Your Email"></input>
            </div>
            <div className="lg:w-40 lg:h-11 px-6 pt-3 pb-3.5 bg-white rounded-full justify-center items-center inline-flex">
                <div className="w-18 lg:w-28 h-5 text-center text-black text-base font-semibold leading-tight">
                    {txt}
                </div>
            </div>
        </div>
    );
};
export default CardTrial