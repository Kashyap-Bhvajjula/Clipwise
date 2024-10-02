
import React from 'react';
import Prod from "./Images/Prod.png";
import "./Card.css";

const Card = () => {
    return (
        <>
        <div className='card'>
            <div className='img-prod'>
                <img src={Prod} alt="Crystal Agate Phone Grip" className='prodImage' />
            </div>
            <div className='prodDesc'>
                <h3 className='text-xl'>CRYSTAL AGATE PHONE GRIP</h3>
                <p className='price text-xl font-bold'>$18.99</p>
            </div>
            <div className='btn-class'>
                <button className='buyButn'>BUY NOW</button>
            </div>
            
        </div>
        </>
    );
}

export default Card;