import React from 'react';
import './Footer.css';
import Prod from './Images/Prod.png';
import Circle from "./Images/Ellipsecir.png";

const Footer = () => {
    return (
        <div className="min-h-screen flex flex-col flex-circle-container p-0">
            <div className="flex flex-grow foot">
                <div className="container flex-grow p-4">
                    <div className="footer text-right">
                        <p className="font-normal text-[#31546D] text-[2.5rem] leading-[4rem]">BEST PRICE</p>
                        <p className="font-bold text-[#31546D] text-[4rem] leading-[4rem]">Agate Phone Grip</p>
                        <div className="flex justify-end items-center">
                            <span className="font-normal text-2xl leading-[1.8rem] text-[#41A0B7] line-through mx-4">44.50$</span>
                            <span className="text-[#E35B3E] font-bold text-[4.3rem]">19.50$</span>
                        </div>
                        <p className="text-base font-normal text-right text-[#31546D]">
                            These Pop Rock Crystal grip tops can be swapped with<br />
                            other tops depending on your mood, outfit, nails,<br />
                            phone case, holiday, etc.! Just gently squeeze the sides<br />
                            to remove and swap out with another color or design!
                        </p>
                        <button className="w-[11.25rem] h-[3.5rem] rounded-[1.125rem] text-white ftBtn mt-9">BUY NOW</button>
                    </div>
                </div>
                <div className="circle-container">
                    <div className="semi-circle">
                        <img src={Circle} alt="" />
                    </div>
                    <div className="outer-circle">
                        <div className="inner-circle">
                            <img src={Prod} alt="Your Image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#0A294DCC] h-[269px] w-full'>
            </div>
        </div>
    );
}

export default Footer;
