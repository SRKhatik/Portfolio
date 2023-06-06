import React from "react";
import "./Works.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import work2 from "../../img/hni-2.png";
import work1 from "../../img/free.jpg";
import work3 from "../../img/sai.png";
import { useContext } from "react";
import { themeContext } from "../../Context";
const Works = () => {
  const theme = useContext(themeContext)
  const darkMode=theme.state.darkMode
  const clients = [
    {
      img:work1,
      heading:"Freelance Work",
      review:
        "I actively pursue frontend and backend expertise as a student and freelancer to improve my skills. I gain real expertise in creating reliable and responsive web applications by taking on a variety of assignments. I am committed to delivering exceptional results and staying updated with the latest industry trends.",
    },
    {
      img:work2,
      heading:"HNI Office India LTD.Nagpur",
      review:
        "Experienced Diploma Engineer (DET) at HNI Office India Limited Nagpur, Department in Industrial Engineering. Contributed to the company's success for 2 years, implementing efficient processes and optimizing operations to enhance productivity and quality. ",
    },
    {
      img:work3,
      heading:"Computer Teacher",
      review:
        "Computer Teacher at Sai Ambrosia Computer Education, imparting knowledge and skills for 1 year. Guiding students to Ms office in computer education,My extensive knowledge of Excel, Powerpoint, and other programmes allows me to improve my teaching abilities as a computer teacher.",
    }
  ];
  return (
    <div className="t-wrapper" id="work">
      <div className="t-heading">
        <span style={{color: darkMode? 'white':''}}>Working </span>
        <br/>
        <span> Experience</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{color: darkMode? 'black':''}}>{client.heading}</span>
                <span style={{color: darkMode? 'white':''}}>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Works;
