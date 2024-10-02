import React from 'react'
import Prod1 from "./Images/Prod1.png";

const style ={
    color: 'green',
}

const NavCard = () => {
    return (
        <div className='bg-black'>
            <div className='carouselCard w-[569px] h-[554px] rounded-[30px] bg-white flex flex-col justify-center items-center'>
                <img src={Prod1} alt="" />
                <svg width="120" height="2" viewBox="0 0 120 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="120" height="2" rx="1" fill="#F2F2F2" />
                </svg>
                <br />

                <h1 className='text-[#317189] font-bold leading-6'>CRYSTAL AGATE PHONE GRIP - 18.99$</h1>

            </div>
        </div>
    )
}

export default NavCard