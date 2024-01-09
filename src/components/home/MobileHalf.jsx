import mobileImage from "../../assets/phone_Img.png"

const MobileHalf = () => {
    return (

        <div
            className={` w-[300px] lg:w-[430px] h-[450px] bg-cover absolute left-[50%] bottom-0 translate-x-[-50%] bg-black rounded-t-[65px] `} style={{ backgroundImage: `url(${mobileImage})` }}
        >
        </div>

    )
}


export default MobileHalf