import React from 'react';
const BottomGrid = () => {
    return (
        <div className='bg-white md:mx-20 md:h-screen mt-28'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-5'>
                <div className='row-span-1 lg:row-span-2 bg-gray-100 p-4 rounded-lg  h-[519px]'></div>
                <div className='col-span-1 lg:col-span-2 bg-gray-100 p-4 rounded-lg'></div>
                <div className='row-span-1 lg:row-span-2 bg-gray-100 p-4 rounded-lg'></div>
                <div className='col-span-1 lg:col-span-2 bg-gray-100 p-4 rounded-lg '></div>
            </div>
        </div>
    );
};
export default BottomGrid;
