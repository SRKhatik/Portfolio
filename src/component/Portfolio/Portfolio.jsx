import React from "react";
import "./Portfolio.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Ecom from "../../img/ecom.jpg";
import Petgram from "../../img/petgram.jpg";
import Weather from "../../img/weather.jpg";
import Movie from "../../img/movie.jpg";
import Portfolios from "../../img/portfolio.jpg";
import Crm from "../../img/crm.jpg";
import Game from "../../img/tic-tac.jpg";
function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="projects">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}

      <Swiper
        className="portfolio-slider"
        spaceBetween={30}
        slidesPerView={2.5}
        grabCursor={true}
      >
        <SwiperSlide>
          <img src={Petgram} alt="petgram" />
          <h3>Petgram</h3>
          <a href="https://petgramdemo.onrender.com/">
            <h4 style={{ color: darkMode ? "yellow" : "" }}>View Demo</h4>
            <RiArrowRightCircleFill />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecom} alt="ecom" />
          <h3>Ecommerce App</h3>
          <a href="https://s-mart-ecommerce-web-shubhamkhatik14.netlify.app/">
            <h4 style={{ color: darkMode ? "yellow" : "" }}>View Demo</h4>
            <RiArrowRightCircleFill />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Crm} alt="crm" />
          <h3>CRM App</h3>
          <a href="https://crm-application-2023.netlify.app/">
            <h4 style={{ color: darkMode ? "yellow" : "" }}>View Demo</h4>
            <RiArrowRightCircleFill />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Movie} alt="movie" />
          <h3>Movie Booking App</h3>

          <a href="https://movie-nights-srk.netlify.app">
            <h4 style={{ color: darkMode ? "yellow" : "" }}>View Demo</h4>
            <RiArrowRightCircleFill />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Weather} alt="weather" />
          <h3>Weather App</h3>

          <a href="https://weather-app-srk.netlify.app/">
            <h4 style={{ color: darkMode ? "yellow" : "" }}>View Demo</h4>
            <RiArrowRightCircleFill />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolios} alt="portfolio" />
          <h3>Portfolio App</h3>

          <a href="#">
            <h4 style={{ color: darkMode ? "yellow" : "" }}>View Demo</h4>
            <RiArrowRightCircleFill />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Game} alt="tictactoe" />
          <h3>Tic-Tac-Toe-Game</h3>

          <a href="https://tic-tac-toe-srk.netlify.app">
            <h4 style={{ color: darkMode ? "yellow" : "" }}>View Demo</h4>
            <RiArrowRightCircleFill />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
