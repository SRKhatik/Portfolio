import React from "react";
import "./Portfolio.css";
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    RiArrowRightCircleFill
  } from "react-icons/ri";
import { themeContext } from "../../Context";
import { useContext } from "react";
function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="projects">
      {/* heading */}
      <span style={{color: darkMode? 'white':''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}

        <Swiper
          className="portfolio-slider"
          spaceBetween={30}
          slidesPerView={2.5}
          grabCursor={true}
        >
          <SwiperSlide>
            <img src="src/img/ecom.jpg" alt="ecom" />
            <h3>Ecommerce App</h3>
            
            <a href="https://s-mart-ecommerce-web-shubhamkhatik14.netlify.app/">
            <h4 style={{color: darkMode? 'yellow':''}}>View Demo</h4><RiArrowRightCircleFill/>
              </a>
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/img/crm.jpg" alt="crm" />
            <h3>CRM App</h3>
            <a href="https://leafy-bombolone-f83ab9.netlify.app/">
            <h4 style={{color: darkMode? 'yellow':''}}>View Demo</h4><RiArrowRightCircleFill/>
              </a>
            
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/img/movie.jpg" alt="movie" />
            <h3>Movie Booking App</h3>
           
            <a href="#">
            <h4 style={{color: darkMode? 'yellow':''}}>View Demo</h4><RiArrowRightCircleFill/>
              </a>
           
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/img/weather.jpg" alt="weather" />
            <h3>Weather App</h3>
         
            <a href="https://weather-app-srk.netlify.app/">
            <h4 style={{color: darkMode? 'yellow':''}}>View Demo</h4><RiArrowRightCircleFill/>
              </a>
      
          </SwiperSlide>
          <SwiperSlide>
            <img src="src/img/portfolio.jpg" alt="portfolio" />
            <h3>Portfolio App</h3>
 
            <a href="#">
            <h4 style={{color: darkMode? 'yellow':''}}>View Demo</h4><RiArrowRightCircleFill/>
              </a>
            
          </SwiperSlide>
        </Swiper>
   
    </div>
  );
}

export default Portfolio;
