
import React from "react";
import LogoCrystal from "./Images/LogoCrystal.png"; // Adjust the path if necessary
import "./Navbar.css"; // Ensure your CSS file is imported
import Prod from "./Images/Prod.png";
import Carosel from "./Images/carosel.png";
import Grad from "./Images/gradient.png";
import Mouse from "./Images/mouse.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-bg">
        <svg
          className="navbar-svg"
          viewBox="0 0 1440 603"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z"
            fill="white"
          />
        </svg>
        <img src={Grad} alt="" className="grad-img"/>
        <div className="navbar-content">
          <div className="logo-container">
            <img src={LogoCrystal} alt="Logo" className="navbar-logo logo" />
            <p>Pop Rock Crystal</p>
          </div>
          <div className="navbar-header">
            <a href="#" className="navbar-link">
              Home
            </a>
            <a href="#" className="navbar-link">
              Shop
            </a>
            <a href="#" className="navbar-link">
              About Us
            </a>
            <a href="#" className="navbar-link">
              Help
            </a>
            <div className="shop-icon">
              <svg
                width="50"
                height="30"
                viewBox="0 0 50 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.8502 11.25H41.0937L35.75 4.125C35.6626 4.00857 35.5494 3.91406 35.4192 3.84897C35.289 3.78389 35.1455 3.75 35 3.75C34.8544 3.75 34.7109 3.78389 34.5807 3.84897C34.4505 3.91406 34.3373 4.00857 34.25 4.125L28.9062 11.25H25.1498C24.6444 11.2492 24.1594 11.4489 23.8011 11.8052C23.4428 12.1616 23.2405 12.6455 23.2384 13.1508C23.2373 13.3294 23.2632 13.5072 23.3152 13.6781L26.0263 23.2371C26.2026 23.8601 26.5776 24.4085 27.0941 24.7989C27.6107 25.1893 28.2406 25.4003 28.888 25.3998H41.1119C41.7594 25.3978 42.3889 25.1864 42.9064 24.7971C43.4239 24.4079 43.8015 23.8616 43.983 23.24L46.6976 13.6682C46.7101 13.6228 46.7192 13.5766 46.7246 13.5299L46.7556 13.241C46.7591 13.2109 46.7609 13.1805 46.7609 13.1502C46.7587 12.6451 46.5564 12.1614 46.1982 11.8052C45.8401 11.449 45.3553 11.2494 44.8502 11.25ZM35 6.2502L38.75 11.25H31.25L35 6.2502ZM35 20.6057C34.5635 20.6036 34.1375 20.4723 33.7756 20.2283C33.4137 19.9843 33.1322 19.6386 32.9667 19.2347C32.8011 18.8309 32.7588 18.3871 32.8453 17.9593C32.9317 17.5315 33.1429 17.1389 33.4522 16.831C33.7616 16.5231 34.1552 16.3138 34.5834 16.2294C35.0116 16.145 35.4552 16.1894 35.8583 16.3569C36.2613 16.5244 36.6057 16.8075 36.8479 17.1705C37.0902 17.5336 37.2195 17.9602 37.2195 18.3967C37.2162 18.9831 36.9809 19.5445 36.565 19.958C36.1491 20.3715 35.5864 20.6035 35 20.6033V20.6057Z"
                  fill="white"
                />
                <circle cx="7" cy="15" r="7" fill="#FF2B77" />
                <path
                  d="M4.29756 18.128C3.8389 18.128 3.43623 18.0053 3.08956 17.76C2.7429 17.5093 2.47356 17.168 2.28156 16.736C2.0949 16.2987 2.00156 15.808 2.00156 15.264C2.00156 14.72 2.0949 14.232 2.28156 13.8C2.47356 13.3627 2.7429 13.0213 3.08956 12.776C3.43623 12.5253 3.8389 12.4 4.29756 12.4C4.75623 12.4 5.1589 12.5253 5.50556 12.776C5.85223 13.0213 6.1189 13.3627 6.30556 13.8C6.49756 14.232 6.59356 14.72 6.59356 15.264C6.59356 15.808 6.49756 16.2987 6.30556 16.736C6.1189 17.168 5.85223 17.5093 5.50556 17.76C5.1589 18.0053 4.75623 18.128 4.29756 18.128ZM4.29756 17.144C4.55356 17.144 4.7749 17.064 4.96156 16.904C5.15356 16.7387 5.29756 16.5147 5.39356 16.232C5.4949 15.944 5.54556 15.6213 5.54556 15.264C5.54556 14.7093 5.43356 14.2587 5.20956 13.912C4.98556 13.56 4.68156 13.384 4.29756 13.384C3.9189 13.384 3.61756 13.56 3.39356 13.912C3.16956 14.264 3.05756 14.7147 3.05756 15.264C3.05756 15.6213 3.10556 15.944 3.20156 16.232C3.3029 16.5147 3.4469 16.7387 3.63356 16.904C3.82556 17.064 4.0469 17.144 4.29756 17.144ZM9.696 18.128C9.23733 18.128 8.83467 18.0053 8.488 17.76C8.14133 17.5093 7.872 17.168 7.68 16.736C7.49333 16.2987 7.4 15.808 7.4 15.264C7.4 14.72 7.49333 14.232 7.68 13.8C7.872 13.3627 8.14133 13.0213 8.488 12.776C8.83467 12.5253 9.23733 12.4 9.696 12.4C10.1547 12.4 10.5573 12.5253 10.904 12.776C11.2507 13.0213 11.5173 13.3627 11.704 13.8C11.896 14.232 11.992 14.72 11.992 15.264C11.992 15.808 11.896 16.2987 11.704 16.736C11.5173 17.168 11.2507 17.5093 10.904 17.76C10.5573 18.0053 10.1547 18.128 9.696 18.128ZM9.696 17.144C9.952 17.144 10.1733 17.064 10.36 16.904C10.552 16.7387 10.696 16.5147 10.792 16.232C10.8933 15.944 10.944 15.6213 10.944 15.264C10.944 14.7093 10.832 14.2587 10.608 13.912C10.384 13.56 10.08 13.384 9.696 13.384C9.31733 13.384 9.016 13.56 8.792 13.912C8.568 14.264 8.456 14.7147 8.456 15.264C8.456 15.6213 8.504 15.944 8.6 16.232C8.70133 16.5147 8.84533 16.7387 9.032 16.904C9.224 17.064 9.44533 17.144 9.696 17.144Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content-first">
            <heading className="heading-navbar">
              <h3>Welcome to </h3>
              <p>Pop Rock Crystal Shop!</p>
            </heading>
            <br />
            <p>
              Here you will find unique phone accessories, crystals,
              <br />
              jewelry and more. Free shipping inside the U.S. and our
              <br />
              phone grips come with a limited warranty. Enjoy!
            </p>
            <div className="button-flex">
              <button className="shopBtn">SHOP NOW</button>
              <button className="aboutBtn">about us</button>
            </div>
          </div>
          <div className="content-second">
            <div className="outer-square">
              <div className="small-text">
              <span>New lot</span>
              </div> 
              <div className="inner-card">
                <div>
                  <img src={Prod} className="image" alt="" />
                </div>
                <div>
                  <svg
                    width="120"
                    height="2"
                    viewBox="0 0 120 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="120" height="2" rx="1" fill="#F2F2F2" />
                  </svg>
                  <br />
                </div>
                <div>
                  <h1 className="text-[#317189] inner-text font-normal leading-6">
                    CRYSTAL AGATE PHONE GRIP - <span className="font-bold">18.99$</span>
                  </h1>
                </div>
                <div className="carosel">
                  <img src={Carosel} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mouse-footer">
        <img src={Mouse} alt="" />
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Navbar;
