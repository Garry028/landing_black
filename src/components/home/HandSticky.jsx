import React from 'react'
import mobileHand from "../../assets/handPhone.png"
import bgImage from "../../assets/BackgroundImage.png"
const HandSticky = () => {
    return (
        <div className='w-full relative h-[1800px] bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className={`w-full h-[601px] bg-center sticky top-24 bg-no-repeat bg-contain rounded-[45px]`} style={{ backgroundImage: `url(${mobileHand})` }}>
                {/* For text use mix blend property */}
            </div>
        </div>
    )
}
export default HandSticky