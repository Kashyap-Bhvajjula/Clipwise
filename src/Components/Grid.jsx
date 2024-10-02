import React, { useState } from 'react';
import Card from './Card';
import './Card.css';

const Grid = () => {
  // State to manage the visibility of extra cards
  const [showExtra, setShowExtra] = useState(false);

  // Function to toggle the visibility
  const toggleExtraCards = () => {
    setShowExtra(prevState => !prevState);
  };

  return (
    <>
      <h1 className='text-[#31546D] text-5xl flex justify-center font-bold'>All Products</h1>
      <div className='items-center justify-center flex leading-10'>
        <br />
        <svg width="58" height="4" viewBox="0 0 58 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="58" height="4" rx="2" fill="#F2F2F2" />
        </svg>
      </div>

      <p className='sorts ml-16 m-6'>
        <span className='text-[#9AB0C0] font-bold'>Filter:
          <select className='text-[#31546D] font-bold'>
            <option value="">All Products</option>
            <option value="">Phone Accessories</option>
            <option value="">Crystals</option>
            <option value="">Jewelry</option>
          </select>
        </span>
        <span className='m-16 w-2 text-[#9AB0C0] font-bold'>Sort:
          <select className='text-[#31546D] font-bold'>
            <option value="">Best Selling</option>
            <option value="">Price: Low to High</option>
            <option value="">Price: High to Low</option>
            <option value="">Newly Launched</option>
          </select>
        </span>
      </p>
      
      <div className='grid-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {showExtra && (
          <>
            <Card className='extraCards' />
            <Card className='extraCards' />
            <Card className='extraCards' />
          </>
        )}
      </div>
      
      <div className='button-container flex justify-center'>
        <button onClick={toggleExtraCards} className='buyButn'>
          {showExtra ? 'Show Less' : 'View All'}
        </button>
      </div>
    </>
  );
};

export default Grid;
